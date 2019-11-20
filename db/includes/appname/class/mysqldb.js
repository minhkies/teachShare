const approot = require('app-root-path');
const config = require(approot+"/config"); 
const types = config.types;
const Generic = require("./generic");
const db = require("./connect");
const encrypt = types.encrypt;
const Hash = require(types.HASH_PATH);

class DB extends Generic {
  constructor(table, cols){
    super();
    this.table = table;
    this.cols = cols;
    this.result = null;
    this.query = null;
    this.errordb = null;
    this.config = null;
  }
  
  get get_errordb(){
    return this.errordb;
  }
  
  set set_query(d){
    if(d){
      this.query = d;
    }
  }
  
  set set_result(d){
    if(d){
      this.result = d;
    }
  }
  
  set set_table(d){
    if(d){
      this.table = d;
    }
  }

  set set_config(d){
    if(d){
      this.config = d;
    }
  }
  
  /*set scols(d){
    if(d){
      this.cols = d;
    }
  }*/
  
  get gresult(){
    return this.result;
  }
  
  async runquery(q, data, callback){
    let obj = null;
    try {
      var rows = await db.query(q, data);
      obj = {status:true, msg:"query successful", data:rows};
    } catch (err){
      obj = {error:err, status:false, msg:"failed to run query"};
    }
    if(typeof callback === "function"){
      callback(obj);
    }
    return obj;
  }
  
  async insert(data, r, end){
    
    let table = this.table,
        cols = [],
        ret = (r) ? r.join(",") : "id";
    
    //vars for inserts.
    let args = [],
        args_str = "",
        vals = [],
        ind = 0;
    
    //function for sorting arguments, to reuse in multi inserts
    const sortArgs = async(d)=>{
      for(var i in d){
        if(this.cols.indexOf(i) !== -1){
          if(cols.indexOf(i) === -1){
            cols.push(i);
          }
          args.push("$"+(ind+1));
          if(this.config !== null){
            if(this.config.encrypt && this.config.encrypt.indexOf(i) !== -1){
              d[i] = await encrypt(d[i]);
            }
            if(this.config.hash && this.config.hash.indexOf(i) !== -1 && d[i] === true){
              d[i] = Hash();
            }
          }
          vals.push(d[i]);
          ind++;
        } else {
          this.errordb = "tried to insert into a column that doesn't exists";
          break;
        }
      }
      return "("+args.join(",")+")";
    }

    if(Array.isArray(data)){
      //if it's a multi insert using an array
      var args_arr = [];
      for(var i = 0; i < data.length; i++){
        args = [];
        if(typeof data[i] === 'object'){
          args_str = await sortArgs(data[i]);
          args_arr.push(args_str);
        }
      }
      args_str = args_arr.join(",");
    } else if(typeof data === 'object'){
      //if it's a single insert using an object
      args_str = await sortArgs(data);
    }

    
    //if there was an error fail it now
    if(this.errordb){
      return {error:this.errordb, status:false, msg:"failed to insert"};
    }

    let query = "INSERT INTO "+table+" ("+cols.join(",")+") VALUES "+args_str+" RETURNING "+ret;
    //console.log(data, query, vals);
    
    let obj = null;
    try {
      var rows = await db.query(query, vals);
      obj = {status:true, msg:"insert successful", data:rows};
    } catch (err){
      console.log(err);
      obj = {error:err.message, status:false, msg:"failed to insert"};
    }
    
    //console.log(obj);
    this.query = null;
    return obj;
  }
  
  //have a way to join tables
  async read(data, r){
    let vals = [],
        query = null;
    
    //if there is a join table - only allows 1 join for now
    /*
      join obj has
        table - the table to join
        join1 - first column
        join2 - second column
        items - string that details what to return in the query
    */
    //let joinstr = (join) ? " LEFT JOIN "+join.table+" ON "+join.join1+" = "+join.join2 : "";
    let ind = 1,
        w_strs = [];
    
    if(data){
      //go through the data to match data
      for(var i in data){
        let w_args = [];
        if(this.cols.indexOf(i) === -1){
          this.errordb = "tried to read a column that doesn't exists";
          break;
        }

        if(this.config !== null){
          //need to do a bcrypt compare in the future
          if(this.config.ignore && this.config.ignore.indexOf(i) !== -1){
            continue;
          }
        }

        if(Array.isArray(data[i])){
          //if it's an array, where are matching multiple IN(1,2,3,etc)
          for(var j = 0; j<data[i].length; j++){
            w_args.push("$"+ind);
            vals.push(data[i][j]);
            ind++;
          }
        } else {
          //otherwise it's just 1 item to match
          w_args.push("$"+ind);
          vals.push(data[i]);
          ind++;
        }
        
        //put all the WHERE's together in an array
        w_strs.push(this.table+"."+i+" IN ("+w_args.join(",")+")");
      }
      
      //select the tables to return
      let r_strs = r.map((o)=>{
        return this.table+"."+o
      });

      if(w_strs.length > 0){
        w_strs = " WHERE "+w_strs.join(" AND ");
      } else {
        w_strs = "";
      }

      let j_strs = [],
          order = " ORDER BY id";
      if(this.config !== null){
        //go through the join tables
        if(this.config.join && this.config.join.length > 0){
          //loop through an array of joins
          for(var j = 0; j<this.config.join.length; j++){
            var jobj = this.config.join[j];
            var ntable = jobj.model;
            //JOIN newtable ON newtable.col = thistable.col
            
            /*
              when joins are specify as an column obj 
              {id:"user_id"} means ON current table's id = new table's user_id
            */
            if(jobj.cols){
              var join_on = [];
              for(var col1 in jobj.cols){
                join_on.push(this.table+"."+col1+"="+ntable+"."+jobj.cols[col1]);
              }
              j_strs.push("LEFT JOIN "+ntable+" ON "+join_on.join(" AND "));
            }

            /*
              when joins are specify as a string provided by the user
            */
            if(jobj.join_stmt){
              j_strs.push("LEFT JOIN "+ntable+" ON "+jobj.join_stmt);
            }

            //go through all the data the table wants
            if(jobj.data && jobj.data.length > 0){
              for(var jd=0; jd<jobj.data.length; jd++){
                
                //if it's an object instead of string, this means there's custom column name using AS
                if(typeof jobj.data[jd] === "object" && jobj.data[jd].col && jobj.data[jd].as){
                  r_strs.push(ntable+"."+jobj.data[jd].col+" AS "+jobj.data[jd].as);
                } else {
                  r_strs.push(ntable+"."+jobj.data[jd]);
                }
              }
            }
          }
        }
        if(this.config.order){
          if(Array.isArray(this.config.order)){
            order = " ORDER BY "+this.config.order.join(",");
          } else {
            order = " ORDER BY "+this.config.order;
          }
          
          order += (this.config.order_type) ? this.config.order_type : " ASC";
        }
      }

      query = "SELECT "+r_strs.join(",")+" FROM "+this.table+" "+j_strs.join(" ")+w_strs+order;
      
      //console.log(query, vals);
    } else {
      this.errordb = "no vallid data";
      //this.gsuccessdb();
    }

    if(this.errordb){
      return {error:this.errordb, status:false, msg:"no valid data"};
    }
    
    let obj = null;
    try {
      var rows = await db.query(query, vals);
      obj = {status:true, msg:"read successful", data:rows};
    } catch (err){
      obj = {error:err, status:false, msg:"failed to read"};
    }
    this.query = null;
    return obj;
  }
  
  async update(data, r){
    let sets = [],
        ind = 1,
        cols = [],
        a_cols = [],
        w_cols = [],
        vals = [],
        ret = (r) ? r.join(",") : "id";
    
    //for fail-safe purpose, updates and deletes must have query_where options
    //if you want to update everything just do id=*
    if(this.config !== null){

      const sortArgs = async(d)=>{
        for(var i in d){
          if(a_cols.indexOf(i) === -1){
            a_cols.push(i);
          }
          if(this.config.query_where && this.config.query_where.indexOf(i) !== -1){
            if(w_cols.indexOf(i) === -1){
              w_cols.push(i);
            }
          } else {
            if(cols.indexOf(i) === -1){
              cols.push(i);
            }
          }

          if(this.config.encrypt && this.config.encrypt.indexOf(i) !== -1){
            d[i] = await encrypt(d[i]);
          }
          if(this.config.hash && this.config.hash.indexOf(i) !== -1 && d[i] === true){
            d[i] = Hash();
          }

          if(Number.isInteger(d[i])){
            sets.push("$"+ind+"::int");
          } else {
            sets.push("$"+ind);
          }

          vals.push(d[i]);
          ind++;
        }
      }

      if(Array.isArray(data)){
        for (var i = 0; i<data.length; i++){
          await sortArgs(data[i]);
        }
      } else if(typeof data === 'object'){
        await sortArgs(data);
      }
    }
    
    var cols_str = cols.map((obj)=>{
      return obj+"=t2."+obj;
    });

    var w_str = w_cols.map((obj)=>{
      return "t."+obj+"=t2."+obj;
    });

    var sets_str = [],
        t_arr = [];
    for(i=0; i<sets.length; i++){
      t_arr.push(sets[i]);
      if((i+1)%a_cols.length === 0){
        sets_str.push("("+t_arr.join(",")+")");
        t_arr = [];
      }
    }

    let query = "UPDATE "+this.table+" AS t SET "+cols_str.join(",")+" FROM (VALUES "+sets_str.join(",")+") AS t2("+a_cols.join(",")+") WHERE "+w_str.join(" AND ")+" RETURNING "+ret;
    
    //console.log(query, vals);
    let obj = null;
    try {
      var rows = await db.query(query, vals);
      obj = {status:true, msg:"update successful", data:rows};
    } catch (err){
      obj = {error:err.message, status:false, msg:"failed to update"};
    }
    this.query = null;
    return obj;
  }
  
  async delete(data){
    let w_strs = [],
        ind = 1,
        vals = [];
    
    //for fail-safe purpose, updates and deletes must have query_where options
    //if you want to update everything just do id=*
    for(var i in data){
      if(Array.isArray(data[i])){
        var t_args = [];
        for(var j = 0; j<data[i].length; j++){
          t_args.push("$"+ind);
          vals.push(data[i][j]);
          ind++;
        }
        w_strs.push(i+" IN ("+t_args.join(",")+")");
      } else {
        w_strs.push(i+"=$"+(ind));
        vals.push(data[i]);
        ind++;
      }
    }
    

    let query = (this.query) ? this.query : "DELETE FROM "+this.table+" WHERE "+w_strs.join(" AND ");
    //console.log(query);
    
    let obj = null;
    try {
      var rows = await db.query(query, vals);
      obj = {status:true, msg:"delete successful", data:rows};
    } catch (err){
      obj = {error:err.message, status:false, msg:"failed to delete"};
    }
    this.query = null;
    return obj;
  }
}


module.exports = DB
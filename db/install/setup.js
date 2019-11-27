const approot = require('app-root-path');
const models = require(approot+"/install/model");
const fs = require("fs");
const {promisify} = require("util");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

var useropts = {
  opt:1,
  setupmodel:false,
  setuphandler:false
}

async function setup(){
  try {

    if(useropts.setupmodel || useropts.setuphandler){
      let file = null,
          strs = null,
          himports = null,
          hs = null;

      //start array to store items
      if(useropts.opt === 2 && useropts.setuphandler){
        strs = [];
        himports = [];
        hs = [];
      }

      for(var i=0; i<models.length; i++){
        if(useropts.opt === 1 && useropts.setupmodel){
          //read sample and translate
          var buf = await readFile(approot+"/install/samplemodel.txt");
          var data = buf.toString();
          data = data.replace(/\_\_table\_\_/g, models[i].model);
          data = data.replace(/\_\_cols\_\_/g, (models[i].cols)?JSON.stringify(models[i].cols):"");
          data = data.replace(/\_\_encrypt\_\_/g, (models[i].encrypt)?"encrypt:"+JSON.stringify(models[i].encrypt)+",":"");
          data = data.replace(/\_\_hash\_\_/g, (models[i].hash)?"hash:"+JSON.stringify(models[i].hash)+",":"");
          data = data.replace(/\_\_order\_\_/g, (models[i].order)?"order:"+JSON.stringify(models[i].order)+",":"");
          if(models[i].join && models[i].join.length>0 && Array.isArray(models[i].join)){
            var js = [];
            for(var j=0;j<models[i].join.length; j++){
              js.push(JSON.stringify(models[i].join[j]));
            }
            var j_str = "join:[\n\t\t\t\t"+js.join(",\n\t\t\t\t")+"\n\t\t\t],";
            data = data.replace(/\_\_join\_\_/g, j_str);
          } else {
            data = data.replace(/\_\_join\_\_/g, "");
          }
          await writeFile(approot+"/server/model/"+models[i].model+".js", data);
          console.log("\x1b[0m", "\x1b[32m", "\x1b[34m", models[i].model+".js", "\x1b[32m", "written in", "\x1b[34m", "server/model/.");
        }

        if(useropts.opt === 2 && useropts.setuphandler){
          strs = [];
          var buf = await readFile(approot+"/install/samplehandler.txt");
          var data = buf.toString();
          var handlers = [
            {name:"create", type:"create"},
            {name:"read", type:"read"},
            {name:"update", type:"update"},
            {name:"delete", type:"delete"},
          ]
          if(models[i].handlers && models[i].handlers.length >0){
            handlers = handlers.concat(models[i].handlers);
          }
          for(var j=0;j<handlers.length;j++){
            strs.push("\t"+models[i].model+"_"+handlers[j].name+":async (posts)=>{\n\t\t//write your logic here for your crud\n\t\t//you can do var result = await crud(...); and return it if needed\n\t\treturn await crud."+handlers[j].type+"({model:'"+models[i].model+"', data:posts, returns:['*'], config:null});\n\t}");
          }

          himports.push("const "+models[i].model+"_handler = require('./"+models[i].model+"_handler');");
          hs.push("\t\t..."+models[i].model+"_handler");
          data = data.replace(/\_\_handlers\_\_/g, strs.join(",\n"));
          await writeFile(approot+"/server/post/"+models[i].model+"_handler.js", data);
          console.log("\x1b[0m", "\x1b[32m", "\x1b[34m", models[i].model+"_handler.js", "\x1b[32m", "written in ", "\x1b[34m", "server/post/.");
        }
      }

      //use array to store handlers
      if(useropts.opt === 2 && useropts.setuphandler){
        buf = await readFile(approot+"/install/mainhandler.txt");
        data = buf.toString();
        //const handle_profile = require("./handle_profile");
        data = data.replace(/\_\_handlerimports\_\_/g, himports.join("\n"));
        data = data.replace(/\_\_handlers\_\_/g, hs.join(",\n"));
        await writeFile(approot+"/server/post/handler.js", data);
        console.log("\x1b[0m", "\x1b[32m", "\x1b[34m", "handler.js", "\x1b[32m", "rewritten with new handlers");
      }

    }

  } catch (err){
    console.log("\x1b[31m", err);
    return err;
  }
}

async function setupdb(){
  const db = require(approot+"/includes/appname/class/connect");

  var c_str = [];
  for(var i=0; i<models.length; i++){
    if(models[i].cols && models[i].colstype && models[i].cols.length === models[i].colstype.length){
      var s = models[i].cols.map((o,ind)=>{
        return o+" "+models[i].colstype[ind];
      });
      c_str.push("CREATE TABLE "+models[i].model+" ("+s.join(", ")+")");
    }
  }
  const q = "DROP SCHEMA IF EXISTS public CASCADE; CREATE SCHEMA public AUTHORIZATION postgres; "+c_str.join("; ");

  try {
      //console.log(q);
      await db.query(q, []);
      return true;
  } catch (e){
      console.log("\x1b[31m", e);
      console.log(e.message);
      return false;
  }
}

var st = process.stdin;
st.setEncoding('utf-8');

console.log("\x1b[0m", "\x1b[1m", "Do you want us to setup your model files? (y/n)");

// When user input data and click enter key.
st.on('data', async(data)=>{
  data = data.toLowerCase();
  if(data === "y\n" || data === "y\r\n"){

    switch(useropts.opt){
      case 1:
        useropts.setupmodel = true;
        await setup();
        useropts.opt = 2;
        st = process.stdin;
        st.setEncoding('utf-8');
        console.log("\x1b[0m", "\x1b[1m", "Do you want us to setup your handler files? (y/n)");
        break;
      case 2:
        useropts.setuphandler = true;
        await setup();
        useropts.opt = 3;
        st = process.stdin;
        st.setEncoding('utf-8');
        console.log("\x1b[0m", "\x1b[1m", "Do you want us to setup your local postgres DB?\n  Make sure your credentials are set in config.js.\n  Make sure your model.json has a colstype. (y/n)");
        break;
      case 3:
        var b = await setupdb();
        if(b){console.log("\x1b[0m", "\x1b[32m", "Your database is built.")} else {console.log("\x1b[0m", "\x1b[31m","Something went wrong, you need to check your credentials or model.json.")}
        console.log("\x1b[0m", "Finished setting up");
        process.exit();
        break;
    }

  }
  if(data === "exit\n" || data === "exit\r\n"){
    process.exit();
  }
  if(data === "n\n" || data === "n\r\n"){
    switch(useropts.opt){
      case 1:
        useropts.setupmodel = false;
        useropts.opt = 2;
        st = process.stdin;
        st.setEncoding('utf-8');
        console.log("\x1b[0m", "\x1b[1m", "Do you want us to setup your handler files? (y/n)");
        break;
      case 2:
        useropts.setuphandler = false;
        useropts.opt = 3;
        st = process.stdin;
        st.setEncoding('utf-8');
        console.log("\x1b[0m", "\x1b[1m", "Do you want us to setup your local postgres DB?\n  Make sure your credentials are set in config.js.\n  Make sure your model.json has a colstype. (y/n)");
        break;
      case 3:
        console.log("\x1b[0m", "Finished setting up");
        process.exit();
        break;
    }
  }
});

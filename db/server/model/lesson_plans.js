const approot = require('app-root-path');
const config = require(approot+"/config");
const types = config.types;
const DB = require(types.DB_PATH);

module.exports = class lesson_plansDB extends DB {
  constructor(data){
    super("lesson_plans", ["id","uid","img","subject","grade","topic","description","instruction","is_public","is_draft","created_time","learning_objs","remarks"]);
    this.data = data;
    this.returns = ["*"];
    this.config = {};
  }

  set set_data(d){
    this.data = d;
  }

  set set_returns(d){
    if(d){
      this.returns = d;
    }
  }

  set set_config(d){
    if(d){
      this.config = d;
    }
  }

  async insert(){
    super.set_config = {


      ...this.config
    };

    var result = await super.insert(this.data, this.returns);
    return result;
  }

  async read(){
    super.set_config = {
      order:["id"],

      ...this.config
    };

    var result = await super.read(this.data, this.returns)
    return result;
  }

  async update(){
    super.set_config = {


      query_where:["id"],
      ...this.config
    };

    var result = await super.update(this.data, this.returns);
    return result;
  }

  async delete(){
    super.set_config = {
      ...this.config
    };

    var result = await super.delete(this.data);
    return result;
  }

  async custom(){
    /*
      your own custom query
    */

    const q = 'SELECT lesson_plans.*, ' +
        'COUNT(views.id) as c_views, ' +
        'COUNT(appreciates.id) as c_apps, ' +
        'COUNT (downloads.id) as c_downs, ' +
        'COUNT (cmts.id) as c_cmts ' +
        'FROM public.lesson_plans ' +
        'LEFT JOIN views ON lesson_plans.id = views.pid::int ' +
        'LEFT JOIN appreciates ON lesson_plans.id = appreciates.pid::int ' +
        'LEFT JOIN downloads ON lesson_plans.id = downloads.pid::int ' +
        'LEFT JOIN cmts ON lesson_plans.id = cmts.pid::int ' +
        'WHERE lesson_plans.subject LIKE $1 AND lesson_plans.grade LIKE $2 ' +
        'GROUP BY lesson_plans.id ' +
        'ORDER BY lesson_plans.id DESC ' +
        'LIMIT 3 OFFSET $3';

    console.log(q, this.data);

    let result = await super.runquery(q,[this.data.subject, this.data.grade, this.data.count], this.returns);
    console.log(result);
    return result;
  }
}

module.exports = async (obj)=>{
  var obj = (typeof obj === "object") ? obj : JSON.parse(obj),
      data = obj.data,
      model = obj.model;
  
  var result = null;
  try {
    var DB = require("../model/"+model);
    var c = new DB(data);
    c.set_config = obj.config || null;
    var result = await c.delete();
  } catch (err){
    result = {err:err.message, status:false, msg:"Unable to reach DB"};
  }
  
  return result;
}
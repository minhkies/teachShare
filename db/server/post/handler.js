const lesson_plans_handler = require('./lesson_plans_handler');
const appreciates_handler = require('./appreciates_handler');
const cmts_handler = require('./cmts_handler');
const competencies_handler = require('./competencies_handler');
const downloads_handler = require('./downloads_handler');
const files_handler = require('./files_handler');
const links_handler = require('./links_handler');
const views_handler = require('./views_handler');

module.exports.post = async (event, context, callback)=>{
  var obj = (typeof event.body === "object") ? event.body : JSON.parse(event.body),
      response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
        },
        body: null
      };

  var key = obj.key,
      posts = obj.data,
      result = null;

  //combine all handlers
  var handlers = {
		...lesson_plans_handler,
		...appreciates_handler,
		...cmts_handler,
		...competencies_handler,
		...downloads_handler,
		...files_handler,
		...links_handler,
		...views_handler
  }

  if(handlers[key]){
    result = await handlers[key](posts);
  }

  if(result === null){
    result = {status:false, msg:"no handler"};
  }

  response.body = JSON.stringify(result);
  if(typeof callback === "function"){
    callback(null, response);
  }
  return response;
};

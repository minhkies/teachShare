var AWS = require('aws-sdk');

module.exports = async (fname, event) => {
  var lambda = new AWS.Lambda({
    accessKeyId:"",
    secretAccessKey:"",
    region: '' //change to your region
  });
  //console.log(fname, event, lambda);
  
  var payload = event;
  //console.log("payload1", event)
  if(typeof event === "object"){
    payload = JSON.stringify(event, null, 2)
  }
  //console.log("payload2", payload);
  var data = await lambda.invoke({
    FunctionName: fname,
    InvocationType: 'RequestResponse',
    Payload: payload // pass params
  }).promise();
  //console.log("data", data)
  return data["Payload"];
}
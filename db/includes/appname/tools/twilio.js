const types = require("../types");
const dev = types.dev; 
var mdefault = {
  servid:"",
  phone:""
};
var accountSid = ''; // Your Account SID from www.twilio.com/console
var authToken = '';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
//console.log(client);
module.exports = {
  cli:client,
  send:async (msg, mto, mfrom, callback)=>{
    try {
      var message = await client.messages.create({
        body: msg,
        from: (mfrom) ? mfrom : mdefault.phone,
        to: mto,  // Text this number
        messagingServiceSid:mdefault.servid
      });
      if(typeof callback === "function"){
        callback(message);
      }
      return message;
    } catch (err){
      return err;
    }
  },
  response:(msg)=>{
    const twiml = new twilio.twiml.MessagingResponse();
    twiml.message(msg);
    return twiml.toString()
  }
};
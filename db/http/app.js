const approot = require('app-root-path');
const express = require("express");
const app = express();
const post = require(approot+'/server/post/handler').post;
const bodyParser = require('body-parser');

app.use('/', function(req, res, next) {
  var allowedOrigins = ['http://localhost:3000'];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.post("/post", async (req, resp)=>{
  var data = await post(req, null);
  resp.json(data);
});

/*app.listen(port, function(error){
    if(error){
        return false;
    }
    
    console.log("PORT IS RUNNING");
})*/

module.exports = app;
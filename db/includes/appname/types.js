const DEV = true;
var path = (DEV) ? __dirname : "/opt/appname";

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var randomjs = require('random-js');
var querystring = require('query-string');
const saltRounds = 5;

const encryptVal=async(val)=>{
  try {
    return await bcrypt.hash(val, saltRounds);
  } catch(err){
    return false;
  }
}

const encryptCompare=async(val, comp)=>{
  try{
    return await bcrypt.compare(val, comp);
  } catch (err){
    return false;
  }
}

module.exports = {
  dev:DEV,
  bcrypt:bcrypt,
  encrypt:encryptVal,
  encryptCompare:encryptCompare,
  jwt:jwt,
  randomjs:randomjs,
  querystring:querystring,
  SECRET:"sample_secret",
  DB_PATH:path+"/class/db",
  HASH_PATH:path+"/tools/hash",
  GENERIC_PATH:path+"/class/generic",
  JWT_PATH:path+"/tools/jwt",
  S3_PATH:path+"/tools/s3",
  TWILIO_PATH:path+"/tools/twilio",
  LAMBDA_PATH:path+"/tools/lambda"
}
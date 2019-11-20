const approot = require('app-root-path');
const config = require(approot+"/config");
const {Client} = require("pg");
const dbconfig = config.db;
let exp = {};

if (config.db.type === "dev"){
  //using pg pools for dev
  const pool = new pg.Pool(dbconfig);

  exp = {
    query:async function(q, d){
      try {
        var client = await pool.connect();
        var results = await client.query(q,d);
      } catch (err){
        return err;
      }
      client.release();
      return results.rows;
    }
  }
} else {
  //using rds for prod
  exp = {
    query:async (q, d) => {
      var client = new Client(dbconfig);
      await client.connect();
      try {
        var results = await client.query(q,d);
      } catch (err){
        throw err;
      }
      client.end();
      return results.rows;
    }
  }
}

module.exports = exp;
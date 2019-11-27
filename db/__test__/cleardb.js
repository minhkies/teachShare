
const approot = require('app-root-path');
const db = require(approot+"/includes/appname/class/connect");
const q = "DROP SCHEMA IF EXISTS public CASCADE; CREATE SCHEMA public AUTHORIZATION postgres; \
CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR(100), password VARCHAR(500), hash VARCHAR(20)); \
CREATE TABLE profile (id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, gender VARCHAR(10)); \
CREATE TABLE profile_image (id SERIAL PRIMARY KEY, profile_id INTEGER REFERENCES profile(id) ON DELETE CASCADE, img VARCHAR(100));";

try {
    //console.log(q);
    db.query(q, []);
} catch (e){
    console.log(e);
}
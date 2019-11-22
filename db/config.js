const approot = require('app-root-path');
const types = require(approot + "/includes/appname/types");
const config = {
    /*production
    db:{
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      host: process.env.RDS_HOSTNAME,
      port: process.env.RDS_PORT,
      database: process.env.RDS_DB,
      type:"prod"
    }
    */
//     db: {
//         user: "nzvvtubsqlbffw",
//         password: "126db880f7f076976c350ebeb88b15f74ff6b9a16f9bb641d8190ec2eaad727a",
//         host: "ec2-107-22-239-155.compute-1.amazonaws.com",
//         port: "5432",
//         database: "dast8loklsufbt",
//     },
//     types: types
// }
    db: {
        user: "teachShare@htin",
        password: "Htink12ss",
        host: "htin.postgres.database.azure.com",
        port: "5432",
        database: "postgres",
    },
    types: types
}
//     db: {
//         user: "jhearaqdezoiev",
//         password: "09c0c1519c209ef6f2ca9c467072198a4c89c8da719134d81b19dc5c444fe815",
//         host: "ec2-107-22-239-155.compute-1.amazonaws.com",
//         port: "5432",
//         database: "dast8loklsufbt",
//     },
//     types: types
// }


module.exports = config;

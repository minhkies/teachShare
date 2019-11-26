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
    db: {
        user: "nzvvtubsqlbffw",
        password: "126db880f7f076976c350ebeb88b15f74ff6b9a16f9bb641d8190ec2eaad727a",
        host: "ec2-107-22-239-155.compute-1.amazonaws.com",
        port: "5432",
        database: "dast8loklsufbt",
    },
    types: types
};
//     db: {
//         user: "teachShare@htin",
//         password: "Htink12ss",
//         host: "htin.postgres.database.azure.com",
//         port: "5432",
//         database: "postgres",
//     },
//     types: types
// }
//     db: {
//         user: "postgres",
//         password: "1189^hniM",
//         host: "localhost",
//         port: "5433",
//         database: "teachShare",
//     },
//     types: types
// };


module.exports = config;

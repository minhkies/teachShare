const app = require('./app');
const port = process.env.PORT || 3001;

app.listen(port, function(error){
    if(error){
        return false;
    }
    
    console.log("PORT IS RUNNING");
});
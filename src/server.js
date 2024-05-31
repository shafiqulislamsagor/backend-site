const mongoose = require('mongoose');
const config = require('./config');
const app = require('./app');


async function main() {
 try{
    await mongoose.connect(config.database_url);
    console.log('Connected to database')
    app.listen(config.port,()=>{
        console.log('server listening on port',config.port);
    })
 }catch(err){
    console.log(err)
 }

}

main()
const mysqli=require("mysql2")
const config =require("../config")
let connection =mysqli.createConnection(config.db);
connection.connect(function(err){
  if (err) {
    console.log(err);
    
  } else {
    // connection.query( "select * from data",function(err,result){})
    console.log("mysql baglantısı yapıldı.");
  }
})
module.exports=connection.promise()
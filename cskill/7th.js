
var mysql=require('mysql');

var conn=mysql.createConnection({ host:"bap8zske5mkxdr22laz9-mysql.services.clever-cloud.com",
 user:"uzawbmqq4vukp3cv", 
 password:"VhJqXsrzNUJ8qz2rf6Lx", 
 database:"bap8zske5mkxdr22laz9"
});

conn.connect(function(err){ if(err)
throw err;
console.log("Database is Connected!");
var sql= "CREATE TABLE employee (name VARCHAR(255), address VARCHAR(255))";
//Query
conn.query(sql,function(err,result){ if(err)
throw err;
console.log("Employee Table is Created");
});
});

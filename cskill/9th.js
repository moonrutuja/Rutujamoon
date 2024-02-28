var mysql=require('mysql');

var conn=mysql.createConnection({ 
 host:"localhost",
 user:"root", 
 password:"root", 
 database:"mydemo"
});

conn.connect(function(err){ if(err)
throw err;
console.log("Database is Connected!");
var sql="INSERT INTO employee(name,address) VALUES ?";
var VALUES=[['YASH','AMRAVATI'],['ABHI','aMRAVATI']];
//var sql= "CREATE TABLE employee (name VARCHAR(255), address VARCHAR(255))";
//Query
conn.query(sql,[VALUES],function(err,result){ if(err)
throw err;
//console.log("Employee Table is Created");
console.log("number of records are inserted");
});
});
//PRAJWAL SINKAR
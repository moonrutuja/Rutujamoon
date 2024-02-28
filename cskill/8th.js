var mysql=require('mysql');

var conn=mysql.createConnection({ host:"localhost", user:"root", password:"root"
});

conn.connect(function(err){ if(err)
throw err;
console.log("connection with the mysql is successfull..");
});
//PRAJWAL SINKAR

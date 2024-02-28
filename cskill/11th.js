var mysql=require('mysql');

var conn=mysql.createConnection({ host:"localhost", user:"root", password:"root", database:"mysql"
});

conn.connect(function(err)
    { if(err)
        throw err;
    conn.query("select * from employee",function(err,result,fields){
        if(err)
        throw err;
    console.log(result);
    });
});
//prajwal sinkar
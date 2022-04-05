

// const mysql = require('mysql');

//  var con = mysql.createConnection({
//    host: "localhost",
//    user: "root",
//    password: "Savita@123"
//  });
//  con.connect(function(err) {
//       if (err) throw err;
//       console.log("Connected!");
//       con.query("CREATE DATABASE new_login_singup ", function (err, result) {
//         if (err) throw err;
//         console.log("Database created");
//       });
//     });
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'Savita@123',
    database : 'new_login_singup'
  }
});
  // knex.schema.createTable('login_signup', function (table) {
          
  // table.string('name');
  // table.string('password');
  // table.string('email');
  // })
  //   .then(()=>console.log("table created"))
  //   .catch((err) => { console.log("alredy created") })
  //   knex.schema.createTable('login_signup', function (table) {
          
  // table.string('name');
  // table.string('password');
  // table.string('email');
  // })
  
  //   .then(()=>console.log("table created"))
  //   .catch((err) => { console.log("alredy created") })
    
    
const a=require("readline-sync")
      // const readline=require("readline-sync");
var user=a.question("DO YOU WANT TO LOGIN OR SIGN UP:")
  if(user=="sign"){
    username=a.question("ENTER THE USER:")
    Password=a.question("ENTER THE PASSWORD:")
    Email=a.question("ENTER THE EMAIL:")
    passd=(/^[a-zA-z0-9@#$^&*]{6,16}&/)
    const voval=[{
          name:username,
          password:Password,
          email:Email

        }]
        knex("login_signup").insert(voval)
        .then(()=>{
          console.log("data inserted")
        })
      .catch((err)=>{
        console.log("data did't inserted")
      })
    }
    else{
      if(user=="login"){
        var username=a.question("ENTER YOURE USER NAME")
        var password=a.question("ENTER YOURE PASSWORD")
      
    
        knex.from("login_signup").select("*").where({name:username,password:password})
        .then((result) => {
          if(result.username!=result.username||result.password!=result.password){
            console.log({message:'not login'});
          }else{
            console.log({meassage:'Login Sucssefully!',
            result});
          }
          // console.log({meassage:'Login Sucssefully!',
          // result});
          //  console.log(result)
            
            //   if(result.username===username || result.password===password){
            //     console.log({meassage:'Login Sucssefully!',
            //     result});
            // }else{
            //   console.log('User Details Inavlid');
            // }
        
          //   if(found){
          //     console.log("login successfully")
          //     console.log(found)
          //   }else{
          //     console.log("user not found")
          //   }
    
      // console.log(result)

          }).catch((err)=>{
        
          console.log(err)

        })

      
    }
  }
      



      

    


        





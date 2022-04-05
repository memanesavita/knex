

//  const mysql = require('mysql');

//  var con = mysql.createConnection({
//    host: "localhost",
//    user: "root",
//    password: "Savita@123"
//  });
//  con.connect(function(err) {
//       if (err) throw err;
//       console.log("Connected!");
//       con.query("CREATE DATABASE chinshan", function (err, result) {
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
      database : 'chinshan'
    }
  });
  
  // knex.schema.createTable('cars', function (table) {
    
  //   table.string('name');
  //   table.string('password');
  // })
  // .then(()=>console.log("table created"))
  // .catch((err) => { console.log("alredy created") })


//   const cars = [
//     { name: 'Audi', password: 52642 },
//     { name: 'Mercedes', password: 57127 },
//     { name: 'Skoda', password: 9000 },
//     { name: 'Volvo', password: 29000 },
//     { name: 'Bentley', password: 350000 },
//     { name: 'Citroen', password: 21000 },
//     { name: 'Hummer', password: 41400 },
//     { name: 'Volkswagen', password: 21600 },
// ]

// knex('cars').insert(cars).then(() => console.log("data inserted"))
//     .catch((err) => { console.log("already instred") })
  
// knex.from('cars').select("*")
//     .then((rows) => {
//         for (row of rows) {
//             console.log(`${row['name']} ${row['password']}`);
//         }
//     }).catch((err) => { console.log("alredy selected") })
    

// knex.from('cars').select('name', 'password').orderBy('name', 'password')
//     .then((rows) => {
//         for (row of rows) {
//             console.log(`${row['name']} ${row['password']}`);
//         }
//     }).catch((err) => { console.log("alredy order") })
  




// knex('cars')
//   .where({ name: "Audi" })
//   .update({ password: 456789 }, ['name', 'password'])
//   .then((row)=>{
//     console.log("updated")
//   })
//   .catch((err)=>{
//     console.log("already update")
//   })




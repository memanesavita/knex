
const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Savita@123',
        database: 'chinshan'
    }
}


knex.schema.createTable('cars', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('price')
}).then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });

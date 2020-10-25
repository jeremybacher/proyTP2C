const connection = require('./connectionMongo');

async function getByUsername(username){
    const connectionMongo = await connection.getConnection();
    const user = await connectionMongo.db('Desafio2')
                        .collection('users')
                        .findOne({username: username});
    return user;
}

async function post(user){
    const connectionMongo = await connection.getConnection();
    const result = await connectionMongo.db('Desafio2')
                        .collection('users')
                        .insertOne(user);
    return result;
}

module.exports = { post, getByUsername }
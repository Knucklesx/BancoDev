const connection = require('./connection');

const getAll = async () => {
    const [rows] = await connection.execute('SELECT * FROM GustavoBank.candidatos');
    return rows;
}

module.exports = {
  getAll,
}
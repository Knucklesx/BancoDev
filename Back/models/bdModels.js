const connection = require('./connection');

const getAll = async () => {
    const [rows] = await connection.execute('SELECT * FROM GustavoBank.candidatos');
    return rows;
}

const addCand = async (name, nivel) => {
  const query = 'INSERT INTO Candidatos (name, nivel) VALUES (?, ?)';
  const [newCand] = await connection.execute(query, [name, nivel]);
  return newCand.id;
}

const filtrarNivel = async (nivel) => {
  const [myNivel] = await connection.execute('SELECT name FROM GustavoBank.candidatos WHERE nivel = ?', [nivel]);

  return myNivel;
 
}

module.exports = {
  getAll,
  addCand,
  filtrarNivel,
}
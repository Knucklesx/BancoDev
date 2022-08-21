const BdModel = require('../models/bdModels');

const getAll = async () => {
    const rows = await BdModel.getAll();
    return rows;
}

const addCand = async (name, nivel) => {
  const newCand = await BdModel.addCand(name, nivel);
  return newCand;
}

const filtrarNivel = async (nivel) => {
  // if (nivel === junior) {
    const rows = await BdModel.filtrarNivel(nivel);
    return rows;
  // }
  // return false;
}

module.exports = {
  getAll,
  addCand,
  filtrarNivel,
}
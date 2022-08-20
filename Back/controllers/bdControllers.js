const BdService = require('../services/bdServices');

const getAll = async (_req, res) => {
  try {
    const candidatos = await BdService.getAll();
    return res.status(200).json(candidatos);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  getAll,
}
const BdModel = require('../models/bdModels');

const getAll = async () => {
    const rows = await BdModel.getAll();
    return rows;
}

module.exports = {
  getAll,
}
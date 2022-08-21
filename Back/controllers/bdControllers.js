const BdService = require('../services/bdServices');

const getAll = async (_req, res) => {
  try {
    const candidatos = await BdService.getAll();
    return res.status(200).json(candidatos);
  } catch (error) {
    return res.status(500).json(error);
  }
}

const addCand = async (req, res) => {
  const { name, nivel } = req.body;
  try {
    const newCand = await BdService.addCand(name, nivel);
    return res.status(200).json({ message: `Candidato ${name} criado com sucesso!` });
  } catch (error) {
    return res.status(500).json(error);
  }
}

const filtrarNivel = async (req, res) => {
  const { nivel } = req.params;
  try {
    // const allCand = await BdService.getAll();
    // const filterNivel = await allCand.filter((item) => {
    //   item.includes(nivel)
    // })
    // if (!filterNivel) {
    //   return res.status(404).json({ message: 'Nenhuma pessoa com o nível pretendido' });
    // }
    // console.log(nivel);
    console.log(nivel);

    const filterNivel = await BdService.filtrarNivel(nivel)

    // return res.status(200).json(allCand);
    return res.status(200).json(filterNivel);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

module.exports = {
  getAll,
  addCand,
  filtrarNivel,
}
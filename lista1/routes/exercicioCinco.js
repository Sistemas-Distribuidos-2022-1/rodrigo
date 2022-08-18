const router = require("express").Router();

// exercicio 1
const nadador = {
  idade: 0,
};

router.post("/", (req, res, next) => {
  let nadador = req.body;
  let response = { message: "" };
  if (nadador.idade >= 5 && nadador.idade <= 7) {
    response.message = `infantil A`;
  } else if (nadador.idade >= 8 && nadador.idade <= 10) {
    response.message = `infantil B`;
  } else if (nadador.idade >= 11 && nadador.idade <= 13) {
    response.message = `juvenil A`;
  } else if (nadador.idade >= 14 && nadador.idade <= 17) {
    response.message = `juvenil B`;
  } else if (nadador.idade >= 18) {
    response.message = `adulto`;
  } else {
    response.message = "Enviar campo 'idade'";
  }
  return res.status(200).json(response);
});

module.exports = router;

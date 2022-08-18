const router = require("express").Router();

// exercicio 1
const pessoa = {
  altura: 0,
  sexo: "",
};

router.post("/", (req, res, next) => {
  let pessoa = req.body;
  let response = { message: "" };
  if (pessoa.sexo === "M") {
    response.message = `Peso ideal: ${pessoa.altura * 72.7 - 58}`;
  } else if (pessoa.sexo === "F") {
    response.message = `Peso ideal: ${pessoa.altura * 62.1 - 44.7}`;
  } else {
    response.message = "Enviar campos 'altura' e 'sexo'";
  }
  return res.status(200).json(response);
});

module.exports = router;

const router = require("express").Router();

// exercicio 1
const funcionario = {
  idade: 0,
  tempoServiço: 0,
};

router.post("/", (req, res, next) => {
  let funcionario = req.body;
  let response = { message: "" };
  if (
    funcionario.tempoServiço >= 30 &&
    funcionario.idade >= 65 &&
    funcionario.tempoServiço >= 25 &&
    funcionario.idade >= 60
  ) {
    response.message = `Pode aposentar`;
  } else if (
    funcionario.tempoServiço < 30 ||
    funcionario.idade < 65 ||
    (funcionario.tempoServiço < 25 && funcionario.idade < 60)
  ) {
    response.message = `Não pode aposentar`;
  } else {
    response.message = "Enviar campos 'idade' e 'tempoServiço'";
  }
  return res.status(200).json(response);
});

module.exports = router;

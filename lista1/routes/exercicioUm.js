const router = require("express").Router();

// exercicio 1
const funcionario = {
  nome: "",
  cargo: "",
  salario: 0,
};

router.post("/", (req, res, next) => {
  let funcionario = req.body;
  let response = { message: "" };
  if (funcionario.cargo === "operador") {
    response.message = `${funcionario.nome}, salario: R$ ${
      1.2 * funcionario.salario
    }`;
  } else if (funcionario.cargo === "programador") {
    response.message = `${funcionario.nome}, salario: R$ ${
      1.18 * funcionario.salario
    }`;
  } else {
    response.message = "O reajuste só para operadores e programadores";
  }
  return res.status(200).json(response);
});

module.exports = router;

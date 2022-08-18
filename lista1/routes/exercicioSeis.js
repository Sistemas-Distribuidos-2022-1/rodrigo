const router = require("express").Router();

// exercicio 1
const funcionario = {
  nome: "",
  nivel: "",
  salario: 0,
  dependentes: false,
};

router.post("/", (req, res, next) => {
  let funcionario = req.body;
  let response = { message: "" };
  if (funcionario.nivel === "A") {
    response.message = `Salario: ${
      funcionario.dependentes
        ? 0.92 * funcionario.salario
        : 0.97 * funcionario.salario
    }`;
  } else if (funcionario.nivel === "B") {
    response.message = `Salario: ${
      funcionario.dependentes
        ? 0.9 * funcionario.salario
        : 0.95 * funcionario.salario
    }`;
  } else if (funcionario.nivel === "C") {
    response.message = `Salario: ${
      funcionario.dependentes
        ? 0.85 * funcionario.salario
        : 0.92 * funcionario.salario
    }`;
  } else if (funcionario.nivel === "D") {
    response.message = `Salario: ${
      funcionario.dependentes
        ? 0.83 * funcionario.salario
        : 0.9 * funcionario.salario
    }`;
  } else {
    response.message =
      "Informar campos 'nome', 'nivel', 'salario' e 'dependentes' (boolean)";
  }
  return res.status(200).json(response);
});

module.exports = router;

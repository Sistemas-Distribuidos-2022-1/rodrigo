const router = require("express").Router();

// exercicio 1
const pessoa = {
  nome: "",
  sexo: "",
  idade: 0,
};

router.post("/", (req, res, next) => {
  let pessoa = req.body;
  let response = { message: "" };
  if (pessoa.sexo === "M") {
    response.message = `${pessoa.nome} é ${
      pessoa.idade >= 18 ? "maior de idade" : "menor de idade"
    }`;
  } else if (pessoa.sexo === "F") {
    response.message = `${pessoa.nome} é ${
      pessoa.idade >= 21 ? "maior de idade" : "menor de idade"
    }`;
  } else {
    response.message = "Utilizar 'F' para sexo feminino e 'M' para masculino";
  }
  return res.status(200).json(response);
});

module.exports = router;

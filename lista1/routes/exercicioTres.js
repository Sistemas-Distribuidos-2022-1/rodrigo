const router = require("express").Router();

// exercicio 1
const aluno = {
  n1: 0,
  n2: 0,
  n3: 0,
};

router.post("/", (req, res, next) => {
  let aluno = req.body;
  let response = { message: "" };
  if ((aluno.n1 + aluno.n2 + aluno.n3) / 3 >= 5) {
    response.message = `Aprovado`;
  } else if ((aluno.n1 + aluno.n2 + aluno.n3) / 3 < 5) {
    response.message = `Reprovado`;
  } else {
    response.message = "Enviar as notas 'n1', 'n2' e 'n3'";
  }
  return res.status(200).json(response);
});

module.exports = router;

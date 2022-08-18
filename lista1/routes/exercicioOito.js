const router = require("express").Router();

// exercicio 1
const cliente = {
  saldoMedio: 0,
};

router.post("/", (req, res, next) => {
  let cliente = req.body;
  let response = { message: "" };
  if (cliente.saldoMedio <= 200) {
    response.message = `nenhum crédito`;
  } else if (cliente.saldoMedio <= 400) {
    response.message = `Crédito: ${0.2 * cliente.saldoMedio}`;
  } else if (cliente.saldoMedio <= 600) {
    response.message = `Crédito: ${0.3 * cliente.saldoMedio}`;
  } else if (cliente.saldoMedio >= 601) {
    response.message = `Crédito: ${0.4 * cliente.saldoMedio}`;
  } else {
    response.message = "O cliente deve possuir campo 'saldoMedio'";
  }
  return res.status(200).json(response);
});

module.exports = router;

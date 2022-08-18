const router = require("express").Router();

// exercicio 1
const carta = {
  valor: 0,
  naipe: "",
};

router.post("/", (req, res, next) => {
  function retornaNaipe(naipe) {
    switch (naipe) {
      case 1:
        return "ouros";
      case 2:
        return "paus";
      case 3:
        return "copas";
      case 4:
        return "espadas";
      default:
        return "naipe desconhecido";
    }
  }
  let carta = req.body;
  let response = { message: "" };
  response.message = `Carta: ${carta.valor} de ${retornaNaipe(carta.naipe)}`;
  return res.status(200).json(response);
});

module.exports = router;

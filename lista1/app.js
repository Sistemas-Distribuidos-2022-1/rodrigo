var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var exercicioUm = require("./routes/exercicioUm");
var exercicioDois = require("./routes/exercicioDois");
var exercicioTres = require("./routes/exercicioTres");
var exercicioQuatro = require("./routes/exercicioQuatro");
var exercicioCinco = require("./routes/exercicioCinco");
var exercicioSeis = require("./routes/exercicioSeis");
var exercicioSete = require("./routes/exercicioSete");
var exercicioOito = require("./routes/exercicioOito");
var exercicioNove = require("./routes/exercicioNove");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/exercicioUm", exercicioUm);
app.use("/exercicioDois", exercicioDois);
app.use("/exercicioTres", exercicioTres);
app.use("/exercicioQuatro", exercicioQuatro);
app.use("/exercicioCinco", exercicioCinco);
app.use("/exercicioSeis", exercicioSeis);
app.use("/exercicioSete", exercicioSete);
app.use("/exercicioOito", exercicioOito);
app.use("/exercicioNove", exercicioNove);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).json(err.message);
});

module.exports = app;

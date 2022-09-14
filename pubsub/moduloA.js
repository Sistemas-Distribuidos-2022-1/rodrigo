const pubSub = require("./pubsub");

module.exports = {
  publishEvent() {
    const data = {
      msg: "mensagem",
    };
    pubSub.publish("evento", data);
  },
};

const pubSub = require("./pubsub");
let subscription;

subscription = pubSub.subscribe("anEvent", (data) => {
  console.log(`"evento", publicado com: "${data.msg}"`);
  subscription.unsubscribe();
});

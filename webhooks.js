const { Webhooks } = require("@octokit/webhooks");
const webhooks = new Webhooks({
  secret: "web-hook",
});

webhooks.on("*", ({ id, name, payload }) => {
  console.log(name, "event received");
});

require("http").createServer(webhooks.middleware).listen(80);
// can now receive webhook events at port 80
const http = require("http");
const {app} = require("./api/app");
const config = require("./core/config");
const {syncModels} = require("./models");

const server = http.createServer(app);

server.listen(config.PORT, async () => {
  await syncModels();
  console.log(`Server is running on port:${config.PORT}`);
});

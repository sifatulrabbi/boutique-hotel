const http = require("http");
const {app} = require("./api/app");
const config = require("./core/config");
const {syncModels} = require("./models");
const {createMocks} = require("./createMockData");

const server = http.createServer(app);

server.listen(config.PORT, async () => {
  await syncModels();

  await createMocks();

  console.log(`Server is running on port:${config.PORT}`);
});

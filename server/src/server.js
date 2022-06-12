const http = require("http");
const {app} = require("./api/app");
const config = require("./core/config");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server is running on port:${config.PORT}`);
});

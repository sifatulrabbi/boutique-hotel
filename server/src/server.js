const http = require("http");
const {app} = require("./api/app");
const config = require("./core/config");
const {syncModels, Room} = require("./models");

const server = http.createServer(app);

server.listen(config.PORT, async () => {
  await syncModels();

  /**
   * Create default rooms. Total rooms count 4
   */
  for (let i = 0; i < 4; i++) {
    await Room.create({
      name: `Room ${i + 1}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      type: i % 2 === 0 ? "single" : "double",
      cost: 400 + Math.round(100 * Math.random() * i),
    });
  }

  console.log(`Server is running on port:${config.PORT}`);
});

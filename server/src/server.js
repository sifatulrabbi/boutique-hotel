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

  const roomImages = [
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&dl=ralph-ravi-kayden-FqqiAvJejto-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    "https://unsplash.com/photos/8_V45fGyWz4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8YmVkJTIwcm9vbXN8ZW58MHx8fHwxNjU1NzQwNzYx&force=true",
    "https://unsplash.com/photos/iAftdIcgpFc/download?force=true",
    "https://unsplash.com/photos/Cx188P-L_HY/download?force=true",
  ];

  for (let i = 0; i < 4; i++) {
    await Room.create({
      name: `Room ${i + 1}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      type: i % 2 === 0 ? "single" : "double",
      cost: 400 + Math.round(100 * Math.random() * i),
      img: roomImages[i],
    });
  }

  console.log(`Server is running on port:${config.PORT}`);
});

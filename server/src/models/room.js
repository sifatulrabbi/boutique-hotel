const {DataTypes} = require("sequelize");
const {db} = require("../core");
const Request = require("./request");
const Reservation = require("./reservation");

/**
 * Rooms model
 *
 * @Id The unique room ID
 * @Name Room name
 * @Description Room's description
 * @Type type of the room 'single' / 'double'
 * @Cost Room cost/night
 * @Bookings An array containing all the bookings (Foreign value)
 */
const Room = db.define("room", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  cost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

/** Relations */

Room.hasMany(Request, {
  foreignKey: {
    name: "roomId",
    allowNull: false,
  },
});

Room.hasMany(Reservation, {
  foreignKey: {
    name: "roomId",
    allowNull: false,
  },
});

module.exports = Room;

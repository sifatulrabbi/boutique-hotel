const {DataTypes, INTEGER} = require("sequelize/types");
const {db} = require("../core");

/**
 * Rooms model
 *
 * @Id The unique room ID
 * @Name Room name
 * @Description Room's description
 * @Type type of the room 'single' / 'double'
 * @Cost Room cost/night
 */
const Room = db.define("room", {
  id: {
    type: DataTypes.INTEGER,
    autoComplete: true,
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
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  cost: {
    type: INTEGER,
    allowNull: false,
  },
});

module.exports.Room = Room;

const {db} = require("../core");
const {DataTypes} = require("sequelize");

/**
 * Request model
 *
 * @Id Id of the Request model
 * @RoomId Id of the requested room
 * @ClientEmail Email of the client
 * @ClientName Name of the client
 * @Accepted If the request is accepted or not
 * @Canceled If the request is canceled or not
 * @Cost The cost of the room
 * @Total The total cost of the reservation
 * @RoomId The of the associated room
 */
const Request = db.define("request", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  roomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  clientEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  checkIn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  checkOut: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  accepted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: true,
  },
  canceled: {
    type: DataTypes.BOOLEAN,
    default: false,
    allowNull: true,
  },
  cost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Request;

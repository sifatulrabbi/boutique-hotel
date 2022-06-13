const {db} = require("../core");
const {DataTypes} = require("sequelize/types");

/**
 * Request model
 *
 * @Id Id of the Request model
 * @RoomId Id of the requested room
 * @ClientEmail Email of the client
 * @ClientName Name of the client
 * @Accepted If the request is accepted or not
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
    allowNull: true,
  },
});

module.exports = Request;

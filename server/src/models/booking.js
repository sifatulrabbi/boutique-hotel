const {DataTypes} = require("sequelize/types");
const {db} = require("../core");

/**
 * Booking model
 *
 * @Id Booking Id
 * @StartDate Booking start date
 * @EndDate Booking end date
 * @RoomId Booked room id (Foreign key)
 */
const Booking = db.define({
  id: {
    type: DataTypes.INTEGER,
    autoComplete: true,
    primaryKey: true,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

/** Relations */

module.exports = Booking;

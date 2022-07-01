const nodemailer = require("nodemailer");
const {config} = require("../core");
const {
  REQUEST_ACCEPT_MAIL,
  REQUEST_ACCEPT_SUB,
  REQUEST_REJECT_MAIL,
  REQUEST_REJECT_SUB,
} = require("../../emails");

const transportConfig = {
  host: "smtp.gmail.com",
  /**
   * update SMTP port from 465 to 587
   * learn more https://www.mailgun.com/blog/which-smtp-port-understanding-ports-25-465-587/
   */
  port: 465,
  secure: true,
  auth: {
    user: config.SMTP_EMAIL,
    pass: config.SMTP_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transportConfig);

function parseEmail(
  email,
  {roomId, clientEmail, clientName, checkIn, checkOut},
) {
  let newEmail = email;

  if (roomId) newEmail = newEmail.replace(/ROOM_ID/g, roomId);
  if (clientEmail) newEmail = newEmail.replace(/CLIENT_EMAIL/g, clientEmail);
  if (clientName) newEmail = newEmail.replace(/CLIENT_NAME/g, clientName);
  if (checkIn) newEmail = newEmail.replace(/CHECK_IN/g, checkIn);
  if (checkOut) newEmail = newEmail.replace(/CHECK_OUT/g, checkOut);

  return newEmail;
}

/**
 * Send reservation request accepted mail to clients
 * @param {string} clientEmail
 * @param {string} clientName
 * @param {string} roomName
 */
module.exports.sendRequestAcceptedMail = async function (data) {
  try {
    const html = parseEmail(REQUEST_ACCEPT_MAIL, data);
    const subject = parseEmail(REQUEST_ACCEPT_SUB, data);
    const mail = {
      from: `Boutique House <${config.SMTP_EMAIL}>`,
      to: data.clientEmail,
      subject,
      html,
      text: html.replace(
        /(< *[a-zA-Z0-9\-]+ *>|< *[a-zA-Z0-9\-]+ *\/>|<\/ *[a-zA-Z0-9\-]+ *>)/gi,
        "",
      ),
      priority: "hight",
    };

    const info = await transporter.sendMail(mail);
    return info;
  } catch (err) {
    console.error(err);
  }
};

/**
 *
 * @param {string} clientEmail
 * @param {string} clientName
 * @param {string} roomName
 */
module.exports.sendRequestRejectedMail = async function (data) {
  try {
    const html = parseEmail(REQUEST_REJECT_MAIL, data);
    const subject = parseEmail(REQUEST_REJECT_SUB, data);
    const mail = {
      from: `Boutique House <${config.SMTP_EMAIL}>`,
      to: data.clientEmail,
      subject,
      html,
      text: html.replace(
        /(< *[a-zA-Z0-9\-]+ *>|< *[a-zA-Z0-9\-]+ *\/>|<\/ *[a-zA-Z0-9\-]+ *>)/gi,
        "",
      ),
      priority: "hight",
    };

    const info = await transporter.sendMail(mail);
    return info;
  } catch (err) {
    console.error(err);
  }
};

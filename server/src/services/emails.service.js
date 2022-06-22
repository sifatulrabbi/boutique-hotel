const nodemailer = require("nodemailer");
const {config} = require("../core");

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

/**
 * Send reservation request accepted mail to clients
 * @param {string} clientEmail
 * @param {string} clientName
 * @param {string} roomName
 */
module.exports.sendRequestAcceptedMail = async function (
  clientEmail,
  clientName,
  roomName,
) {
  const mail = {
    from: `Boutique House <${config.SMTP_EMAIL}>`,
    to: clientEmail,
    subject: "Your reservation request on Boutique House has been accepted",
    text: `Hi ${clientName}, Your request for room ${roomName} has been accepted.`,
    html: `<p>Hi ${clientName},</p><br/>
          <p>Your reservation request for room <strong>${roomName}</strong> has been accepted.</p><br/>
          <p>For more information please reply to this email</p>`,
    priority: "hight",
  };

  const info = await transporter.sendMail(mail);
  return info;
};

/**
 *
 * @param {string} clientEmail
 * @param {string} clientName
 * @param {string} roomName
 */
module.exports.sendRequestRejectedMail = async function (
  clientEmail,
  clientName,
  roomName,
) {
  const mail = {
    from: `Boutique House <${config.SMTP_EMAIL}>`,
    to: clientEmail,
    subject: "Your reservation request for Boutique House has been rejected",
    text: `Hi ${clientName}, Your request for a ${roomName} has been rejected due to some issues.`,
    html: `<p>Hi ${clientName},</p><br/>
          <p>Your reservation request for room <strong>${roomName}</strong> has been rejected.</p><br/>
          <p>For more information please reply to this email</p>`,
    priority: "hight",
  };

  const info = await transporter.sendMail(mail);
  return info;
};

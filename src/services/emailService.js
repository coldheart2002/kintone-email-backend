const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const { formatQuotationData } = require("../utils/formatter");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendQuotationEmail = async (record) => {
  const { toEmail, customerName, items, total } = formatQuotationData(record);

  const templatePath = path.join(__dirname, "../../templates/quotation.html");
  const templateSource = fs.readFileSync(templatePath, "utf8");
  const template = handlebars.compile(templateSource);
  const htmlBody = template({ customerName, items, total });

  const mailOptions = {
    from: `"Sales Team" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: `Quotation for ${customerName}`,
    html: htmlBody,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendQuotationEmail,
};

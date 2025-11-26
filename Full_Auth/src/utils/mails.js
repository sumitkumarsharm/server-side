import Mailgen from "mailgen";
import nodemailer from "nodemailer";

export const sendMail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Authentication",
      link: "https://mailgen.js/",
    },
  });

  const emailHtml = mailGenerator.generate(options.mailGenContent);
  const emailText = mailGenerator.generatePlaintext(options.mailGenContent);

  const transport = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAILTRAP_SENDEREMAIL,
    to: options.email,
    subject: options.subject,
    html: emailHtml,
    text: emailText,
  };
  await transport.sendMail(mailOptions);
};

export const emailVerificationMailGenContent = (username, verificationUrl) => ({
  body: {
    name: username,
    intro:
      "Welcome to Authentication! We're very excited to have you on board.",
    action: {
      instructions: "To get started with authentication, please click here:",
      button: {
        color: "#22BC66",
        text: "vefiy your account",
        link: verificationUrl,
      },
    },
    outro:
      "Need help, or have questions? Just reply to this email, we'd love to help.",
  },
});

export const forgotPasswordMailGenContent = (username, restUrl) => ({
  body: {
    name: username,
    intro:
      "Welcome to Authentication! We're very excited to have you on board.",
    action: {
      instructions:
        "Click the button below to reset your password, please click here:",
      button: {
        color: "#22BC66",
        text: "Please reset your password",
        link: restUrl,
      },
    },
    outro:
      "Need help, or have questions? Just reply to this email, we'd love to help.",
  },
});

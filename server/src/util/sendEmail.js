import nodemailer from "nodemailer";

const sendMail = async ({ to, subject, text, html }) => {
  const userEmail = process.env.EMAIL_USER;
  const userPass = process.env.EMAIL_PASS;

  if (!userEmail || !userPass) {
    console.error(" Email credentials missing in .env file");
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });

    const mailOptions = {
      from: `"Care Corner" <${userEmail}>`,
      to,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);

    return true;
  } catch (error) {
    console.error("Email sending failed:", error.message);
    return false;
  }
};

export default sendMail;

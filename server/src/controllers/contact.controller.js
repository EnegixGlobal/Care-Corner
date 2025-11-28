import sendMail from "../util/sendEmail.js";
import Contact from "../models/contact.model.js";

const sendContact = async (req, res) => {
  try {
    const { name, email, message, phone } = req.body;

    if (!name || !email || !message || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const savedMessage = await Contact.create({
      name,
      email,
      message,
      phone,
    });

    // Send Email Notification
    const emailStatus = await sendMail({
      to: email,
      subject: "We Received Your Message",
      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background:#ffffff;">
      <h3 style="color:#333;">Hello ${name},</h3>

      <p style="font-size: 15px; color:#555;">
        Thank you for contacting us! We have received your message and will get back to you soon.
      </p>

      <p style="font-size: 14px; background:#f5f5f5; padding:12px; border-radius:6px; border-left:4px solid #007bff; color:#444;">
        "${message}"
      </p>

      <p style="font-size:14px; color:#555;">
        Regards,<br/>
        <strong>Care Corner Team</strong>
      </p>

      <hr style="border:none; border-top:1px solid #eee; margin-top:25px;" />

      <p style="font-size:11px; color:#888; text-align:center;">
        This is an automated email. Please do not reply.
      </p>
    </div>
  `,
    });

    if (!emailStatus) {
      return res.status(500).json({
        success: false,
        message: "Message saved but email could not be sent",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Message sent successfully ✔ Email delivered",
      data: savedMessage,
    });
  } catch (error) {
    console.error("Error:", error);

    // Mongoose Validation Errors Handle
    if (error.name === "ValidationError") {
      const errMessage = Object.values(error.errors)
        .map((err) => err.message)
        .join(", ");
      return res.status(400).json({
        success: false,
        message: errMessage,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
};

export { sendContact };

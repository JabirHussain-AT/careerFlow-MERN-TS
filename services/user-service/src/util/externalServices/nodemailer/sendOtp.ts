import nodemailer from "nodemailer";
import { EMAIL, PASSWORD } from "../../../config/envConfig/config";

export const sendOtp = (email: string, otp: number): boolean => {
  //set the transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    secure: true,
  });

  // Define the email options
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "OTP FROM careerFlow ",
    html: `<p>OTP FROM careerFlow is this: </p><p style="color: tomato; font-size: 25px; letter-spacing: 2px;"><b>${otp}</b></p><p>This Code <b>expires in ${2} minute(s)</b>.</p>`,
  };
  
  // Send the email
  let result = false;
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      result = false;
      console.error("Error sending email:", error);
    } else {
      result = true;
      console.log("Email sent successfully :", info.response);
    }
  });
  return result;
};

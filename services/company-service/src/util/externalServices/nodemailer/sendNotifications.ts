import nodemailer from "nodemailer";
import { EMAIL, PASSWORD } from "../../../config/envChecker/config";

export const sendMessages = (email: string, content: string , Intro  : string): boolean => {
  //set the transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    secure: true,
  });

  let mailOptions = {
      from: EMAIL,
      to: email,
      subject: " Notification From CareerFlow ",
      html: `<p> ${Intro}: </p><p style="color: tomato ;font-italic ; font-size: 18px; letter-spacing: 2px;"><b>${content}</b></p><p>Thank you <b><br>Team CareerFlow </br>.</p>`,
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

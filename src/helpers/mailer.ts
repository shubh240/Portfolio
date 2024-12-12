import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';
import User from '@/models/User';


export const sendMail = async ({ email, emailType, userId }: any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: process.env.MAILTRAP_USERNAME!,
                pass: process.env.MAILTRAP_PASSWORD!,
            },
        });

        const mailOptions = {
            from: "shubh.hlink@gmail.com",
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "Reset your password"} or copy paste the link below in your browser. <br> <b> ${process.env.DOMAIN}/verifyemail?token=${hashedToken} </b> </p>`,
        }

        // send mail with defined transport object
        const mailResponse = await transporter.sendMail(mailOptions);

        return mailResponse;


    } catch (error: any) {
        console.log(error, "Error sending mail");
        throw new Error(error.message);
    }
}

import nodemailer from "nodemailer";
const transporter =nodemailer.createTransport(
    {
        service:"gmail",
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:"mariammoutaz99@gmail.com",
            pass:"byct mzly uocv upkh"
        }
    }
)
export async function sendMail(to,subject,html){
await transporter.sendMail({
  from: `"Saraha App" <mariammoutaz99@gmail.com>`,
  to: to,
  subject: subject,
  html: html
});
}

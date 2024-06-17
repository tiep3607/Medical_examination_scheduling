require('dotenv').config();
import { reject } from 'lodash';
import nodemailer from 'nodemailer'



let sendSimpleEmail = async (dataSend) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });
    let info = await transporter.sendMail({
        from: '"Tiep 👻" <davidminhtiep@gmail.com>', // sender address
        to: dataSend.receiverEmail, // list of receivers
        subject: "Thông tin đặt lịch khám bệnh", // Subject line
        html: getBodyHTMLEmail(dataSend), // html body
    });
}

let getBodyHTMLEmail = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result = `
        <h3>Xin chào ${dataSend.patientName}!</h3>
        <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online</p>
        <p>Thông tin đặt lịch khám bệnh:</p>
        <div><b>Thời gian: ${dataSend.time}</b></div>
        <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

        <p>Nếu các thông tin là đúng sự thật, vui lòng click vào đường link bên dưới để xác nhận và hoàn thành thủ tục đặt lịch khám bệnh.</p>
        <div>
        <a href= ${dataSend.redirectLink} target="_blank" >Click here</a>
        </div>

        <div>Xin chân thành cảm ơn</div>
        `
    }
    if (dataSend.language === 'en') {
        result =
            `
 <h3>Hello ${dataSend.patientName}!</h3>
 <p>You are receiving this email because you have scheduled an online medical examination</p>
 <p>Information for scheduling medical examination:</p>
 <div><b>Time: ${dataSend.time}</b></div>
 <div><b>Doctor: ${dataSend.doctorName}</b></div>

 <p>If the information is true, please click on the link below to confirm and complete the medical appointment procedure.</p>
 <div>
 <a href= ${dataSend.redirectLink} target="_blank" >Click here</a>
 </div>

 <div>Thank you very much</div>
 `
    }
    return result;
}

let getBodyHTMLEmailRemedy = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result =
            `
        <h3>Xin chào ${dataSend.patientName}!</h3>
        <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online.</p>
        <p>Thông tin đơn thuốc/hóa đơn được gửi trong file đính kèm.</p>

        <div>Xin chân thành cảm ơn!</div>
        `
    }
    if (dataSend.language === 'en') {
        result =
            `
 <h3>Hello ${dataSend.patientName}!</h3>
 <p>You are receiving this email because you have scheduled an online medical examination.</p>
 <p>Prescription/invoice information is sent in the attached file.</p>

 <div>Thank you very much!</div>
 `
    }
    return result;
}

let sendAttachment = async (dataSend) => {
    return new Promise(async (resolve, reject) => {
        try {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.EMAIL_APP,
                    pass: process.env.EMAIL_APP_PASSWORD,
                },
            });

            let info = await transporter.sendMail({
                from: '"Tiep 👻" <davidminhtiep@gmail.com>', // sender address
                to: dataSend.email, // list of receivers
                subject: "Kết quả đặt lịch khám bệnh", // Subject line
                html: getBodyHTMLEmailRemedy(dataSend), // html body
                attachments: [
                    {
                        filename: `remedy-${dataSend.patientId}-${new Date().getTime()}.png`,
                        content: dataSend.imgBase64.split("base64,")[1],
                        encoding: 'base64'
                    },
                ],
            });
            resolve(true)
        } catch (e) {
            reject(e)
        }
    })
}







module.exports = {
    sendSimpleEmail: sendSimpleEmail,
    sendAttachment: sendAttachment,
}




const nodemailer = require('nodemailer');
const config = require('config');

const sendEmailNotification = async (data) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: config.get('emailUser'),
            pass: config.get('emailPassword'),
        },
    });

    const { username, rate, formattedDate, advantages, disadvantages } = data;

    await transporter.sendMail({
        from: '3words Mail <3words.noreply@gmail.com>',
        to: 'shumilovil@gmail.com, nshumilova@inbox.ru',
        subject: `Новый отзыв от ${username}, ${formattedDate}`,
        html: `
        <div>
            <div><b>Имя:</b> ${username}</div>
            <div><b>Оценка:</b> ${rate}</div>
            <div><b>Достоинства:</b></div>
            <div>${advantages}</div>
            <div><b>Недостатки:</b></div>
            <div>${disadvantages}</div>
        </div>`,
    });
};

module.exports = sendEmailNotification;
import nodemailer from 'nodemailer';

const sendMail = async (from, to, subject, html) => {
    const {user, pass} = await nodemailer.createTestAccount();

    return nodemailer
    .createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: { user, pass }
    })
    .sendMail({from, to, subject, html});
}

export default sendMail;

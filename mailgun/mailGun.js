const mailgun = require("mailgun-js");
const DOMAIN = 'mail.easy-fans.net';
const api_key = 'key-bd43c14aa4c95f05fc07c34ad76e05a8';
const mg = mailgun({apiKey: api_key, domain: DOMAIN});



exports.mailgun = function (myData) {
    const data = {
        from: 'Easy-Fans.net <noreply@easy-fans.net>',
        to: myData.to,
        text: myData.text,
        subject: myData.subject,
        html: myData.html
    };
    return mg.messages().send(data);
}

exports.custom = function (myData) {
    const data = {  
        from: myData.from,
        to: 't.vojkan@gmail.com',
        text: myData.text,
        subject: myData.subject
    };

    return mg.messages().send(data);
}
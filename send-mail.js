let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rnuryiev@gmail.com',
    pass: 'piwc fvxd yqoy mlqx'
  }
});
let mailOptions = {
  from: 'rnuryiev@gmail.com',
  to: 'rovshennuryiev@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
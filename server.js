const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.static('./build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/google0e8e3622987d5127.html', function (req, res) {
  res.sendFile(path.join(__dirname, './static', 'google0e8e3622987d5127.html'));
});

app.get('*', function (req, res) {
 	res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.post('/mail', function (req, res) {
 	const mailData = req.body;
 	sendMail(mailData);
 	res.end();
});

let port = process.env.PORT || 5000; 
app.listen(port, function() { 
	console.log('Listening on: ' + port); 
});

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport('smtps://:@smtp.gmail.com')
let sendMail = (data) => {
  console.log('send mail...');
  const mailOptions = {
    from: data.mail,
    to: 'pavlyuk.dev@gmail.com',
    subject: 'from cv ',
    text: data.text
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
}

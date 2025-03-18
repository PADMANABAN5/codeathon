const nodemailer = require('nodemailer');
const fs = require('fs');
const http = require('http');
const formidable = require('formidable');
const path = require('path');

async function sendEmailWithAttachment(options) {
  // ... (Nodemailer code from previous response)
}

http.createServer((req, res) => {
  if (req.url === '/sendemail' && req.method.toLowerCase() === 'post') {
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
        res.end(String(err));
        return;
      }

      const toEmail = fields.toEmail;
      const fromEmail = fields.fromEmail;
      const subject = fields.subject;
      const message = fields.message;
      const emailUser = fields.emailUser;
      const emailPassword = fields.emailPassword;
      let filePath = null;
      let fileName = null;

      if (files.attachment) {
        filePath = files.attachment.filepath;
        fileName = files.attachment.originalFilename;
      }

      try {
        const info = await sendEmailWithAttachment({
          toEmail,
          fromEmail,
          subject,
          message,
          filePath,
          fileName,
          emailUser,
          emailPassword,
        });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <html>
            <body>
              <h1>Email sent successfully!</h1>
              <p>Email sent: ${JSON.stringify(info)}</p>
              <a href="/">Go back to form</a>
            </body>
          </html>
        `);
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`
          <html>
            <body>
              <h1>Error sending email:</h1>
              <p>${String(error)}</p>
              <a href="/">Go back to form</a>
            </body>
          </html>
        `);
      }
    });
    return;
  }

  // Serve the HTML form
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <body>
        <h1>Send Email with Attachment</h1>
        <form action="/sendemail" method="post" enctype="multipart/form-data">
          <label for="toEmail">To Email:</label><br>
          <input type="email" id="toEmail" name="toEmail"><br><br>
          <label for="fromEmail">From Email:</label><br>
          <input type="email" id="fromEmail" name="fromEmail"><br><br>
          <label for="subject">Subject:</label><br>
          <input type="text" id="subject" name="subject"><br><br>
          <label for="message">Message:</label><br>
          <textarea id="message" name="message"></textarea><br><br>
          <label for="attachment">Attachment:</label><br>
          <input type="file" id="attachment" name="attachment"><br><br>
          <label for="emailUser">Email User:</label><br>
          <input type="email" id="emailUser" name="emailUser"><br><br>
          <label for="emailPassword">Email Password:</label><br>
          <input type="password" id="emailPassword" name="emailPassword"><br><br>
          <input type="submit" value="Send Email">
        </form>
      </body>
    </html>
  `);
}).listen(8080);

console.log('Server listening on port 8080');
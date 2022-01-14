// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  response?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Recipient = require("mailersend").Recipient;
  const EmailParams = require("mailersend").EmailParams;
  const MailerSend = require("mailersend");

  const data = JSON.parse(req.body);

  const emailText = `You got an email from ${data.first_name} ${data.last_name}!
  ---
  Phone: ${data.phone}
  Email: ${data.email}
  ---
  Message: ${data.message}`;

  const mailersend = new MailerSend({
    api_key: process.env.MAILERSEND_TOKEN,
  });

  console.log(emailText)

  const recipients = [new Recipient("team@webprism.co", "WEBPRISM Team")];

  const emailParams = new EmailParams()
    .setFrom("website@webprism.co")
    .setFromName("WEBPRISM Website")
    .setRecipients(recipients)
    .setSubject("🎉 New Form Submission on webprism.co 🚀")
    .setText(emailText);

  mailersend
    .send(emailParams)
    .then((result: any) => {
      if (result.status === 202)
        res.status(200).json({ response: "We sent the email" });
    })
    .catch((error: any) => {
      if (error)
        res.status(500).json({ error: "there was an error, check the logs." });
    });

  //testing
  // res.status(200).json({ response: "We sent the email" });
}

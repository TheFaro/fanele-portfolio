import sgMail from "@sendgrid/mail";
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
console.log(process.env.APIKEY);
sgMail.setApiKey(process.env.APIKEY!);

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
  // const data = JSON.parse(event.body!);
  // const { email, subject } = data;
  //
  // // console.log(data);
  //
  // const body = Object.keys(data)
  //   .map((k) => {
  //     return `${k}: ${data[k]}`;
  //   })
  //   .join("<br><br>");
  //
  // const mail_to_send = {
  //   to: "malazafanelesibonge@gmail.com",
  //   from: email,
  //   subject: subject ? subject : "New Entry from Portfolio",
  //   html: body,
  // };
  //
  // try {
  //   await sgMail.send(mail_to_send);
  //
  //   return {
  //     statusCode: 200,
  //     body: "Message sent successfully",
  //   };
  // } catch (e: any) {
  //   return {
  //     statusCode: e.code,
  //     body: e.message,
  //   };
  // }
};

export { handler };

import sgMail from "@sendgrid/mail";
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
console.log(process.env.APIKEY);
sgMail.setApiKey(process.env.APIKEY!);

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({ message: "Hello World" }),
  // };
  console.log("I am here now.");
  const data = JSON.parse(event.body!);
  const { email, subject } = data;

  console.log(typeof data);

  const body = Object.keys(data)
    .map((k) => {
      return `${k}: ${data[k]}`;
    })
    .join("<br><br>");

  console.log(typeof body);

  const mail_to_send = {
    to: "malazafanelesibonge@gmail.com",
    from: email,
    subject: subject ? subject : "New Entry from Portfolio",
    html: body,
  };

  // console.log(sgMail.);

  try {
    await sgMail
      .send(mail_to_send)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    return {
      statusCode: 200,
      body: "Message sent successfully",
    };
  } catch (e: any) {
    return {
      statusCode: e.code,
      body: e.message,
    };
  }
};

export { handler };

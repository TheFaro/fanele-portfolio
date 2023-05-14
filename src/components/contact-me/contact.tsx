import * as React from "react";
import Title from "../fonts/title";
import SubTitle from "../fonts/sub-title";
import {
  wrapper,
  text,
  mobileText,
  form,
  mobileForm,
  input,
  mobileInput,
  error,
  mobileError,
  subtitle,
} from "../../styles/components/contact.module.scss";
import { useForm } from "react-hook-form";

const ContactView = ({
  mobileView,
  id,
}: {
  mobileView: boolean;
  id: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    const { username, email, subject, message } = data;
    const to_send = {
      name: username,
      email: email,
      subject: subject,
      message: message,
    };

    try {
      fetch("/.netlify/functions/sendmail", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(to_send),
      }).then((res) => {
        if (!res.ok) {
          console.log("Error occured.");
          return;
        }
        console.log("Successfully sent");
      });
    } catch (e) {
      console.log(e);
    }
  };

  // const handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <div id={id} className={wrapper}>
      <Title mobileView={mobileView} title="CONTACT"></Title>
      <div className={subtitle}>
        <SubTitle
          mobileView={mobileView}
          subtitle="I'd Love to Hear From You."
        ></SubTitle>
      </div>

      <div className={mobileView ? mobileText : text}>
        Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing
        dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur
        ut in in eu do.
      </div>

      <div className={mobileView ? mobileForm : form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className={mobileView ? mobileInput : input}
              id="name"
              placeholder="Name"
              type="text"
              {...register("username", {
                required: true,
              })}
            />
            {errors.username && (
              <div className={mobileView ? mobileError : error}>
                This field is required
              </div>
            )}
          </div>
          <div>
            <input
              className={mobileView ? mobileInput : input}
              id="email"
              placeholder="Email Address"
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid.",
                },
              })}
            />
            {errors.email && errors.email.type === "pattern" && (
              <div className={mobileView ? mobileError : error}>
                This field is required
              </div>
            )}
          </div>
          <div>
            <input
              className={mobileView ? mobileInput : input}
              id="subject"
              placeholder="Subject"
              type="text"
              {...register("subject")}
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              id="message"
              cols={70}
              rows={20}
              {...register("message", {
                required: true,
              })}
            ></textarea>
            {errors.message && (
              <div className={mobileView ? mobileError : error}>
                This field is required
              </div>
            )}
          </div>

          <div>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactView;

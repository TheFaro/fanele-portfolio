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
  contactDataWrapper,
  mobileContactDataWrapper,
  contactItem,
  mobileContactItem,
  mobileIcon,
  icon,
  contactText,
  mobileContactText,
  infoText,
  mobileInfoText,
  copyRight,
} from "../../styles/components/contact.module.scss";
import { useForm } from "react-hook-form";
import { StaticImage } from "gatsby-plugin-image";

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
      fetch("/netlify/functions/sendmail", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(to_send),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        if (!res.ok) {
          console.log(res);
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
        Do you want a website done, an android application or a custom software
        with clear specifications. Do not hesitate to contact me with the
        contact info below.
      </div>

      <div
        className={mobileView ? mobileContactDataWrapper : contactDataWrapper}
      >
        <div className={mobileView ? mobileContactItem : contactItem}>
          <div className={mobileView ? mobileIcon : icon}>
            <StaticImage src="../../assets/location.png" alt="location icon" />
          </div>
          <div className={mobileView ? mobileContactText : contactText}>
            WHERE TO FIND ME
          </div>
          <div className={mobileView ? mobileInfoText : infoText}>
            Siphocosini
            <br />
            Hhohho
            <br />
            Eswatini
          </div>
        </div>
        <div className={mobileView ? mobileContactItem : contactItem}>
          <div className={mobileView ? mobileIcon : icon}>
            <StaticImage src="../../assets/email.png" alt="email icon" />
          </div>
          <div className={mobileView ? mobileContactText : contactText}>
            EMAIL ME AT
          </div>
          <div className={mobileView ? mobileInfoText : infoText}>
            malazafanelesibonge@gmail.com
          </div>
        </div>
        <div className={mobileView ? mobileContactItem : contactItem}>
          <div className={mobileView ? mobileIcon : icon}>
            <StaticImage src="../../assets/telephone.png" alt="phone icon" />
          </div>
          <div className={mobileView ? mobileContactText : contactText}>
            CALL ME AT
          </div>
          <div className={mobileView ? mobileInfoText : infoText}>
            Mobile 1: (+268) 7822 1507
            <br /> Mobile 2: (+268) 7999 0188
          </div>
        </div>
      </div>

      <div className={copyRight}>
        &copy; Copyright 2023 | Developed by Fanelesibonge Malaza
      </div>
    </div>
  );
};

export default ContactView;

// <div className={mobileView ? mobileForm : form}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <input
//               className={mobileView ? mobileInput : input}
//               id="name"
//               placeholder="Name"
//               type="text"
//               {...register("username", {
//                 required: true,
//               })}
//             />
//             {errors.username && (
//               <div className={mobileView ? mobileError : error}>
//                 This field is required
//               </div>
//             )}
//           </div>
//           <div>
//             <input
//               className={mobileView ? mobileInput : input}
//               id="email"
//               placeholder="Email Address"
//               type="email"
//               {...register("email", {
//                 required: true,
//                 pattern: {
//                   value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//                   message: "Email is not valid.",
//                 },
//               })}
//             />
//             {errors.email && errors.email.type === "pattern" && (
//               <div className={mobileView ? mobileError : error}>
//                 This field is required
//               </div>
//             )}
//           </div>
//           <div>
//             <input
//               className={mobileView ? mobileInput : input}
//               id="subject"
//               placeholder="Subject"
//               type="text"
//               {...register("subject")}
//             />
//           </div>
//           <div>
//             <textarea
//               placeholder="Message"
//               id="message"
//               cols={70}
//               rows={20}
//               {...register("message", {
//                 required: true,
//               })}
//             ></textarea>
//             {errors.message && (
//               <div className={mobileView ? mobileError : error}>
//                 This field is required
//               </div>
//             )}
//           </div>
//
//           <div>
//             <button type="submit">SUBMIT</button>
//           </div>
//         </form>
//       </div>
//

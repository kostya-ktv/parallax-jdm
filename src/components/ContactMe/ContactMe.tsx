import "./contactMe.style.css";
import { AiFillGithub, AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

const ContactMe = () => {
  return (
    <div className="contact">
      <h1>Konstantin Kotov</h1>
      <h2>Contact me :</h2>
      <div className="contact__icons">
        <a
          href="https://github.com/kostya-ktv"
          target="_blank"
          rel="noreferrer"
          className="profile__social-link"
        >
          <AiFillGithub className="contact__icon" />
        </a>
        <a
          href="mailto:kostya.ktv1@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="profile__social-link"
        >
          <AiOutlineMail className="contact__icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/kostya-ktv/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin className="contact__icon" />
        </a>
      </div>
    </div>
  );
};
export default ContactMe;

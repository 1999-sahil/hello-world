import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://github.com/1999-sahil"
        target="_blank"
        className="text-lg opacity-70 hover:opacity-100 dark:opacity-70 dark:hover:opacity-100"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/sahil-ahmed-86222718a/"
        target="_blank"
        className="text-lg opacity-70 hover:opacity-100 dark:opacity-70 dark:hover:opacity-100"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&to=sahilahmed466@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send email via Gmail"
        className="text-lg opacity-70 hover:opacity-100 dark:opacity-70 dark:hover:opacity-100"
      >
        <SiGmail />
      </a>
    </div>
  );
}

export default SocialLinks;

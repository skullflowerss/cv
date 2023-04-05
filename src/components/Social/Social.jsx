import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import style from "./Socials.module.scss";

const icons = {
  twitter: <FaTwitter className={style.icon} />,
  instagram: <FaInstagram className={style.icon} />,
  linkedin: <FaLinkedin className={style.icon} />,
  github: <FaGithub className={style.icon} />,
};

const Social = ({ links }) => {
  return (
    <div className={style.socials}>
      <ul className={style.linkList}>
        {links.map((link, index) => {
          const { url, social } = link;
          return (
            <li key={index} className={style.linkItem}>
              <Link href={url} target="_blank">
                {icons[social]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Social;

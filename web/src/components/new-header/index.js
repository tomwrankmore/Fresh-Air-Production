import React from "react";
import Logo from "../../assets/FA-nav-logo.inline.svg";
import { Link } from "gatsby";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import * as styles from "./style.module.scss";
// import cn from "../../lib/cn";

const NewHeader = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.header__mainNav}>
        <li className={styles.header__listItem}>
          <Link to="/who-we-are" className={`${styles.header__navLink}`}>
            Who we are
          </Link>
        </li>
        <li className={styles.header__listItem}>
          <Link to="/what-we-do" className={styles.header__navLink}>
            What we do
          </Link>
        </li>
        <li className={styles.header__listItem}>
          <Link to="/our-podcasts" className={styles.header__navLink}>
            Our Podcasts
          </Link>
        </li>
        <li className={styles.header__listItem}>
          <Link to="/editorials" className={styles.header__navLink}>
            Editorials
          </Link>
        </li>
      </ul>
      <div className={styles.header__logo}>
        <Link to="/" className="centralLogo">
          <Logo className="logoSVG" style={{ width: "140px", height: "50px" }} />
        </Link>
      </div>
      <ul className={styles.header__secondaryNav}>
        <li>
          <a
            href="https://www.instagram.com/freshairproductionuk/?hl=en"
            target="_blank"
            referrerPolicy="noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Freshairprod" target="_blank" referrerPolicy="noreferrer">
            <FaTwitter />
          </a>
        </li>
        {/* <li>
          <Link to="/contact" className={styles.header__secondaryNav_contactLink}>
            Get in touch!
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default NewHeader;

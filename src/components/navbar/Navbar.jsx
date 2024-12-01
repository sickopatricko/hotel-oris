import styles from "./Navbar.module.css";
import logo from "./../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="logo hotel homer" />
      </div>
      {/* <section className={styles.accessibility_btns}>
        <div className={styles.font_btns}>
          <button>A-</button>
          <button>A</button>
          <button>A+</button>
        </div>
        <div className={styles.color_btns}>
          <button aria-label="Czarno-biały"></button>
          <button aria-label="Zwykły"></button>
          <button aria-label="Pomarańczowo-czarny"></button>
          <button aria-label="Czarno-pomarańczowy"></button>
        </div>
      </section> */}
      <section className={styles.menu}>
        <button onClick={() => setIsClicked(!isClicked)}>
          <FontAwesomeIcon icon={faBars} className={styles.bars_icn} />
        </button>
      </section>

      {isClicked && (
        <section className={styles.hidden_menu}>
          <form className={styles.menu_form}>
            <span className={styles.search_input}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styles.search_icn}
              />
              <input
                type="text"
                placeholder="Wyszukaj frazę"
                aria-label="Wyszukaj frazę"
              />
            </span>
            <ul className={styles.menu_list}>
              <li>
                <a href="">Akutalności</a>
              </li>
              <li>
                <a href="">O nas</a>
              </li>
              <li>
                <a href="">Oferty</a>
              </li>
              <li>
                <a href="">Dojazd</a>
              </li>
              <li>
                <a href="">Kontakt</a>
              </li>
            </ul>
          </form>
        </section>
      )}
    </nav>
  );
};

export default Navbar;

import Navbar from "../navbar/Navbar";
import styles from "./MainPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import News from "../news/News";
import Heading from "../heading/Heading";
import Footer from "../footer/Footer";

const MainPage = () => {
  const data = [
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "30.0.2024",
    },
    {
      paragraph:
        "Bezpłatne badania wzroku dla seniorów w województwie pomorskim",
      date: "04.12.2024",
    },
    {
      paragraph:
        "Warsztaty z zarządzania budżetem domowym dla młodzieży w dolnośląskim",
      date: "05.12.2024",
    },
    // {
    //   paragraph: "Program wsparcia dla przedsiębiorców w podlaskim",
    //   date: "06.12.2024",
    // },
    // {
    //   paragraph: "Kampania edukacyjna na temat zdrowego odżywiania w opolskim",
    //   date: "07.12.2024",
    // },
    // {
    //   paragraph:
    //     "Bezpłatne szczepienia przeciw grypie dla mieszkańców wielkopolskiego",
    //   date: "08.12.2024",
    // },
    // {
    //   paragraph: "Nowe miejsca w przedszkolach publicznych w mazowieckim",
    //   date: "09.12.2024",
    // },
    // {
    //   paragraph:
    //     "Wsparcie dla rodzin wielodzietnych w województwie zachodniopomorskim",
    //   date: "10.12.2024",
    // },
  ];

  return (
    <section className={styles.container}>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <News />
        {/*
        <h2 className={styles.heading}>Aktualności</h2>
         <section className={styles.header}>
          {data.map((e, idx) => (
            <div className={styles.card} key={idx}>
              <p className={styles.card_date}>{e.date}</p>
              <div className={styles.card_desc}>
                <p>{e.paragraph}</p>
              </div>
            </div>
          ))}
        </section>
        <section className={styles.header2}>
          {data.map((e, idx) => (
            <div className={`${styles.card}`} key={idx}>
              <p className={`${styles.card_date} black_primary`}>{e.date}</p>
              <div className={styles.card_desc}>
                <p>{e.paragraph}</p>
              </div>
            </div>
          ))}
        </section>
        <div className={styles.list_num}>
          <FontAwesomeIcon icon={faArrowLeft} className={styles.arrow_icn} />
          <span className={styles.active}>1</span>
          <span>2</span>
          <span>3</span>
          <FontAwesomeIcon icon={faArrowRight} className={styles.arrow_icn} />
        </div> */}

        <section className={styles.accessibility_cont}>
          <h2 className={styles.mainPage_heading}>Dostępność</h2>
          <div className={styles.accessibility_blocks}>
            <div>
              <a href="" aria-label="Dokumenty do pobrania">
                Dokumenty do pobrania
              </a>
            </div>
            <div>
              <a href="" aria-label="Linki">
                Linki
              </a>
            </div>
          </div>
        </section>

        <h2 className={styles.mainPage_heading}>
          Wspomagane Społeczności Mieszkaniowe
        </h2>
      </main>
      {/* <Footer /> */}
    </section>
  );
};

export default MainPage;

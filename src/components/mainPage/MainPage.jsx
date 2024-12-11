import Navbar from "../navbar/Navbar";
import styles from "./MainPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import News from "../news/News";
const MainPage = () => {
  const data = [
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "30.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "30.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "30.0.2024",
    },
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
          <p>Dostępność</p>
          <div className={styles.accessibility_blocks}>
            <div>Dokumenty do pobrania</div>
            <div>Link</div>
          </div>
        </section>
      </main>
      {/* <footer className={styles.footer}></footer> */}
    </section>
  );
};

export default MainPage;

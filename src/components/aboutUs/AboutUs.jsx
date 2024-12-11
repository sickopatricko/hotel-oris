import Footer from "../footer/Footer";
import Heading from "../heading/Heading";
import Navbar from "../navbar/Navbar";
import styles from "./AboutUs.module.css";
import hotel_homer from "./../../assets/hotel_homer.jpg";
import cert from "./../../assets/cert1.png";
import image9 from "./../../assets/image 9.png";
import image8 from "./../../assets/image 8.png";
import image10 from "./../../assets/image 10.png";
import image11 from "./../../assets/image 11.png";
import image12 from "./../../assets/image 12.png";
import image13 from "./../../assets/image 13.png";
const AboutUs = () => {
  return (
    <section className={styles.container}>
      <main className={styles.main}>
        <Heading>O nas</Heading>
        <section className={styles.about_us_cont}>
          <img src={hotel_homer} alt="" />
          <div className={styles.description}>
            <p className={styles.first_paragraph}>
              Polski Związek Niewidomych Ośrodek Rehabilitacji i Szkolenia
              „Homer" im. Józefa Buczkowskiego
            </p>
            <p className={styles.second_paragraph}>
              {" "}
              Rehabilitacji i Szkolenia HOMER położony jest w centrum
              Bydgoszczy, przy głównych trasach północ-południe i wschód-zachód,
              co czyni go doskonałym punktem wypadowym lub miejscem odpoczynku w
              trasie.
            </p>
            <p>
              Homer jest bardzo dobrze skomunikowany, znajduje się blisko
              szpitala uniwersyteckiego, dworca Bydgoszcz Leśna i Bydgoszcz
              Główna. Stąd bardzo łatwo dostać się do ścisłego centrum miasta.
              Ośrodek dysponuje dużym, bezpłatnym parkingiem dla swoich gości. W
              Ośrodku znajduje się również znana na świecie przychodnia
              rehabilitacyjna z innowacyjnym wyposażeniem.
            </p>
          </div>
        </section>

        <section className={styles.subsidies_section}>
          <h2>Dofinansowania</h2>
          <div className={styles.certs_section}>
            <img src={image8} alt="" />
            <img src={image9} alt="" />
            <img src={image10} alt="" />
            <img src={image11} alt="" />
            <img src={image12} alt="" />
            <img src={image13} alt="" />
            <img src={cert} alt="" />
          </div>
        </section>

        <section className={styles.articles_section}>
          <div className={styles.article}>
            <h3>Rys historyczny</h3>
            <p>
              Ośrodek Rehabilitacji i Szkolenia w Bydgoszczy powstał w 1954 roku
              przy ul. Bernardyńskiej 3. W 1981 roku został przeniesiony do
              nowych obiektów przy ul. Powstańców Wielkopolskich 33 . Obecnie od
              1990 roku Ośrodek jest zakładem własnym – samodzielną jednostką
              organizacyjną bez osobowości prawnej - Polskiego Związku
              Niewidomych, stowarzyszenia zarejestrowanego w Sądzie Rejonowym
              dla m. st. Warszawy, Wydział XIX Gospodarczy Krajowego Rejestru
              Sądowego, nr KRS 0000042049 , posiadającego status organizacji
              pożytku publicznego...
            </p>
            <a className={styles.read_more_btn} href="">
              CZYTAJ
            </a>
          </div>
          <div className={styles.article}>
            <h3>
              Działania Rehabilitacyjne ze środków PFRON w okresie od 01
              kwietnia 2023 do 31 marca 2024 roku
            </h3>
            <p>
              Ośrodek Rehabilitacji i Szkolenia PZN w Bydgoszczy w Konkursu
              PFRON 1/2020  pn. „Pokonamy Bariery”   zaprasza na realizowany
              projekt „Azymut na Rehabilitację” w ramach którego odbywać się
              będą
            </p>
            <a className={styles.read_more_btn} href="">
              CZYTAJ
            </a>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </section>
  );
};

export default AboutUs;

import Footer from "../footer/Footer";
import Heading from "../heading/Heading";
import Navbar from "../navbar/Navbar";
import styles from "./AboutUs.module.css";
import hotel_homer from "./../../assets/hotel_homer.jpg";

const AboutUs = () => {
  return (
    <section className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Heading>O nas</Heading>
        <section className={styles.about_us_cont}>
          <img src={hotel_homer} alt="" />
          <div>
            <p>
              Polski Związek Niewidomych Ośrodek Rehabilitacji i Szkolenia
              „Homer" im. Józefa Buczkowskiego
            </p>
            <p>
              {" "}
              Rehabilitacji i Szkolenia HOMER położony jest w centrum
              Bydgoszczy, przy głównych trasach północ-południe i wschód-zachód,
              co czyni go doskonałym punktem wypadowym lub miejscem odpoczynku w
              trasie. Homer jest bardzo dobrze skomunikowany, znajduje się
              blisko szpitala uniwersyteckiego, dworca Bydgoszcz Leśna i
              Bydgoszcz Główna. Stąd bardzo łatwo dostać się do ścisłego centrum
              miasta. Ośrodek dysponuje dużym, bezpłatnym parkingiem dla swoich
              gości. W Ośrodku znajduje się również znana na świecie przychodnia
              rehabilitacyjna z innowacyjnym wyposażeniem.
            </p>
          </div>
        </section>

        <section className={styles.dofinansowania_section}>
          <h2>Dofinansowania</h2>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default AboutUs;

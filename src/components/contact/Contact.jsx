import Heading from "../heading/Heading";
import styles from "./Contact.module.css";
import phone from "./../../assets/phone.svg";
import mail from "./../../assets/mail.svg";
import loc from "./../../assets/loc.svg";
import Footer from "../footer/Footer";
const Contact = () => {
  return (
    <section className={styles.container}>
      <Heading>Kontakt</Heading>
      <h3 className={styles.place_name}>
        PZN OŚRODEK REHABLITACJI I SZKOLENIA "HOMER" im. Józefa Buczkowskiego
      </h3>

      <section className={styles.phone_info}>
        <img src={phone} alt="ikona telefonu" />
        <p>
          Centrala: <strong>52 341 52 28 oraz 52 341 12 51</strong>
          <p>
            Komórka recepcji: <strong>663 344 410</strong>
          </p>
          <p>
            Dyrektor Ośrodka: <strong>52 341 02 83</strong>
          </p>
          <p>
            Hotel "Homer": <strong>52 341 52 28 wew. 100</strong>
          </p>
        </p>
      </section>
      <section className={styles.mail_info}>
        <img src={mail} alt="ikona poczty" />
        <p>
          Dyrektor Ośrodka:
          <strong>dyrektor@homer.pzn.org.pl</strong>
          <p>
            Sekretariat: <strong>sekretariat@homer.pzn.org.pl</strong>
          </p>
          <p>
            Księgowość:
            <strong>ksiegowosc@homer.pzn.org.pl</strong>
          </p>
          <p>
            Hotel: <strong>recepcja@oris.org.pl</strong>
          </p>
        </p>
      </section>
      <section className={styles.loc_info}>
        <img src={loc} alt="ikona lokalizacji" />
        <div>
          <p>al. Powstańców Wielkopolskich 33</p>
          <p>85-090 Bydgoszcz</p>
        </div>
      </section>
      <section className={styles.maps_section}>
        <iframe
          className={styles.maps}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38322.40086962005!2d17.98212756953123!3d53.10749805951414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470313f19af82d31%3A0x97d654347b89de0e!2sPZN%20O%C5%9Brodek%20Rehabilitacji%20i%20Szkolenia%20%22HOMER%22%20im.%20J%C3%B3zefa%20Buczkowskiego!5e0!3m2!1spl!2spl!4v1733945925091!5m2!1spl!2spl"
          width="400"
          height="250"
          loading="lazy"
        ></iframe>
      </section>
    </section>
  );
};

export default Contact;

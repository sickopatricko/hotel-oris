import fanimani from "./../../assets/fanimani.jpg";
import medsync from "./../../assets/medsync.jpg";
import pznlogo from "./../../assets/pznlogo.jpg";
import styles from "./Heading.module.css";

const Heading = ({ children }) => {
  return (
    <section className={styles.header_section}>
      <h2 className={styles.heading}>{children}</h2>
      <div className={styles.ad_logos}>
        <img src={fanimani} alt="fanimani" />
        <img src={medsync} alt="medsync" />
        <img src={pznlogo} alt="pznlogo" />
      </div>
    </section>
  );
};

export default Heading;

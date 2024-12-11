import React from "react";
import styles from "./Transport.module.css";
import shared from "../../styles/shared.module.css";

const Transport = () => {
  const data = [
    {
      id: 1,
      heading: "Z dworca PKP Bydgoszcz Leśna",
      travel: [
        {
          travel_type: "Autobus",
          travel_type_numbers: "65 i 68",
          start: "Bydgoszcz Leśna",
          end: "Powstańców Wielkopolskich / Wyszyńskiego",
          stops: "6 przystanków",
        },
      ],
    },
    {
      id: 2,
      heading: "Z dworca PKS",
      travel: [
        {
          travel_type: "Autobus",
          travel_type_numbers: "55",
          start: "Ogińskiego / Moniuszki",
          end: "Powstańców Wielkopolskich / Wyszyńskiego",
          stops: "3 przystanki",
        },
        {
          travel_type: "Tramwaj",
          travel_type_numbers: "4 i 6",
          start: "Dworzec Autobusowy",
          end: "Chodkiewicza / Lelewela",
          stops: "9 przystanków",
        },
      ],
    },
    {
      id: 3,
      heading: "Z dworca PKP Bydgoszcz Główna",
      travel: [
        {
          travel_type: "Autobus",
          travel_type_numbers: "71 i 77",
          start: "Fredry / Warszawska",
          end: "Powstańców Wielkopolskich / Wyszyńskiego",
          stops: "6 przystanków",
        },
      ],
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={shared.heading}>Dojazd</h2>

      <section className={styles.travel_section}>
        {/* ONE TRAVEL SECTION */}
        {data.map((el) => (
          <section className={styles.travel} key={el.id}>
            <p className={styles.travel_heading}>{el.heading}</p>

            <section className={styles.travel_ways_cont}>
              {el.travel.map((item, idx) => (
                <section className={styles.travel_way} key={idx}>
                  <p className={styles.travel_type}>
                    {item.travel_type + " "}
                    <span className={styles.travel_type_numbers}>
                      {item.travel_type_numbers}
                    </span>
                  </p>
                  <section className={styles.travel_wrapper}>
                    {/* START */}
                    <span className={styles.travel_step}>
                      <p className={styles.travel_step_subheading}>wsiadamy</p>
                      <button className={styles.travel_place}>
                        {item.start}
                      </button>
                    </span>
                    {/* STOPS */}
                    <span className={styles.travel_stops}>{item.stops}</span>
                    {/* STOP */}
                    <span className={styles.travel_step}>
                      <p className={styles.travel_step_subheading}>wysiadamy</p>
                      <button className={styles.travel_place}>
                        {item.end}
                      </button>
                    </span>
                  </section>
                </section>
              ))}
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Transport;

import React, { useEffect, useRef, useState } from "react";
import styles from "./News.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const News = () => {
  const data = [
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "1.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "2.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "3.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "4.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "5.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "6.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "7.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "8.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "9.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "10.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "11.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "12.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "13.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "14.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "15.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "16.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "17.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "18.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "19.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "20.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "21.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "2.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "23.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "24.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "25.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "26.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "27.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "25.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "26.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "27.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "25.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "26.0.2024",
    },
    {
      paragraph:
        " Bezpłatna rehabilitacja dla mieszkańców kujawsko-pomorskiego",
      date: "27.0.2024",
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(2);

  const maxPages = Math.min(5, Math.ceil(data.length / itemsPerPage));
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (page) => {
    if (page >= 0 && page < maxPages) {
      setCurrentPage(page);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + maxPages) % maxPages);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % maxPages);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = data.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    const handleItemsPerPage = () => {
      window.innerWidth < 600
        ? setItemsPerPage(2)
        : window.innerWidth < 1280
        ? setItemsPerPage(4)
        : setItemsPerPage(8);
    };

    handleItemsPerPage();

    window.addEventListener("resize", handleItemsPerPage);

    return () => window.removeEventListener("resize", handleItemsPerPage);
  }, []);

  // useEffect(() => {
  //   handleItemsPerPage();
  // }, []);

  return (
    <section className={styles.container}>
      {/* HEADING */}
      <h2 className={styles.heading}>Aktualności</h2>

      {/* SLIDER  */}
      <section className={styles.slider}>
        <section className={styles.grid}>
          {visibleItems?.map((el, idx) => (
            <div key={idx} className={styles.card}>
              <img
                className={styles.card_bg}
                src="https://as2.ftcdn.net/v2/jpg/03/43/13/13/1000_F_343131312_3mYU3hRP3JBfJivutL897FXWYgV76J20.jpg"
                alt="news background"
              />
              <p className={styles.card_date}>{el.date}</p>
              <div className={styles.card_desc}>
                <p>{el.paragraph}</p>
              </div>
            </div>
          ))}
        </section>

        {/* SLIDER CONTROLS */}
        <section className={styles.controls}>
          <button className={styles.controls_icon} onClick={handlePrevPage}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span className={styles.controls_pagination}>
            {Array.from({ length: maxPages }, (_, pageIndex) => (
              <button
                key={pageIndex}
                className={`${styles.controls_pagination_btn} ${
                  pageIndex === currentPage ? styles.active : ""
                }`}
                onClick={() => handlePageChange(pageIndex)}
              >
                {pageIndex + 1}
              </button>
            ))}
          </span>
          <button className={styles.controls_icon} onClick={handleNextPage}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </section>
      </section>
    </section>
  );
};

export default News;

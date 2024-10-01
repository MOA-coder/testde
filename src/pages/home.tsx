// pages/index.js
import Head from "next/head";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "../styles/inicio.module.css";
import { Top2 } from "@/components/top";
import Header from "@/components/head";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % 2), // Aqui apenas 2 cartões
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2),
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Os meus cartões</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <Header title="Início"></Header>
      <Top2 information="Olá, Ana Diogo"></Top2>

      {/* Carousel container */}
      <div className={styles.carouselContainer} {...handlers}>
        <div
          className={styles.carousel}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${
              currentIndex * 20
            }px))`, // Ajuste para visibilidade dos cartões
          }}
        >
          {/* Cartão 1 */}
          <div
            className={`${styles.cardWrapper} ${
              currentIndex === 0 ? styles.activeCard : ""
            }`}
          >
            <div
              className={styles.card}
              style={{
                background: "linear-gradient(to right top, #C5A4DB, #535353)",
              }}
            >
              <div className={styles.cardm}>
                <div className={styles.top}></div>
              </div>

              <h2>Multischool Angola</h2>
              <p>043 345 160 9</p>
              <h3>50.000,00 kz</h3>
              <p>Ana Diogo</p>
            </div>
          </div>

          {/* Cartão 2 */}
          <div
            className={`${styles.cardWrapper} ${
              currentIndex === 1 ? styles.activeCard : ""
            }`}
          >
            <div
              className={styles.card}
              style={{
                background:
                  "linear-gradient(to left bottom , #535353, #F9D048)",
              }}
            >
              <div className={styles.cardm}>
                <div className={styles.top}></div>
              </div>

              <h2>Instituto Superior</h2>
              <p>012 345 678 9</p>
              <h3>70.000,00 kz</h3>
              <p>Ana Correia de Assis Diogo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resumo */}
      <div className={styles.resumo}>
        <h3>Resumo</h3>
        <ul>
          {currentIndex === 0 && (
            <>
              <li>Propina Junho - 06.08.2024 - -54.600,50 kz</li>
              <li>Propina Julho - 05.07.2024 - -54.600,50 kz</li>
              <li>Bônus plataforma - 06.08.2024 - +10.900,50 kz</li>
              <li>Pgc. Estágio - 06.08.2024 - +45.600,50 kz</li>
            </>
          )}
          {currentIndex === 1 && (
            <>
              <li>Biblioteca - 05.07.2024 - há 1h</li>
              <li>Refeitório - 06.07.2024 - há 2h</li>
              <li>LABPRO P2-01 - 07.07.2024 - há 4h</li>
              <li>Mini auditório 1 - 07.07.2024 - há 6h</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

// pages/index.js
import Head from "next/head";
import styles from "../styles/cards.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Link from "next/link";
// import "bootstrap-icons/font/bootstrap-icons.css"; // Importando ícones

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Os meus cartões</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <Top information="Os meus cartões" pagina="home"></Top>

      <div className={styles.cards}>
        <Link href="/consultsM" className={`${styles.card} ${styles.card_m}`}>
          <div className={styles.top}>
            <img src="img/cards.svg" alt="" width="190" />
            <img src="img/nfc.png" alt="" />
          </div>
          <div className={styles.corpo}>
            <div className={styles.c_number}>
              <p>043 345 160 9</p>
            </div>
            <div className={styles.amount}>
              <h1>50.000,00 kz</h1>
            </div>
          </div>
          <div className={styles.bottom}>
            <p>Ana Diogo</p>
            <img src="/img/Kwik.svg" alt="" width="40" />
          </div>
        </Link>
        <div className={`${styles.card} ${styles.card_e}`}>
          <div className={styles.top}>
            <div className={styles.icon}>
              <img src="img/ispt.svg" alt="" />
            </div>
            <div className={styles.inst}>
              <p>
                Instituto Superior Politécnico de Tecnologias e Ciências -
                ISPTEC
              </p>
            </div>
          </div>
          <div className={styles.corpo}>
            <div className={styles.ft}>
              <img src="img/id.svg" alt="" />
            </div>
            <div className={styles.info}>
              <ul>
                <li>
                  <b>Nome:</b> Ana Correia de Assis Diogo
                </li>
                <li>
                  <b>Curso:</b> Engenharia informática
                </li>
                <li>
                  <b>Nº matrícula:</b> 20242190
                </li>
                <li>
                  <b>Turma:</b> EINF-M1
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.img}>
              <img src="img/cards.svg" alt="" />
            </div>
            <img src="img/qr_code.svg" alt="" />
          </div>
        </div>
        <div className={`${styles.card} ${styles.card_est}`}>
          <div className={styles.top}>
            <div className={styles.gp}>
              <div className={styles.icon}>
                <img src="img/unitel.svg" alt="" />
              </div>
              <div className={styles.inst}>
                <p>Unitel S.A</p>
              </div>
            </div>
            <div className={styles.desc}>
              <p>Cartão de estagiário</p>
            </div>
          </div>
          <div className={styles.corpo}>
            <div className={styles.ft}>
              <img src="img/id.svg" alt="" />
            </div>
            <div className={styles.info}>
              <ul>
                <li>
                  <b>Nome:</b> Ana Correia de Assis Diogo
                </li>
                <li>
                  <b>Sector:</b> Departamento de TI
                </li>
                <li>
                  <b>Turno:</b> Matinal
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.img}>
              <img src="img/cards.svg" alt="" />
            </div>
            <img src="img/qr_code.svg" alt="" />
          </div>
        </div>
      </div>
      <Menu></Menu>
    </div>
  );
}

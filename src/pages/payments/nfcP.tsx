import Header from "@/components/head";
import pay from "@/styles/payments/nfcPay.module.css";
// import payC from "@/styles/payments/instituicao/confirmacao2.module.css";
import payC from "@/styles/payments/instituicao/confP.module.css";
import styles from "@/styles/cards.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Link from "next/link";
import {LightButton} from "@/components/buttons";

export default function Nfcpayment(){
    return (
      <>
        <Header title="Pagamento Propina"></Header>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrapicons@1.11.3/font/bootstrapicons.min.css"
          />
        </Head>

        <div className={styles.container}>
          <Top information="Pagamentos" pagina="instituicao/propinas"></Top>

          <div className={`${styles.cards} ${payC.card}  ${pay.card}`}>
            <Link
              href="/consultsM"
              className={`${styles.card} ${styles.card_m}`}
            >
              <div className={styles.top}>
                <img
                  src="../../img/cards.svg"
                  alt=""
                  width="190"
                  className={payC.im}
                />
                <img src="../../img/nfc.png" alt="" />
              </div>
              <div className={styles.corpo}>
                <div className={styles.c_number}>
                  <p>043 345 160 9</p>
                </div>
                <div className={styles.amount}>
                  <h1>Ana Diogo</h1>
                </div>
              </div>
              <div className={styles.bottom}>
                <p>50.000,00 kz</p>
                <img src="/img/Kwik.svg" alt="" width="40" />
              </div>
            </Link>
          </div>
          <div className={pay.nfc}>
            <img src="../../icons/nfc.svg" alt="" width="90" />
            <p>Aproxime o seu smartphone ao TPA...</p>
          </div>

          <div className={payC.btn}>
            <LightButton
              description="Pagamento via QR code"
              redirect="proof"
            ></LightButton>
          </div>
          <Menu></Menu>
        </div>
      </>
    );
}
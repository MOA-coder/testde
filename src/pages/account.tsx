import account from "../styles/account.module.css";
import Image from "next/image";
import PurpleButton from "@/components/buttons";

export default function Documents() {
  return (
    <>
      <div className={account.container}>
        <div className={account.progress}>
          <div className={`${account.line} ${account.line_active}`}></div>
          <div className={`${account.line} ${account.line_active}`}></div>
          <div className={`${account.line}`}></div>
        </div>
        <div className={account.top}>
          <div className={account.back}>
            <Image
              className={account.arrow}
              src={"/icons/left_arrow.svg"}
              alt="ba2ck"
              width={30}
              height={30}
              priority
            />
          </div>
          <div className={account.icon}>
            <Image
              className={account.logo}
              src={"/img/logo.svg"}
              alt="ba2ck"
              width={90}
              height={90}
              priority
            />
          </div>
        </div>
        <div className={account.header}>
          <h1>Estás quase lá, precisamos de mais algumas informações!</h1>
          <p>Anexe os documentos correctamente</p>
        </div>

        <div className={account.insName}>
          <p>Documentação</p>
        </div>

        <div className={account.inputs}>
          {/* <div className={account.inputContainer}>
            <input
              type="file"
              placeholder="Bilhete de identidade ou passaporte"
              className={account.input}
            />
            <div className={account.iconContainer}>
              <Image
                className={account.logo}
                src={"/icons/att.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
          </div> */}

          <div className={account.upload_container}>
            <span className={account.title}>
              Bilhete de identidade ou passaporte
            </span>
            <input
              type="file"
              placeholder="Número de estudante"
              className={account.input}
              accept="image/*,.pdf"
            />
            <span className={account.icon}>
              <Image
                className={account.logo}
                src={"/icons/att.svg"}
                alt="ba2ck"
                width={35}
                height={35}
                priority
              />
            </span>
          </div>

          <div className={account.upload_container}>
            <span className={account.title}>
              Bilhete de identidade ou passaporte
            </span>
            <input
              type="file"
              placeholder="Número de estudante"
              className={account.input}
              accept="image/*,.pdf"
            />
            <span className={account.icon}>
              <Image
                className={account.logo}
                src={"/icons/att.svg"}
                alt="ba2ck"
                width={35}
                height={35}
                priority
              />
            </span>
          </div>

          <div className={account.upload_container}>
            <span className={account.title}>
              Bilhete de identidade ou passaporte
            </span>
            <input
              type="file"
              placeholder="Número de estudante"
              className={account.input}
              accept="image/*,.pdf"
            />
            <span className={account.icon}>
              <Image
                className={account.logo}
                src={"/icons/att.svg"}
                alt="ba2ck"
                width={35}
                height={35}
                priority
              />
            </span>
          </div>
        </div>
        <div className={account.cta}>
          <PurpleButton
            description="Continuar"
            redirect="/home"
          ></PurpleButton>
        </div>
      </div>
    </>
  );
}

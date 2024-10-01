import explore from "../styles/explore.module.css";
import Image from "next/image";
import {PurpleButton2} from "@/components/buttons";

export default function Explore() {
  return (
    <>
      <div className={explore.container}>
        <div className={explore.top}>
          <h2>Selecione uma opção</h2>
        </div>
        <div className={explore.options}>
          <div className={explore.op1}>
            <div className={explore.first}>
              <div className={explore.country}>
                <p>Angola </p>
              </div>
              <div className={explore.check}></div>
            </div>
            <div className={explore.second}>
              <div className={explore.title}>
                <p>IEM - Instituições de Ensino Médio</p>
              </div>
              <div className={explore.available}>
                <p>
                  <span className={explore.countIem}>980</span> Disponíveis
                </p>
              </div>
            </div>
          </div>
          <div className={explore.op2}>
            <div className={explore.first}>
              <div className={explore.country}>
                <p>Angola, Brasil </p>
              </div>
              <div className={explore.check}></div>
            </div>
            <div className={explore.second}>
              <div className={explore.title}>
                <p>IEM - Instituições de Ensino Médio</p>
              </div>
              <div className={explore.available}>
                <p>
                  <span className={explore.countIem}>230</span> Disponíveis
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={explore.info}>
          <div className={explore.content}>
            <h4>Explore opções de ensino superior!</h4>
            <div className={explore.check1}>
              <Image
                className={explore.logo}
                src={"/icons/done.svg"}
                alt="done"
                width={30}
                height={60}
                priority
              />
              <p>Especialização</p>
            </div>
            <div className={explore.check1}>
              <Image
                className={explore.logo}
                src={"/icons/done.svg"}
                alt="done"
                width={30}
                height={60}
                priority
              />
              <p>Oportunidades de Carreira</p>
            </div>
            <div className={explore.check1}>
              <Image
                className={explore.logo}
                src={"/icons/done.svg"}
                alt="done"
                width={30}
                height={60}
                priority
              />
              <p>Pesquisa e Inovação</p>
            </div>
            <div className={explore.check1}>
              <Image
                className={explore.logo}
                src={"/icons/done.svg"}
                alt="done"
                width={30}
                height={60}
                priority
              />
              <p>Experiência Universitária</p>
            </div>
            <div className={explore.check1}>
              <Image
                className={explore.logo}
                src={"/icons/done.svg"}
                alt="done"
                width={30}
                height={60}
                priority
              />
              <p>Desenvolvimento Profissional</p>
            </div>
          </div>
          <div className={explore.btn}>
            <PurpleButton2
              description="Explorar"
              redirect="/search"
            ></PurpleButton2>
          </div>
        </div>
      </div>
    </>
  );
}

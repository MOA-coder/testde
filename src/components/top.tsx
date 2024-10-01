import Image from "next/image";
import top from "../styles/cards.module.css";
import Link from "next/link"

interface ButtonProps {
  information: string;
  pagina?: string;
}


export default function Top({ information, pagina }: ButtonProps) {
  return (
    <>
      <div className={top.top}>
        <Link href={pagina || "#"} className={top.icon}>
          <Image
            className={top.arrow}
            src={"/icons/Left.svg"}
            alt="ba2ck"
            width={20}
            height={20}
            priority
          />
        </Link>
        <p>{information}</p>
        <div className={top.menu}>
          <div className={top.inner}>
            <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export function Top2({ information }:ButtonProps) {
  return (
    <>
      <div className={top.top}>
        <div className={top.icon}>
          <Image
            className={top.avatar}
            src={"/avatars/ana.svg"}
            alt="ba2ck"
            width={30}
            height={30}
            priority
          />
        </div>
        <p>{information}</p>
        <div className={top.menu}>
          <div className={top.inner}>
            <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
          </div>
        </div>
      </div>
    </>
  );
}

import menu from "@/styles/cards.module.css";
import Link from "next/link";

export default function Menu(){
    return (
        <div className={menu.menu_f}>
          <Link href="/home" className={menu.item}>
            <div className={menu.in}>
              <div className={`${menu.inner} ${menu.active}`}>
                <img src="img/icons/menu/home.svg" alt="" width="23" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </div>
              <div className={menu.txt}>
                <p>Início</p>
              </div>
            </div>
          </Link>
          <div className={menu.item}>
            <div className={menu.in}>
              <div className={menu.inner}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  style={{ color: "#878787" }}
                  fill="currentColor"
                  className="bi bi-credit-card-2-back"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h12V4a1 1 0 0 0-1-1H2zm0 11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5H1v5z" />
                </svg>
              </div>
              <div className={menu.txt}>
                <p>Cartões</p>
              </div>
            </div>
          </div>
          <div className={menu.item}>
            <div className={menu.in}>
              <div className={menu.inner}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  style={{ color: "#878787" }}
                  fill="currentColor"
                  className="bi bi-person-lines-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 9.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm-2 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm3.5-5a2 2 0 1 0-3.998.2A4.99 4.99 0 0 0 2 8c0 1.676.84 3.19 2.105 4H9.9c1.266-.81 2.105-2.324 2.105-4a4.99 4.99 0 0 0-3.004-4.8A2 2 0 0 0 10 4.5zM9.007 4a1 1 0 1 1-1.414-1.414A4 4 0 0 1 12.485 7H1.515a3 3 0 0 1 5.863 0H9.007zm-.5 1.75a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0v-3.5a.5.5 0 0 1 .5-.5zm3 0a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0v-3.5a.5.5 0 0 1 .5-.5z" />
                </svg>
              </div>
              <div className={menu.txt}>
                <p>Perfil</p>
              </div>
            </div>
          </div>
          <div className={menu.item}>
            <div className={menu.in}>
              <div className={menu.inner}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  style={{ color: "#878787" }}
                  fill="currentColor"
                  className="bi bi-gear"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a1 1 0 0 1 1 1v1.236a3.992 3.992 0 0 1 1.366.42l.919-.919a1 1 0 1 1 1.414 1.414l-1.415 1.415a3.992 3.992 0 0 1 0 1.586l1.415 1.415a1 1 0 0 1-1.414 1.414l-.919-.919a3.992 3.992 0 0 1-1.366.42V12a1 1 0 1 1-2 0v-1.236a3.992 3.992 0 0 1-1.366-.42l-.919.919a1 1 0 0 1-1.414-1.414l1.415-1.415a3.992 3.992 0 0 1 0-1.586L3.232 5.682a1 1 0 0 1 1.414-1.414l.919.919A3.992 3.992 0 0 1 8 5V4a1 1 0 0 1 1-1zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
              </div>
              <div className={menu.txt}>
                <p>Configurações</p>
              </div>
            </div>
          </div>
        </div>
    );
}
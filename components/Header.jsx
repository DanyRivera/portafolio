import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faImages, faUser, faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/Header.module.css";

const Header = () => {

  const [mostrar, setMostrar] = useState(false);

  return (
    <header>

      <div className={`${mostrar && `hidden`} w-full fixed bottom-0 px-8 py-5 shadow-inner bg-slate-500`}>

        <div className="flex justify-between items-center ">
          <div>
            <h1 className="font-poppins font-normal text-3xl">Dany Rivera</h1>
          </div>

          <button
            onClick={() => setMostrar(true)}
          >
            <FontAwesomeIcon className="w-7" icon={faBars} />
          </button>
        </div>

      </div>

      <div className={`${mostrar && styles.mostrarAnimacion} hidden w-full fixed bottom-0 px-8 py-5 shadow-inner bg-slate-500`}>

        <div className={`w-full`}>
          <div className="flex justify-between items-center w-full py-8">

            <div className="flex flex-col items-center">
              <FontAwesomeIcon className="w-9" icon={faImages} />
              <p className="text-[15px]">Projects</p>
            </div>

            <div className="flex flex-col items-center">
              <FontAwesomeIcon className="w-7" icon={faUser} />
              <p className="text-[15px]">About</p>
            </div>

            <div className="flex flex-col items-center">
              <FontAwesomeIcon className="w-7" icon={faEnvelope} />
              <p className="text-[15px]">Contact</p>
            </div>

          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setMostrar(false)}
            >
              <FontAwesomeIcon className="w-5 mb-3" icon={faXmark} />
            </button>
          </div>

        </div>
      </div>


    </header>

  )
}

export default Header
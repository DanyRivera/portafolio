import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faImages, faUser, faEnvelope, faXmark, faL } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/Header.module.css";

const Header = () => {

  const [mostrar, setMostrar] = useState(false);
  const [mostrarNav, setMostrarNav] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY >= 100) {
        setMostrarNav(true);
      } else {
        setMostrarNav(false);
      }
      // console.log(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

  }, [mostrarNav])

  return (
    <header>

      <div className={`${mostrar && `hidden`} md:hidden w-full bg-tertiary fixed z-10 bottom-0 px-8 py-5 shadow-inner`}>

        <div className="flex justify-between items-center ">
          <div>
            <p className="font-poppins font-normal text-3xl hover:text-primary cursor-pointer">Dany Rivera</p>
          </div>

          <button
            onClick={() => setMostrar(!mostrar)}
            className="cursor-pointer hover:text-primary"
          >
            <FontAwesomeIcon className="w-7" icon={faBars} />
          </button>
        </div>

      </div>

      <div className={`${mostrar && styles.animacion} md:hidden hidden w-full fixed z-10 bg-tertiary bottom-0 px-8 py-5 shadow-inner`}>

        <div className={`w-full`}>
          <div className="grid grid-cols-3 items-center w-full py-8">

            <div className="flex flex-col items-center text-secondary hover:text-primary cursor-pointer">
              <FontAwesomeIcon className="w-9" icon={faImages} />
              <p className="text-[15px]">Projects</p>
            </div>

            <div className="flex flex-col items-center text-secondary hover:text-primary cursor-pointer">
              <FontAwesomeIcon className="w-7" icon={faUser} />
              <p className="text-[15px]">About</p>
            </div>

            <div className="flex flex-col items-center text-secondary hover:text-primary cursor-pointer">
              <FontAwesomeIcon className="w-7" icon={faEnvelope} />
              <p className="text-[15px]">Contact</p>
            </div>

          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setMostrar(!mostrar)}
              className="hover:text-primary cursor-pointer"
            >
              <FontAwesomeIcon className="w-5 mb-3" icon={faXmark} />
            </button>
          </div>

        </div>
      </div>

      <div className={`${mostrarNav && `${styles.mostrarBarra} bg-tertiary text-secondary shadow-2xl`} ${styles.nav} text-tertiary absolute hidden md:flex py-12 justify-between items-center z-10 w-full px-64`}>

        <div>
          <p className="font-poppins font-medium text-[20px] cursor-pointer">Dany Rivera</p>
        </div>

        <nav className="flex gap-16">
          <a className="cursor-pointer font-medium text-[18px]">Home</a>
          <a className="cursor-pointer font-medium text-[18px]">About</a>
          <a className="cursor-pointer font-medium text-[18px]">Projects</a>
          <a className="cursor-pointer font-medium text-[18px]">Contact</a>
        </nav>

      </div>

    </header>

  )
}

export default Header
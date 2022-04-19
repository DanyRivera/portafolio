import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (

    <footer className="bg-primary px-8 py-16 text-tertiary">

      <div className="contenedor font-poppins md:grid md:grid-cols-3 items-center">

        <div className="mb-14 text-white">
          <p className="font-bold text-4xl">Dany</p>
          <p className="text-[16px] mt-2">FrontEnd React Developer</p>
        </div>

        <div className="flex flex-col gap-10 mb-14 md:flex-row">
          <p className="text-[17px]">Projects</p>
          <p className="text-[17px]">About</p>
          <p className="text-[17px]">Contact</p>
        </div>

        <nav className="flex justify-between px-16 mb-16 ">
          <FontAwesomeIcon className="w-12" icon={faInstagram} />
          <FontAwesomeIcon className="w-12" icon={faGithub} />
          <FontAwesomeIcon className="w-12" icon={faTwitter} />
        </nav>

      </div>

      <div className="text-center">
        <p className="text-[16px]">&copy; DanyRivera. All rigth reserved</p>
      </div>

    </footer>

  )
}

export default Footer
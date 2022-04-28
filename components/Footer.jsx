import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (

    <footer className="bg-primary px-8 py-20 text-tertiary">

      <div className="contenedor font-poppins md:grid md:grid-cols-3 items-center">

        <div className="mb-14 text-white">
          <p className="font-bold text-4xl">Dany</p>
          <p className="text-[16px] mt-2">FrontEnd React Developer</p>
        </div>

        <div className="flex flex-col gap-10 mb-14 md:flex-row">
          <Link href="/about">
            <p className="text-[17px] cursor-pointer">About</p>
          </Link>
          <Link href="/projects">
            <p className="text-[17px] cursor-pointer">Projects</p>
          </Link>
          <Link href="/contact">
            <p className="text-[17px] cursor-pointer">Contact</p>
          </Link>
        </div>

        <nav className="flex justify-between px-16 mb-16 ">

          <Link href="https://www.instagram.com/luis_daniel_riv/">
            <a
              target="_blank"
              // ref={ref => this.noreferrer = ref}
              // ref="noreferrer"
            >
              <FontAwesomeIcon className="w-12" icon={faInstagram} />
            </a>
          </Link>

          <Link href="https://github.com/DanyRivera">
            <a
              target="_blank"
              // ref={ref => this.noreferrer = ref}
              // ref="noreferrer"
            >
              <FontAwesomeIcon className="w-12" icon={faGithub} />
            </a>
          </Link>

          <Link href="https://twitter.com/luis_daniel_riv">
            <a
              target="_blank"
              // ref={ref => this.noreferrer = ref}
              // ref="noreferrer"
            >
              <FontAwesomeIcon className="w-12" icon={faTwitter} />
            </a>
          </Link>

        </nav>

      </div>

      <div className="text-center">
        <p className="text-[16px]">Created 100% By Dany Rivera | &copy; 2022 All rights reserved.</p>
      </div>

    </footer>

  )
}

export default Footer
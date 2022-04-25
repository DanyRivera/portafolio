import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (

    <section className="contenedor pb-40 mx-auto">

      <h2 className="heading">Contact Me</h2>

      <div className="pl-14 md:pl-0 grid gap-20 items-center md:grid-cols-2 lg:grid-cols-3">

        <div className="flex items-center gap-10">
          <FontAwesomeIcon className="w-32 text-primary" icon={faEnvelope} />
          <div>
            <p className="text-5xl mb-1 font-inter font-medium degradado">Email</p>
            <Link href="mailto:danyy.dev@gmail.com">
              <a
                className="text-2xl md:text-3xl font-poppins text-secondary"
                target="_blank"
                rel="noreferrer"
              >danyy.dev@gmail.com</a>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <FontAwesomeIcon className="w-32 text-primary" icon={faTwitter} />
          <div>
            <p className="text-5xl mb-1 font-inter font-medium degradado">Twitter</p>
            <Link href="https://twitter.com/luis_daniel_riv">
              <a
                className="text-2xl md:text-3xl font-poppins text-secondary"
                target="_blank"
                rel="noreferrer"
              >@luis_daniel_riv</a>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <FontAwesomeIcon className="w-32 text-primary" icon={faInstagram} />
          <div>
            <p className="text-5xl pb-1 font-inter font-medium degradado">Instagram</p>
            <Link href="https://www.instagram.com/luis_daniel_riv/">
              <a
                className="text-2xl md:text-3xl font-poppins text-secondary"
                target="_blank"
                rel="noreferrer"
              >@luis_daniel_riv</a>
            </Link>
          </div>
        </div>

      </div>

      <div className="mb-7 flex justify-center mt-32">

        <Link
          href="/contact"
        >
          <button
            className="border-secondary border py-5 px-12 text-secondary font-poppins font-medium rounded-lg mt-7 hover:bg-[#00000013] hover:border-[#0000] transition-all "
          >
            More Options
          </button>

        </Link>

      </div>

    </section>

  )
}

export default Contact
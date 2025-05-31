import Layout from "../components/Layout";
import Link from "next/link";
import Formulario from "../components/Formulario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faTwitter, faWhatsapp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const contact = () => {
  return (


    <Layout
      pagina="Contact"
    >

      <h2 className="heading pt-20 md:pt-60">Contact Me</h2>

      <div className="flex justify-center w-full contenedor pb-24">

        {/* <Formulario /> */}

        <div className="flex flex-col gap-10">


          <div className="flex flex-col md:flex-row gap-20 my-14 pl-28 md:justify-center md:pl-0">

            <div className="flex items-center gap-5 md:gap-10">
              <FontAwesomeIcon className="w-20 text-primary" icon={faWhatsapp} />
              <div>
                <p className="text-4xl md:text-5xl mb-1 font-inter font-medium degradado">WhatsApp</p>
                <Link href="https://api.whatsapp.com/send?phone=+522227593096">
                  <a
                    className="text-2xl md:text-3xl font-poppins text-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >+52 222 759 3096</a>
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-5 md:gap-10">
              <FontAwesomeIcon className="w-16 text-primary" icon={faLocationDot} />
              <div>
                <p className="text-4xl md:text-5xl mb-1 font-inter font-medium degradado">Location</p>
                <p className="text-2xl md:text-3xl font-poppins text-secondary">Puebla City, México.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 md:gap-10 col-start-1 col-end-3">
              <FontAwesomeIcon className="w-24 text-primary" icon={faEnvelope} />
              <div>
                <p className="text-4xl md:text-5xl mb-1 font-inter font-medium degradado">Email</p>
                <Link href="mailto:danyy.dev@gmail.com">
                  <a
                    className="text-2xl md:text-3xl font-poppins text-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >danyy.dev@gmail.com</a>
                </Link>
              </div>
            </div>

          </div>


          <div className="mb-32">

            <h2 className="heading">Social-Media</h2>

            <div className="flex flex-col md:flex-row md:justify-center  gap-20 pl-28 md:pl-0">

              <div className="flex items-center gap-5 md:gap-10">
                <FontAwesomeIcon className="w-20 text-primary" icon={faInstagram} />
                <div>
                  <p className="text-4xl md:text-5xl pb-1 font-inter font-medium degradado">Instagram</p>
                  <Link href="https://www.instagram.com/dany_rivera_gl/">
                    <a
                      className="text-2xl md:text-3xl font-poppins text-secondary"
                      target="_blank"
                      rel="noreferrer"
                    >@dany_rivera_gl</a>
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-5 md:gap-10">
                <FontAwesomeIcon className="w-20 text-primary" icon={faTwitter} />
                <div>
                  <p className="text-4xl md:text-5xl mb-1 font-inter font-medium degradado">Twitter</p>
                  <Link href="https://twitter.com/luis_daniel_riv">
                    <a
                      className="text-2xl md:text-3xl font-poppins text-secondary"
                      target="_blank"
                      rel="noreferrer"
                    >@luis_daniel_riv</a>
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-5 md:gap-10">
                <FontAwesomeIcon className="w-20 text-primary" icon={faGithub} />
                <div>
                  <p className="text-4xl md:text-5xl mb-1 font-inter font-medium degradado">GitHub</p>
                  <Link href="https://github.com/DanyRivera">
                    <a
                      className="text-2xl md:text-3xl font-poppins text-secondary"
                      target="_blank"
                      rel="noreferrer"
                    >@DanyRivera</a>
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-5 md:gap-10">
                <FontAwesomeIcon className="w-20 text-primary" icon={faLinkedin} />
                <div>
                  <p className="text-4xl md:text-5xl mb-1 font-inter font-medium degradado">LinkedIn</p>
                  <Link href="https://www.linkedin.com/in/dany-rivera/">
                    <a
                      className="text-2xl md:text-3xl font-poppins text-secondary"
                      target="_blank"
                      rel="noreferrer"
                    >@DanyRivera</a>
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </Layout>

  )
}

export default contact
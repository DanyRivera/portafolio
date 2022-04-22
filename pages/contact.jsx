import Layout from "../components/Layout";
import Formulario from "../components/Formulario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faTwitter, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons"

const contact = () => {
  return (

    <Layout
      pagina="Contact"
    >

      <h2 className="heading pt-20 md:pt-60">Contact Me</h2>

      <div className="md:grid md:grid-cols-2 contenedor">

        <Formulario />

        <div>

          <div>

            <div className="flex flex-col items-left gap-14 my-14 pl-28 md:grid md:grid-cols-2 md:pl-0">

              <div className="flex items-center gap-5 md:gap-10">
                <FontAwesomeIcon className="w-20 text-primary" icon={faEnvelope} />
                <div>
                  <p className="text-4xl md:text-5xl mb-1 font-inter font-medium degradado">Email</p>
                  <p className="text-2xl md:text-3xl font-poppins text-secondary">Correo@correo.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 md:gap-10">
                <FontAwesomeIcon className="w-20 text-primary" icon={faWhatsapp} />
                <div>
                  <p className="text-4xl md:text-5xl mb-1 font-inter font-medium degradado">WhatsApp</p>
                  <p className="text-2xl md:text-3xl font-poppins text-secondary">+52 222 222 2222</p>
                </div>
              </div>

              <div className="flex items-center gap-5 md:gap-10">
                <FontAwesomeIcon className="w-16 text-primary" icon={faLocationDot} />
                <div>
                  <p className="text-4xl md:text-5xl mb-1 font-inter font-medium degradado">Location</p>
                  <p className="text-2xl md:text-3xl font-poppins text-secondary">Puebla City, México.</p>
                </div>
              </div>

            </div>

          </div>

          <div className="mb-32">

            <h2 className="heading">Social-Media</h2>

            <div className="flex flex-col items-left gap-14 pl-28 md:grid md:grid-cols-2 md:pl-0">

              <div className="flex items-center gap-5 md:gap-10">
                <FontAwesomeIcon className="w-20 text-primary" icon={faInstagram} />
                <div>
                  <p className="text-4xl md:text-5xl pb-1 font-inter font-medium degradado">Instagram</p>
                  <p className="text-2xl md:text-3xl font-poppins text-secondary">@User</p>
                </div>
              </div>

              <div className="flex items-center gap-5 md:gap-10">
                <FontAwesomeIcon className="w-20 text-primary" icon={faTwitter} />
                <div>
                  <p className="text-4xl md:text-5xl mb-1 font-inter font-medium degradado">Twitter</p>
                  <p className="text-2xl md:text-3xl font-poppins text-secondary">@User</p>
                </div>
              </div>

              <div className="flex items-center gap-5 md:gap-10">
                <FontAwesomeIcon className="w-16 text-primary" icon={faGithub} />
                <div>
                  <p className="text-4xl md:text-5xl mb-1 font-inter font-medium degradado">GitHub</p>
                  <p className="text-2xl md:text-3xl font-poppins text-secondary">@User</p>
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
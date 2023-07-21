import Link from "next/link";
import Project from "./Project";
import papeRg from "../public/img/pape.webp";
import classroomClon from "../public/img/classroom_clon.png"
import cotizadorViajesImg from "../public/img/cotizador_viajes.png";

const Projects = () => {
    return (

        <main className="contenedor pb-20">

            <h2 className="heading">Projects</h2>

            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 px-4">

                <Project
                    img={classroomClon}
                    nombre="ClassRoom Clon"
                    tailwind={false}
                    react={true}
                    next={false}
                    gitHub="https://github.com/DanyRivera/catstagram_next"
                    link="https://catstagram.vercel.app"
                />

                <Project
                    img={papeRg}
                    nombre="Papelería RG"
                    tailwind={true}
                    react={true}
                    next={true}
                    node={true}
                    express={true}
                    gitHub="https://github.com/DanyRivera/paperg_frontend"
                    link="https://www.papeleriarg.com"
                />

                <Project
                    img={cotizadorViajesImg}
                    nombre="Cotizador de Viajes"
                    tailwind={true}
                    react={true}
                    next={false}
                    gitHub="https://github.com/DanyRivera/cotizador_viajes_react"
                    link="https://cotizador-viajes-vite.netlify.app/"
                />

            </div>

            <div className="mb-7 flex justify-center md:justify-end">
                <Link
                    href="/projects"
                >
                    <button
                        className="border-secondary border py-5 px-12 text-secondary font-poppins font-medium rounded-lg mt-7 hover:bg-[#00000013] hover:border-[#0000] transition-all "
                    >View More</button>
                </Link>
            </div>

        </main>

    )
}

export default Projects
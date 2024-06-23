import Link from "next/link";
import Project from "./Project";

const Projects = () => {
    return (

        <main className="p-20">

            <h2 className="heading">Projects</h2>

            <div className="md:grid md:grid-cols-2 lg:grid-cols-4 ">

                <Project
                    img="/img/frogbox.webp"
                    nombre="Frogbox CRM"
                    tailwind={false}
                    react={false}
                    next={false}
                    laravel={true}
                    mysql={true}
                    gitHub=""
                    link="https://www.frogbox.com"
                />

                <Project
                    img="/img/pomme.webp"
                    nombre="Pomme Hospedajes"
                    tailwind={true}
                    react={true}
                    next={false}
                    gitHub="https://github.com/DanyRivera/pomme_zacatlan"
                    link="https://pommezacatlan.com"
                />

                <Project
                    img="/img/classroom_clon.png"
                    nombre="ClassRoom Clon"
                    tailwind={false}
                    react={true}
                    next={false}
                    gitHub="https://github.com/DanyRivera/classroom_clon_react"
                    link="https://classroom-clon-vite.netlify.app/clases"
                />

                <Project
                    img="/img/cotizador_viajes.png"
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
                        className="border-secondary border py-5 px-12 text-secondary font-poppins font-medium rounded-lg mt-7 mr-14 hover:bg-[#00000013] hover:border-[#0000] transition-all "
                    >View More</button>
                </Link>
            </div>

        </main>

    )
}

export default Projects
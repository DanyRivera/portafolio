import Project from "./Project";
import netflixClonImg from "../public/img/netflix_clon.png";
import guitarlaClonImg from "../public/img/guitarla_clon.png";
import cotizadorViajesImg from "../public/img/cotizador_viajes.png";

const Projects = () => {
    return (

        <main className="contenedor pb-20">

            <h2 className="heading">Projects</h2>

            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 px-4">

                <Project
                    img={netflixClonImg}
                    nombre="Netflix Clon"
                    tailwind={true}
                    react={true}
                    next={true}
                    gitHub="https://github.com/DanyRivera/netflix_clon_next"
                    link="https://netflix-clon-next.vercel.app/"
                />

                <Project
                    img={guitarlaClonImg}
                    nombre="GuitarLA Clon"
                    tailwind={false}
                    react={true}
                    next={true}
                    gitHub="https://github.com/DanyRivera/guitarla_next"
                    link="https://guitarla-next-sand.vercel.app/"
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
                <button
                    className="border-secondary border py-5 px-12 text-secondary font-poppins font-medium rounded-lg mt-7 hover:bg-[#00000013] hover:border-[#0000] transition-all "
                >View More</button>
            </div>

        </main>

    )
}

export default Projects
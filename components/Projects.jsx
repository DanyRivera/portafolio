import Project from "./Project";
import netflixClonImg from "../public/img/netflix_clon.png";
import guitarlaClonImg from "../public/img/guitarla_clon.png";
import cotizadorViajesImg from "../public/img/cotizador_viajes.png";

const Projects = () => {
    return (

        <main className="contenedor pb-20">

            <h2 className="heading">Projects</h2>

            <div className="grid grid-cols-3 px-4">

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

        </main>

    )
}

export default Projects
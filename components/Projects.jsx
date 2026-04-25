import Link from "next/link";
import Project from "./Project";

const Projects = () => {
    return (

        <main className="p-20">

            <h2 className="heading">Projects</h2>

            <div className="md:grid md:grid-cols-2 lg:grid-cols-5 lg:gap-10">

                <Project
                    img="/img/barber-system.png"
                    nombre="Sistema para Barberías con IA"
                    react={true}
                    tailwind={true}
                    node={true}
                    express={true}
                    gitHub="https://github.com/DanyRivera/barber_system_frontend"
                    link="https://barber-system.netlify.app"
                />

                <Project
                    img="/img/mp-klanet.png"
                    nombre="Klanet Marketplace"
                    svelte={true}
                    gitHub=""
                    link="https://www.klanet.mx"
                />

                <Project
                    img="/img/admin-klanet.png"
                    nombre="Klanet Admin"
                    svelte={true}
                    gitHub=""
                    link="https://admin.klanet.mx"
                />

                <Project
                    img="/img/my-klanet.png"
                    nombre="My Klanet"
                    svelte={true}
                    gitHub=""
                    link="https://www.myklanet.com"
                />


                <Project
                    img="/img/irpm.webp"
                    nombre="Punto de Venta"
                    tailwind={true}
                    react={true}
                    next={true}
                    gitHub=""
                    link="https://www.papeleriamargo.com/"
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
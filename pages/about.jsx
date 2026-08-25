import Link from "next/link";
import Layout from "../components/Layout";
import Skills from "../components/Skills";

const about = () => {
    return (
        <Layout
            pagina="About"
        >

            <section>
                <h2 className="heading pt-20 pb-14 md:pt-40">About</h2>

                <div className="px-10 mb-20">
                    <p className="text-[20px] leading-relaxed tracking-wider font-inter md:text-[22px] md:w-3/4 md:mx-auto text-justify">
                        I’m Dany Rivera, a Frontend Developer and Information Technology student based in Puebla, Mexico. I started learning web development in 2020 and have since turned that interest into professional experience building and maintaining real-world digital products.

                        I currently work as a Frontend Developer at Klanet, where I contribute to three web platforms using SvelteKit: Klanet Marketplace, Klanet Admin, and My Klanet. Previously, I worked at CAPMEGA developing and maintaining web solutions with Laravel, MySQL, JavaScript, and WordPress.

                        Alongside my professional work, I build independent projects using React, Next.js, Tailwind CSS, and Supabase. I enjoy creating responsive, intuitive interfaces, solving technical problems, and continuously improving the quality of the products I build.

                        I’m currently open to new frontend opportunities where I can contribute to real products, strengthen my React and Next.js expertise, and continue growing as part of a development team.
                    </p>
                </div>

                <div className="flex justify-center pb-20">
                    <a
                        href="/cv.pdf"
                        download="CV - Luis Daniel Rivera González"
                        className="border-secondary border py-5 px-12 text-secondary font-poppins font-medium rounded-lg mt-7 hover:bg-[#00000013] hover:border-[#0000] transition-all "
                    >Download Resume</a>
                </div>

                <Skills />

            </section>

        </Layout>
    )
}

export default about
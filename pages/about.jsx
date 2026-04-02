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
                        My name is Luis Daniel Rivera González, a Web Developer from Mexico and a student passionate about technology. I started my journey as a developer in mid-2020, and since then, I have been constantly learning and improving my skills through practice and by building real-world projects.

                        Throughout this time, I have developed multiple websites, including this portfolio, which was fully designed and built by me. Each project has helped me strengthen my knowledge in technologies like React, Next.js, and modern web development practices. You can explore some of my work on the <Link href="/projects"><span className="degradado cursor-pointer">projects page</span></Link>.

                        I consider myself a self-taught, organized, and dedicated person who enjoys solving problems and continuously learning new things. I also value teamwork and believe that collaboration is key to building better products and growing as a developer.

                        I&apos;m always curious about how great applications and websites are built, which motivates me to keep improving and creating meaningful digital experiences.
                    </p>
                </div>

                <div className="flex justify-center pb-20">
                    <a
                        href="/cv.pdf"
                        download="CV - Luis Daniel Rivera González"
                        className="border-secondary border py-5 px-12 text-secondary font-poppins font-medium rounded-lg mt-7 hover:bg-[#00000013] hover:border-[#0000] transition-all "
                    >Download CV</a>
                </div>

                <Skills />

            </section>

        </Layout>
    )
}

export default about
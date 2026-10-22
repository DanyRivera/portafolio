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
                        I’m Dany Rivera, a Software Developer and Information Technology Engineering student based in Puebla, Mexico. I enjoy turning ideas into practical applications, solving problems, and understanding how different parts of a system work together.

                        I’m always looking to deepen my knowledge, explore new technologies, and build useful, intuitive software. I enjoy working with others, sharing ideas, and learning from different perspectives. I value curiosity, open communication, and the opportunity to grow alongside the people I work with.
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
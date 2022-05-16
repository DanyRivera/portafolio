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
                    <p
                        className="text-[20px] leading-relaxed tracking-wider font-inter md:text-[22px] md:w-3/4 md:mx-auto"
                    >
                        My name is Luis Daniel, I&apos;m from Mexico, I&apos;m a FrontEnd developer in constant learning and a student. I started training as a developer in mid-2020, along the way, I gained experience through practice and developing different websites like this one, developed 100% by me and among others that you can see in the <Link href="/projects" ><span className="degradado cursor-pointer">projects page</span></Link>, I&apos;m passionate about technology and I&apos;m always struck by how great apps and websites were created, I consider myself organized, self-taught and I like to work in team.
                    </p>
                </div>

                <div className="flex justify-center pb-20">
                        <a
                            href="/cv.pdf"
                            download="CV-Dany-Rivera"
                            className="border-secondary border py-5 px-12 text-secondary font-poppins font-medium rounded-lg mt-7 hover:bg-[#00000013] hover:border-[#0000] transition-all "
                        >Download CV</a>
                </div>

                <Skills />

            </section>

        </Layout>
    )
}

export default about
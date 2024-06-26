import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ImagenHeader from "../public/img/header.svg"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout
      pagina="Home"
    >

      <div className={`${styles.hero} relative h-screen w-full py-32`}>

        <div className="h-screen px-20 md:contenedor md:grid md:grid-cols-2 md:gap-60 md:mt-44 ">

          <div className="flex flex-col justify-center mt-14 md:mt-0 md:justify-start">

            <p className={`${styles.animacion} text-tertiary font-inter font-bold text-7xl`}>Hi, I&apos;m Dany</p>

            <p className={`${styles.animacion} text-tertiary font-inter font-light text-4xl`}>Web Developer</p>

            <p className={`${styles.animacion} text-tertiary font-inter font-medium my-10 uppercase text-3xl tracking-wider leading-loose`}>
              Junior Frontend Developer, I&apos;ve experience working on <span className="font-bold">React, Next.js, Laravel & MySQL</span> trying to do my best!
            </p>

            <Link href="/contact" >
              <button
                className={`hidden md:block ${styles.efecto} ${styles.animacion} mt-8 border-2 text-tertiary py-5 border-tertiary rounded-lg md:w-50 md:uppercase`}
              >Contact Me</button>
            </Link>

          </div>

          <div className={`${styles.animacionImg} hidden md:block`}>
            <Image layout="responsive" width={50} height={35} src={ImagenHeader} alt="Imagen Header" />
          </div>

        </div>


        <svg className="absolute bottom-0 w-full h-[250px]" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,160L80,165.3C160,171,320,181,480,165.3C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

      </div>

      <Skills />

      <Projects />

      <Contact />

    </Layout>
  )
}

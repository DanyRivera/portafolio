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

      <div
        className={`${styles.hero} relative flex min-h-screen w-full items-center overflow-hidden`}
      >
        <div
          className="
      mx-auto grid w-[88%] max-w-[1300px]
      items-center gap-16
      pb-36 pt-28
      md:grid-cols-2 md:gap-24 md:pb-44
    "
        >
          <div className="flex flex-col items-start">
            <p
              className={`
          ${styles.animacion}
          mb-4 font-inter
          text-[17px] font-medium text-tertiary
          md:text-[19px]
        `}
            >
              Hi, I&apos;m Dany Rivera
            </p>

            <h1
              className={`
          ${styles.animacion}
          font-inter font-bold text-tertiary
          text-[48px] leading-[1.05]
          md:text-[64px]
          lg:text-[72px]
        `}
            >
              Web Developer
            </h1>

            <p
              className={`
          ${styles.animacion}
          mt-7 max-w-[650px]
          font-inter font-normal text-tertiary
          text-[17px] leading-[1.7]
          md:text-[19px]
        `}
            >
              I build responsive, user-focused web applications with React and
              Next.js, backed by professional experience working on real-world
              digital products.
            </p>
            <Link href="/projects" passHref legacyBehavior>
              <a
                style={{
                  backgroundColor: "#ffffff",
                  color: "#299db7",
                }}
                className={`
      ${styles.animacion}
      mt-9 inline-flex items-center justify-center
      rounded-lg
      px-10 py-5
      font-inter text-[16px] font-semibold
      shadow-md
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl
      focus:outline-none focus:ring-2
      focus:ring-white focus:ring-offset-2
    `}
              >
                View My Work
              </a>
            </Link>
          </div>

          <div
            className={`
        ${styles.animacionImg}
        hidden items-center justify-center
        md:flex
      `}
          >
            <div className="w-full max-w-[540px]">
              <Image
                layout="responsive"
                width={604}
                height={526}
                src={ImagenHeader}
                alt="Frontend developer working on web applications"
                priority
              />
            </div>
          </div>
        </div>

        <svg
          className="absolute bottom-0 h-[140px] w-full md:h-[190px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          aria-hidden="true"
        >
          <path
            fill="#fff"
            d="M0,160L80,165.3C160,171,320,181,480,165.3C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L0,320Z"
          />
        </svg>
      </div>

      <Skills />

      <Projects />

      <Contact />

    </Layout>
  )
}

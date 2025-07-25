import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Projects.module.css";

const Project = ({ img, nombre, tailwind, react, next, node, express, laravel, mysql, gitHub, link }) => {
    return (

        <div className="flex flex-col justify-between card mx-auto px-6 mb-16 shadow-2xl">

            <div className="pt-10 imagen">
                <Image layout="responsive" width={250} height={150} src={img} alt="Img" />
            </div>

            <p className="my-6 font-inter font-bold tracking-wide text-4xl uppercase">{nombre}</p>

            {nombre == 'Frogbox CRM' && (
                <p className="my-6 font-inter tracking-wide text-xl ">In collaboration with:
                    <a href="https://www.linkedin.com/company/capmega/" target="_blank" rel="noreferrer" className="font-bold"> capmega.com</a>
                </p>
            )}

            {nombre == 'Punto de Venta' && (
                <p className="my-6 font-inter tracking-wide text-xl ">In collaboration with:
                    <a href="https://www.papeleriamargo.com" target="_blank" rel="noreferrer" className="font-bold"> papeleriamargo.com</a>
                </p>
            )}

            <div className="grid grid-cols-3 my-5">

                <div className="flex gap-3 items-center py-2">

                    <div className="w-7">
                        <Image layout="responsive" width={50} height={55} src="/img/html_icon.svg" alt="Html Logo" />
                    </div>

                    <p className="text-[15px] font-poppins font-medium">HTML</p>

                </div>

                <div className="flex gap-3 items-center py-2">

                    <div className="w-7">
                        <Image layout="responsive" width={50} height={55} src="/img/css_icon.svg" alt="Css Logo" />
                    </div>

                    <p className="text-[15px] font-poppins font-medium">CSS</p>

                </div>

                <div className="flex gap-3 items-center py-2">

                    <div className="w-7">
                        <Image layout="responsive" width={50} height={55} src="/img/js_icon.svg" alt="JavaSript Logo" />
                    </div>

                    <p className="text-[15px] font-poppins font-medium">JavaSript</p>

                </div>

                {tailwind && (
                    <div className="flex gap-3 items-center py-2">

                        <div className="w-7">
                            <Image layout="responsive" width={50} height={55} src="/img/tailwindcss_icon.svg" alt="Tailwind Logo" />
                        </div>

                        <p className="text-[15px] font-poppins font-medium">Tailwind</p>

                    </div>
                )}

                {react && (

                    <div className="flex gap-3 items-center py-2">

                        <div className="w-7">
                            <Image layout="responsive" width={50} height={55} src="/img/react_icon.svg" alt="React Logo" />
                        </div>

                        <p className="text-[15px] font-poppins font-medium">React</p>

                    </div>

                )}

                {next && (
                    <div className="flex gap-3 items-center py-2">

                        <div className="w-7">
                            <Image layout="responsive" width={50} height={55} src="/img/next_icon.svg" alt="Html Logo" />
                        </div>

                        <p className="text-[15px] font-poppins font-medium">Next.js</p>

                    </div>
                )}


                {node && (
                    <div className="flex gap-3 items-center py-2">

                        <div className="w-7">
                            <Image layout="responsive" width={50} height={55} src="/img/node_icon.png" alt="Html Logo" />
                        </div>

                        <p className="text-[15px] font-poppins font-medium">Node.js</p>

                    </div>
                )}

                {express && (
                    <div className="flex gap-3 items-center py-2">

                        <div className="w-7">
                            <Image layout="responsive" width={50} height={55} src="/img/express_icon.svg" alt="Html Logo" />
                        </div>

                        <p className="text-[15px] font-poppins font-medium">Express.js</p>

                    </div>
                )}

                {laravel && (
                    <div className="flex gap-3 items-center py-2">

                        <div className="w-7">
                            <Image layout="responsive" width={50} height={55} src="/img/laravel.png" alt="Html Logo" />
                        </div>

                        <p className="text-[15px] font-poppins font-medium">Laravel</p>

                    </div>
                )}

                {mysql && (
                    <div className="flex gap-3 items-center py-2">

                        <div className="w-7">
                            <Image layout="responsive" width={50} height={55} src="/img/mysql.webp" alt="Html Logo" />
                        </div>

                        <p className="text-[15px] font-poppins font-medium">MySQL</p>

                    </div>
                )}

            </div>

            <div className="pb-5">


                <Link href={gitHub} passHref >
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles.efecto1} flex gap-5 items-center justify-center px-10 border text-tertiary py-4 w-full font-poppins tracking-wide rounded-lg mb-5`}
                    >
                        <FontAwesomeIcon className="w-10" icon={faGithub} />
                        View Code
                    </a>
                </Link>

                <Link className="h-full" href={link} >
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles.efecto2} bg-primary py-4 block text-center px-10 w-full text-tertiary font-poppins tracking-wider rounded-lg mb-3 border`}
                    >View Demo</a>
                </Link>

            </div>


        </div>

    )
}

export default Project
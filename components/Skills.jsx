import Image from "next/image";
import Skill from "./Skill";
import htmlLogo from "../public/img/html_icon.svg";
import cssLogo from "../public/img/css_icon.svg";
import jsLogo from "../public/img/js_icon.svg";
import tailwindLogo from "../public/img/tailwindcss_icon.svg";
import reactLogo from "../public/img/react_icon.svg";
import nextLogo from "../public/img/next_icon.svg";
import nodeLogo from "../public/img/node_icon.png";
import expressLogo from "../public/img/express_icon.svg";
import gitLogo from "../public/img/logo.svg";

const Skills = () => {
    return (

        <section className="contenedor pb-28">

            <h2 className="heading">Skills</h2>

            <div className="md:grid md:grid-cols-3 lg:grid-cols-4">


                <Skill
                    logoImg={htmlLogo}
                    nombre="HTML"
                    width={50}
                    height={32}
                />

                <Skill
                    logoImg={cssLogo}
                    nombre="CSS"
                    width={50}
                    height={32}
                />

                <Skill
                    logoImg={jsLogo}
                    nombre="JavaScript"
                    width={50}
                    height={32}
                />

                <Skill
                    logoImg={tailwindLogo}
                    nombre="Tailwind Css"
                    width={50}
                    height={25}
                />

                <Skill
                    logoImg={reactLogo}
                    nombre="React.js"
                    width={80}
                    height={65}
                />

                <Skill
                    logoImg={nextLogo}
                    nombre="Next.js"
                    width={80}
                    height={65}
                />

                <Skill
                    logoImg={gitLogo}
                    nombre="Git"
                    width={75}
                    height={65}
                />

                <Skill
                    logoImg={expressLogo}
                    nombre="Express.js"
                    width={80}
                    height={65}
                />

                <Skill
                    logoImg={nodeLogo}
                    nombre="Node.js"
                    width={50}
                    height={55}
                />

            </div>

        </section>

    )
}

export default Skills
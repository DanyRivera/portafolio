import Image from "next/image";
import Card from "./Card";
import htmlLogo from "../public/img/html_icon.svg";
import cssLogo from "../public/img/css.svg";
import jsLogo from "../public/img/js_icon.svg";
import tailwindLogo from "../public/img/tailwind_icon.svg";
import reactLogo from "../public/img/react_icon.svg";
import nextLogo from "../public/img/next_icon.svg";
import gitLogo from "../public/img/logo.svg";

const Skills = () => {
    return (

        <section className="contenedor mb-20">

            <h2 className="text-center mb-20 text-6xl font-bold font-poppins">Skills</h2>

            <div className="md:grid md:grid-cols-3 lg:grid-cols-4">


                <Card
                    logoImg={htmlLogo}
                    nombre="HTML"
                    width={50}
                    height={25}
                />

                <Card
                    logoImg={cssLogo}
                    nombre="CSS"
                    width={50}
                    height={25}
                />

                <Card
                    logoImg={jsLogo}
                    nombre="JavaScript"
                    width={50}
                    height={25}
                />

                <Card
                    logoImg={tailwindLogo}
                    nombre="Tailwind Css"
                    width={50}
                    height={25}
                    paddingX={10}
                />

                <Card
                    logoImg={reactLogo}
                    nombre="React.js"
                    width={80}
                    height={50}
                />

                <Card
                    logoImg={nextLogo}
                    nombre="Next.js"
                    width={80}
                    height={50}
                />

                <Card
                    logoImg={gitLogo}
                    nombre="Git"
                    width={10}
                    height={9}
                    paddingX={10}
                />

            </div>

        </section>

    )
}

export default Skills
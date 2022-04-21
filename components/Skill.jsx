import Image from "next/image";

const Skill = ({logoImg, nombre, width, height}) => {

    return (

        <div className={`cursor-pointer w-80 mx-auto mb-14 py-10 shadow-2xl rounded-xl md:hover:scale-125 transition-all px-10`}>
            <Image layout="responsive" width={width} height={height} src={logoImg} alt={`Logo ${nombre}`} />
            <p className="text-center mt-5 font-inter font-normal tracking-widest">
                {nombre}
            </p>
        </div>

    )
}

export default Skill
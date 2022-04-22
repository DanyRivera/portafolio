import Layout from "../components/Layout";
import Project from "../components/Project";

const projects = () => {
  return (

    <Layout
      pagina="Projects"
    >

      <main>

        <h2 className="heading md:pt-48">Projects</h2>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 px-4">

          <Project
            img="/img/netflix_clon.png"
            nombre="Netflix Clon"
            tailwind={true}
            react={true}
            next={true}
            gitHub="https://github.com/DanyRivera/netflix_clon_next"
            link="https://netflix-clon-next.vercel.app/"
          />

          <Project
            img="/img/classroom_clon.png"
            nombre="ClassRoom Clon"
            tailwind={false}
            react={true}
            next={false}
            gitHub="https://github.com/DanyRivera/classroom_clon_react"
            link="https://classroom-clon-vite.netlify.app/clases"
          />

          <Project
            img="/img/cotizador_viajes.png"
            nombre="Cotizador de Viajes"
            tailwind={true}
            react={true}
            next={false}
            gitHub="https://github.com/DanyRivera/cotizador_viajes_react"
            link="https://cotizador-viajes-vite.netlify.app/"
          />

          <Project
            img="/img/aprender_tablas.png"
            nombre="Aprender las Tablas"
            tailwind={true}
            react={true}
            next={false}
            gitHub="https://github.com/DanyRivera/aprender_tablas_react"
            link="https://aprende-las-tablas.netlify.app/"
          />

          <Project
            img="/img/guitarla_clon.png"
            nombre="GuitarLA Clon"
            tailwind={false}
            react={true}
            next={true}
            gitHub="https://github.com/DanyRivera/guitarla_next"
            link="https://guitarla-next-sand.vercel.app/"
          />

          <Project
            img="/img/calculadora.png"
            nombre="Calculadora"
            tailwind={false}
            react={true}
            next={false}
            gitHub="https://github.com/DanyRivera/calculadora_react"
            link="https://calculadora-vite.netlify.app/"
          />

          <Project
            img="/img/citas_mascotas.png"
            nombre="Citas Mascotas"
            tailwind={false}
            react={true}
            next={false}
            gitHub="https://github.com/DanyRivera/citas_mascotas_react"
            link="https://citas-mascotas-vite.netlify.app/"
          />

          <Project
            img="/img/control_gastos.png"
            nombre="Control Gastos"
            tailwind={false}
            react={true}
            next={false}
            gitHub="https://github.com/DanyRivera/control_gastos_react"
            link="https://control-gastos-vite.netlify.app/"
          />

          <Project
            img="/img/cotizador_criptos.png"
            nombre="Cotizador Criptos"
            tailwind={false}
            react={true}
            next={false}
            gitHub="https://github.com/DanyRivera/cotizador_criptos_react"
            link="https://cotizador-criptos-vite.netlify.app/"
          />

          <Project
            img="/img/taqueria.png"
            nombre="Taqueria"
            tailwind={false}
            react={true}
            next={false}
            gitHub="https://github.com/DanyRivera/restaurante_react"
            link="https://taqueria-mx.netlify.app/"
          />

          <Project
            img="/img/crm_clientes.png"
            nombre="CRM Clientes"
            tailwind={true}
            react={true}
            next={false}
            gitHub="https://github.com/DanyRivera/crm_react"
            link="https://crm-clientes-vite.netlify.app/clientes"
          />

          <Project
            img="/img/clima_app.png"
            nombre="Clima App"
            tailwind={false}
            react={true}
            next={false}
            gitHub="https://github.com/DanyRivera/clima_react"
            link="https://clima-react-mx.netlify.app/"
          />

          <Project
            img="/img/buscador_imagenes.png"
            nombre="Buscador magenes"
            tailwind={false}
            react={true}
            next={false}
            gitHub="https://github.com/DanyRivera/buscador_pixabay"
            link="https://buscador-imagenes-mx.netlify.app/"
          />

          <Project
            img="/img/restaurante.png"
            nombre="Restaurante"
            tailwind={false}
            react={true}
            next={false}
            gitHub="https://github.com/DanyRivera/comida_react"
            link="https://restaurante-mx.netlify.app/"
          />



        </div>

      </main>

    </Layout >

  )
}

export default projects
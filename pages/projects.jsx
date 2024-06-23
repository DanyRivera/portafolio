import Layout from "../components/Layout";
import Project from "../components/Project";
import data from "../projects.json";

const projects = () => {

  return (

    <Layout
      pagina="Projects"
    >

      <main>

        <h2 className="heading md:pt-48">Projects</h2>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 px-4">

        {data.map(proyecto => (
          <Project 
            key={proyecto.id}
            img={proyecto.img}
            nombre={proyecto.nombre}
            tailwind={proyecto.tailwind}
            react={proyecto.react}
            next={proyecto.next}
            node={proyecto.node}
            express={proyecto.express}
            laravel={proyecto.laravel}
            mysql={proyecto.mysql}
            link={proyecto.link}
            gitHub={proyecto.gitHub}
          />
        ))}

        </div>

      </main>

    </Layout >

  )
}

export default projects
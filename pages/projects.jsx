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

        <div className="md:grid md:grid-cols-2 lg:grid-cols-5 px-10 lg:gap-10">

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
            svelte={proyecto.svelte}
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
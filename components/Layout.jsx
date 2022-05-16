import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pagina }) => {
    return (

        <div>

            <Head>
                <title>{pagina} | Dany Rivera</title>
                <meta name="description" content="Portafolio Dany Rivera"/>
                <meta property="og:title" content="Dany Rivera"/>
                <meta property="og:type" content="WebSite" />
                <meta property="og:url" content="https://dany-rivera.vercel.app/" />
                <meta property="og:description" content="PortFolio of Dany Rivera"/>
                <meta property="og:image" content="https://dany-rivera.vercel.app/img/bg.png" />
                <link rel="icon" href="/img/circle.svg" />
            </Head>

            <Header />

            {children}

            <Footer />

        </div>

    )
}

export default Layout
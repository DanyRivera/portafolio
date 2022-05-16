import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pagina }) => {
    return (

        <div>

            <Head>
                <title>{pagina} | Dany Rivera</title>
                <meta name="description" content="Portafolio Dany Rivera" />
                <meta property="og:image" content="/img/bg.png"/>
                <link rel="icon" href="/img/circle.svg" />
            </Head>

            <Header />

            {children}

            <Footer />

        </div>

    )
}

export default Layout
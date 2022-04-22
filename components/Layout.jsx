import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pagina }) => {
    return (

        <div>

            <Head>
                <title>{pagina} | Dany Rivera</title>
                <meta name="description" content="Portafolio Dany Rivera" />
                <link rel="icon" href="/img/circle.svg" />
            </Head>

            <Header />

            {children}

            <Footer />

        </div>

    )
}

export default Layout
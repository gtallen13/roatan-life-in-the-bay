import Image from "next/image";
import Head from "next/head"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
const Loader = () => {
    return (
        <div className="loader-container center">
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <h3>Just give us one second...</h3>
            <FontAwesomeIcon icon={faGlobeAmericas} color="#115c8a" size="10x"/>
        </div>
    );
}

export default Loader;
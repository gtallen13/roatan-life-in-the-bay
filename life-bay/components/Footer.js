import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer >
            <Image src="/logo.svg" alt="logo" width={80} height={60}/>
            <span>Copyright &copy; 2021 George Allen</span>
            <div className="social-links">
                <Link  href="https://instagram.com/roatanlifeinthebay?igshid=vl0jxr46jiao">
                    <i><FontAwesomeIcon icon={faInstagram}/></i>
                </Link>
                <i>|</i>
                <Link href="https://www.facebook.com/roatanlifeinthebay">
                    <i><FontAwesomeIcon icon={faFacebook}/></i>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
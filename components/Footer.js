import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer >
            <Image src="/logo.svg" alt="logo" width={100} height={90}/>
            <div className="social-links">
                <a href="https://instagram.com/roatanlifeinthebay?igshid=vl0jxr46jiao" target="_blank">
                    <i ><FontAwesomeIcon icon={faInstagram}/></i>
                </a>
                <i>|</i>
                <a href="https://www.facebook.com/roatanlifeinthebay" target="_blank">
                    <i><FontAwesomeIcon icon={faFacebook}/></i>
                </a>
            </div>
            <span>Copyright &copy; 2021 George Allen</span>
        </footer>
    );
}

export default Footer;
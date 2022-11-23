import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                
            </Head>
            <nav>
                <div className='logo'>
                    <h4>Life in the Bay</h4>
                </div>
                <label htmlFor='btn-Menu' className='icon'>
                    <FontAwesomeIcon icon={faBars} size='2x'/>
                </label>
                <input id='btn-Menu' type="checkbox"/>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/Tours/">Tours</Link></li>
                    <li><Link href="/Bookings">Book Now</Link></li>
                    <li>
                        <label htmlFor="btn-More" className='show'>More</label>
                        <Link href="#" >More</Link>
                        <input type="checkbox" id="btn-More"/>
                        <ul>
                            <li><Link href="/More/Covid">COVID-19</Link></li>
                            <li><Link href="/More/About">About US</Link></li>
                            <li><Link href="/More/Gallery">Gallery</Link></li>
                            <li><Link href="/More/Contact">Contact</Link></li>
                        </ul>
                    </li>  
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
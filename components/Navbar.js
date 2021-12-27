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
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/Tours/"><a>Tours</a></Link></li>
                    <li><Link href="/Bookings"><a>Book Now</a></Link></li>
                    <li>
                        <label htmlFor="btn-More" className='show'>More</label>
                        <Link href="#" ><a>More</a></Link>
                        <input type="checkbox" id="btn-More"/>
                        <ul>
                            <li><Link href="/More/Covid"><a>COVID-19</a></Link></li>
                            <li><Link href="/More/About"><a>About US</a></Link></li>
                            <li><Link href="/More/Gallery"><a>Gallery</a></Link></li>
                            <li><Link href="/More/Contact"><a>Contact</a></Link></li>
                        </ul>
                    </li>  
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
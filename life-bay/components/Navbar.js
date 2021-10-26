import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <a><Image src="/logo.svg" alt="logo" width={100} height={80}/></a>
            </Link>
            <Link href="/Tours/"><a>Tours</a></Link>
            <Link href="/book"><a>Book Now</a></Link>
            <Link href="more" ><a>More...</a></Link>
        </nav>
    );
}

export default Navbar;
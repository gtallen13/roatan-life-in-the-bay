import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
const NotFound = () => {
    return (
        <div className="center not-found">
            <div className='not-found-msg'>
                <FontAwesomeIcon icon={faRoute} size='7x'/>
                <h3>Seems we went of course</h3>
            </div>
            <Link href="/">Lets go back !</Link>
        </div>
    );
}

export default NotFound;
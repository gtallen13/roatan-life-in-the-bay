import Image from 'next/image';
const Slide = ({name, location, image, text}) => {
    return (
        <div className="slide-container">
            <Image className="slide-image" width={400} height={400} src={`/${image}`}/>
            <div className="slide-info">
                <h3>{name}</h3>
                <span>{location}</span>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Slide;
import Image from 'next/image';
const SlideImage = ({image, text}) => {
    return (
        <div className="slide-container">
            <Image layout='fill' src={`${image}`}/>
            <div className="slide-info">
                <h1>{text}</h1>
            </div>
        </div>
    );
}

export default SlideImage;
import Image from 'next/image';
const SlideImage = ({image, text}) => {
    return (
        <div className="slide-container">
            <Image layout='fill' src={`${image}`}/>
            <div className="slide-info bottom-center">
                <h3>{text}</h3>
            </div>
        </div>
    );
}

export default SlideImage;
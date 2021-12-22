import Image from 'next/image';
const SlideImage = ({image}) => {
    return (
        <div className="slide-container">
            <Image layout='fill' src={`${image}`}/>
            <div className="slide-info bottom-center">
            </div>
        </div>
    );
}

export default SlideImage;
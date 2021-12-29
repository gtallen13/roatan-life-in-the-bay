import Head from 'next/head'
import Image from 'next/image'
const About = () => {
    return (
        <div>
            <Head>
                <title>About Us | Roatan Life in the Bay</title>
                <meta name="keywords" content="about,tour,island,roatan,tours,bay islands"></meta>
            </Head> 
            <div className="text-section about-us">
                <div>
                    <h1 className="titles">About Us</h1>
                    <p>
                        We are proud native islanders excited to share with you everything we love the most about our home.
                    </p>
                    <p>
                        If your are looking for awe-inspiring snorkeling, kayaking through the mangroves, zipping through the trees, exciting animal interactions, picturesque beach visits, or delicious local cuisine along with the informative history and cultural background of Roatan... then what you are looking for is what we like to call <b>Life in the Bay.</b>
                    </p>
                    <p>
                        Let us be your guide to experience your adventure of chouce whether your are cruising and in part for just a few hours of vacationing here for a week. We will make sure you never forget and want to return for more Life in the Bay!
                    </p>
                </div>
            </div>
            <div className='signature-wrapper'>
                <div className='signature-content'>
                    <div className='logo-about'>
                        <Image src={"/logo.svg"} width={180} height={180} className='logo-about-img'/>
                    </div>
                    <p className="signature">-Luke and the crew</p>
                </div>
            </div>
        </div>
    );
}

export default About;
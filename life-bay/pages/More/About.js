import Head from 'next/head'
const About = () => {
    return (
        <div>
            <Head>
                <title>About Us | Roatan Life in the Bay</title>
                <meta name="keywords" content="about,tour,island,roatan,tours,bay islands"></meta>
            </Head> 
            <div className="text-section about-us">
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
                <p className="signature">-Luke and the crew</p>
            </div>
        </div>
    );
}

export default About;
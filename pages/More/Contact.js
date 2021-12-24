import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Bookings.module.css'


const Contact = () => {
    return (
        <div>
            <Head>
                <title>About Us | Roatan Life in the Bay</title>
                <meta name="keywords" content="about,tour,island,roatan,tours,bay islands"></meta>
            </Head> 
            <div className='text-section contact'>
                <h1 className='titles'>Contact Us</h1>
                <form className={styles.bookingFrm}>
                    <div className={styles.frmRow}>
                        <div className={styles.frmItems}>
                            <label for="txtName">Full Name</label>
                            <input type="text" id='txtName'/>
                        </div>
                        <div className={styles.frmItems}>
                            <label for="txtEmail">Email</label>
                            <input type="email" id='txtEmail'/>
                        </div>
                    </div>
                    <div className={styles.txtArea}>
                        <label for="txtHelp">How can we help you?</label>
                        <input type="text" id='txtHelp'/>

                    </div>
                    <button type='submit' id='btnSubmit' className={styles.btnConfirm}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
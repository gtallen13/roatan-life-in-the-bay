import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Bookings.module.css'
import { useState } from 'react';

const Contact = () => {

    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [description, setDescription] = useState();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Sending email...');

        let data = {
            fullName,
            email,
            description
        }
        fetch('/api/contact',{
            method:'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>{
            console.log("Response received");
            if (res.status===200){
                console.log("Response succeded");
                setSubmitted(true);
                setFullName('');
                setEmail('');
                setDescription('');
            }
        })
    }
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
                            <label htmlFor="txtName">Full Name</label>
                            <input type="text" id='txtName' onChange={(e)=>{setFullName(e.target.value)}}/>
                        </div>
                        <div className={styles.frmItems}>
                            <label htmlFor="txtEmail">Email</label>
                            <input type="email" id='txtEmail' onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                    </div>
                    <div className={styles.txtArea}>
                        <label htmlFor="txtHelp">How can we help you?</label>
                        <input type="text" id='txtHelp' onChange={(e)=>{setDescription(e.target.value)}}/>
                    </div>
                    <input 
                    type='submit' 
                    id='btnSubmit' 
                    className={styles.btnConfirm}
                    onClick={(e)=>{handleSubmit(e)}}/>
                </form>
                {submitted?
                <span>Email sent successfully</span>:null}
            </div>
        </div>
    );
}

export default Contact;
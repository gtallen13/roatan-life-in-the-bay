import { connectToDatabase } from "../utils/mongodb"; 
import styles from '../styles/Bookings.module.css'
import Head from 'next/head';
import Link from 'next/link'
import Router, { useRouter } from "next/router";
import {Textbox, DateSelector, ComboBox, Checkbox} from "../components/Forms";
import { useEffect, useState } from "react";
const Bookings = ({tours}) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [tourDate, setTourDate] = useState('');
    const [shipResortName, setShipResortName] = useState('');
    const [arrTours, setArrTours] = useState([]);
    const [transportationNeeded, setTransportationNeeded] = useState();
    const [nGuestsU5yrs, setNGuestsU5yrs] = useState(0);
    const [nGuestsO5yrs, setNGuestsO5yrs] = useState(0);
    const [bookingMade, setBookingMade] = useState(false);
    const router = useRouter();
    const addTour = (newTour)=>{
        setArrTours([...arrTours,newTour])
    }
    const optionsTranportation=[
        {label:"Yes, we need transportation!",value:true},
        {label:"No, thank you", value:false}
    ]
    const removeTour = (tourName)=>{
        setArrTours(current=>
            current.filter(item=>{
                return item !==tourName
        }))
    }
    const data ={
        fullName,
        email,
        tourDate,
        shipResortName,
        arrTours,
        transportationNeeded,
        nGuestsU5yrs,
        nGuestsO5yrs,
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch('/api/booknow',{
            method:'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res)=>{
            if(res.status===200){
                console.log('====================================');
                console.log("Sent sucessfully");
                setBookingMade(true)
                console.log('====================================');
            }
            setFullName('');
            setEmail('');
            setTourDate('');
            setShipResortName('');
            setArrTours([]);
            setTransportationNeeded('');
            setNGuestsU5yrs('');
            setNGuestsO5yrs('');
            router.reload()
        })
    }

    return (
        <div className="page-background">
            <Head>
                <title>Book Now | Roatan Life in the Bay</title>
                <meta name="keywords" content="book now,tour,island,roatan,tours,bay islands"></meta>
            </Head> 
            <h1 className="titles">Book Now</h1>
            <div className="center">
                <div className="text-section bookings">
                    <p>
                    If you would like to book more than one tour with us for your trip, please book on our 
                    tour page.
                    </p>
                    <form className={styles.bookingFrm}>
                        <div className={styles.frmRow}>
                            <Textbox
                            labelText="Full Name*"
                            placeholder="Luke Johnson"
                            value={fullName}
                            setValue={setFullName}
                            />
                            <Textbox
                            labelText="Email*"
                            placeholder="ljohnson17@baylife.com"
                            setValue={setEmail}
                            value={email}
                            />
                        </div>
                        <div className={styles.frmRow}>
                            <DateSelector 
                            labelText="Date*"
                            value={tourDate}
                            setValue={setTourDate}
                            />
                            <Textbox
                            labelText="Ship/Resort Name*"
                            placeholder="Henry Morgan"
                            value={shipResortName}
                            setValue={setShipResortName}
                            />
                        </div>
                        <div className={styles.frmRow}>
                            <div className={styles.frmItems}>
                                <p>Tour*</p>
                                {tours.map((tour,key)=>(
                                    <Checkbox 
                                    id={tour.id} 
                                    text={tour.info} 
                                    key={key}
                                    addTour={addTour}
                                    removeTour={removeTour}
                                    />
                                ))}
                                <Checkbox 
                                id="1" 
                                text="Fishing Charter 1/2 day $300-350"
                                addTour={addTour}
                                removeTour={removeTour}
                                />
                                <Checkbox 
                                id="2" 
                                text="Fishing Charter Full day $500-600"
                                addTour={addTour}
                                removeTour={removeTour}
                                />
                                <Checkbox 
                                id="3" 
                                text="Kayak/ing 1/2 $60/person"
                                addTour={addTour}
                                removeTour={removeTour}
                                />
                                <Checkbox 
                                id="4" 
                                text="Beach Day $30/person"
                                addTour={addTour}
                                removeTour={removeTour}
                                />
                            </div>
                            <ComboBox
                            labelText="Need transportation?"
                            options={optionsTranportation}
                            value={transportationNeeded}
                            setValue={setTransportationNeeded}
                            />
                        </div>
                        <div className={styles.frmRow}>
                            <Textbox
                            labelText="Number of guests 5yrs and older*"
                            value={nGuestsO5yrs}
                            setValue={setNGuestsO5yrs}
                            />
                            <Textbox
                            labelText="Number of guests 4yrs and under*"

                            value={nGuestsU5yrs}
                            setValue={setNGuestsU5yrs}
                            />
                        </div>
                        <button 
                        name="btnConfirm" 
                        id="btnConfirm" 
                        className={styles.btnConfirm}
                        onClick={(e)=>{handleSubmit(e)}}
                        >Confirm</button>
                    </form>
                    {bookingMade?
                    <span>Your reservation has been made!</span>:null}
                </div>
            </div>
        </div>
    );
}


export async function getStaticProps(){
    const {db} = await connectToDatabase()

    const dataTours = await db
    .collection("tours")
    .find()
    .toArray()

    const tours = dataTours.map(tour=>{
        const id = JSON.parse(JSON.stringify(tour._id))
        const info = `${tour.name}  $${tour.price}/person`
        return{
            id:id,
            info: info
        }
    })
    return {
        props:{tours}
    }
}
export default Bookings;
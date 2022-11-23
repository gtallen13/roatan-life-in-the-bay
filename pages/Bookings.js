import { connectToDatabase } from "../utils/mongodb"; 
import styles from '../styles/Bookings.module.css'
import Head from 'next/head';
import Link from 'next/link'
import Checkbox from "../components/Checkbox";
const Bookings = ({tours}) => {
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
                            <div className={styles.frmItems}>
                                <label htmlFor="txtName">Full Name*</label>
                                <input required type="text" id="txtName" name="txtName" placeholder="Luke Johnson"/>
                            </div>
                            <div className={styles.frmItems}>
                                <label htmlFor="txtEmail">Email*</label>
                                <input required type="email" id="txtEmail" name="txtEmail" placeholder="ljohnson17@baylife.com"/>

                            </div>
                        </div>
                        <div className={styles.frmRow}>
                            <div className={styles.frmItems}>
                                <label htmlFor="txtDate">Date*</label>
                                <input required type="datetime-local" id="txtDate" name="txtDate"/>
                            </div>
                            <div className={styles.frmItems}>
                                <label htmlFor="txtShipResort">Ship/Resort Name*</label>
                                <input required type="text" id="txtShipResort" name="txtShipResort"/>
                            </div>
                        </div>
                        <div className={styles.frmRow}>
                            <div className={styles.frmItems}>
                                <p>Tour*</p>
                                {tours.map((tour,key)=>(
                                    <Checkbox id={tour.id} text={tour.info} key={key}/>
                                ))}
                                <Checkbox id="1" text="Fishing Charter 1/2 day $300-350"/>
                                <Checkbox id="2" text="Fishing Charter Full day $500-600"/>
                                <Checkbox id="3" text="Kayaking 1/2 $60/person"/>
                                <Checkbox id="4" text="Beach Day $30/person"/>
                            </div>
                            <div className={styles.frmItems}>
                            <label htmlFor="select-transport">Need Transportation*</label>
                                <select name="select-transport" id="select-transport" required>
                                    <option value="yes">Yes, please!</option>
                                    <option value="no">No, thank you</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.frmRow}>
                            <div className={styles.frmItems}>
                                <label htmlFor="txt5>">Number of guests 5yrs and older*</label>
                                <input type="number" id="txt5>" name="txt5>" required/>
                            </div>
                            <div className={styles.frmItems}>
                                <label htmlFor="txt4<">Number of guests 4yrs and under*</label>
                                <input type="number" id="txt4<" name="txt4<" required/>
                            </div>
                        </div>
                        <button name="btnConfirm" id="btnConfirm" className={styles.btnConfirm}>Confirm</button>
                    </form>
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
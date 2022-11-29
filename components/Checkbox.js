import { useState } from 'react';
import styles from '../styles/Bookings.module.css';
const Checkbox = ({text, id, addTour, removeTour}) => {
    const [checked, setChecked] = useState(false)
    const handleClick=(tourName)=>{
        if (checked){
            removeTour(tourName)
            setChecked(false)
        }
        else{
            addTour(tourName)
            setChecked(true)
        }
    }
    
    return (
        <div className={styles.checkboxContainer}>
            <input 
            type="checkbox" 
            id={id} 
            name={id} 
            onChange={()=>{
                handleClick(text)
            }}
            />
            <label htmlFor={id}>{text}</label>
        </div>
    );
}

export default Checkbox;
import styles from "../../styles/Bookings.module.css"
import { useState } from 'react';

export const Textbox = ({
    labelText,
    placeholder,
    value,
    setValue,
}) => {
    return (
        <div className={styles.frmItems}>
            <label htmlFor={labelText}>{labelText}</label>
            <input required 
            type="text"
            id={labelText}
            placeholder={placeholder} 
            onChange={(e)=>{setValue(e.target.value)}}
            value={value}
            />
        </div>
    );
}
export const DateSelector = ({
    labelText,
    value,
    setValue
}) => {
    return (
        <div className={styles.frmItems}>
            <label htmlFor={labelText}>{labelText}</label>
            <input required 
            type="datetime-local" 
            id={labelText} 
            value={value}
            onChange={(e)=>{setValue(e.target.value)}}
            />
        </div>
    );
}
export const ComboBox = ({
    labelText,
    options,
    value,
    setValue
}) => {
    return (
        <div className={styles.frmItems}>
            <label>{labelText}</label>
            <select 
            required
            onChange={(e)=>{setValue(e.target.value)}}
            value={value}
            >
                <option value="N/A">Select an option</option>
                {options.map((item,key)=>(
                    <option value={item.value} key={key}>{item.label}</option>
                ))}
            </select>
        </div>
    );
}

export const Checkbox = ({text, id, addTour, removeTour}) => {
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


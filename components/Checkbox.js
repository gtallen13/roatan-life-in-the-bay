import styles from '../styles/Bookings.module.css';
const Checkbox = ({text, id}) => {
    return (
        <div className={styles.checkboxContainer}>
            <input type="checkbox" id={id} name={id}/>
            <label htmlFor={id}>{text}</label>
        </div>
    );
}

export default Checkbox;
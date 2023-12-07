import styles from "./button.module.css";

const Button = props => {
    return(
        <button style={{
            backgroundColor:props.backgroundColor,
            boxShadow:props.boxShadow
        }} className={styles.button} onClick={() => props.click}>{props.text}</button>
    )
}

export default Button;
import styles from "./button.module.css";

const Button = props => {
    return(
        <button className={styles.button} onClick={() => props.click}>{props.text}</button>
    )
}

export default Button;
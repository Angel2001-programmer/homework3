import styles from "./FailedLogin.module.css";
import Button from "../../UI/Button/button"

const FailedLogin = props => {
    return(
        <div className={styles.container}>
            <div className={styles.failedLogin}>
            <h2>Login unsuccessful please try again.</h2>
            <h3>Click here to go back to login page</h3>
            <Button text="Back to login page" click={null}/>
            </div>
        </div>
      
    )
}

export default FailedLogin;
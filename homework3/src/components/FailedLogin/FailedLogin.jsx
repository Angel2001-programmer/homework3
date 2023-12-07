import styles from "./FailedLogin.module.css";
import Button from "../../UI/Button/button";
import { Link } from "react-router-dom";

const FailedLogin = props => {
    return(
        <div className={styles.container}>
            <div className={styles.failedLogin}>
            <h2>Login unsuccessful please try again.</h2>
            <h3>Click here to go back to login page</h3>
            <Link to="/"><Button 
            backgroundColor="#742819" 
            boxShadow="5px 5px 15px rgba(241, 72, 10, 0.595)"
            text="Back to login page"/></Link>
            </div>
        </div>
      
    )
}

export default FailedLogin;
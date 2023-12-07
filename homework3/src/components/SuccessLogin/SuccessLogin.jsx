import styles from "./SuccessLogin.module.css";
import Button from "../../UI/Button/button";
import { Link } from "react-router-dom";

const SuccessLogin = props => {
    return(
        <div className={styles.container}>
            <div className={styles.successLogin}>
            <h4>Welcome you have successfully logged in</h4>
            <h4>Click here to sign out</h4>
            <Link to="/"><Button
            backgroundColor="rgb(39, 220, 103)" 
            boxShadow="5px 5px 15px rgba(82, 448, 168, 0.561)" 
            text="Sign Out"/>
            </Link>
            </div>
        </div>            
    )
}

export default SuccessLogin;
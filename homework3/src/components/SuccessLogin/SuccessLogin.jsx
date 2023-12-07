import styles from "./SuccessLogin.module.css";
import Button from "../../UI/Button/button";
import Link from "../Login/Login"

const SuccessLogin = props => {
    return(
        <div className={styles.container}>
            <div className={styles.successLogin}>
            <h4>Welcome you have successfully logged in</h4>
            <h4>Click here to sign out</h4>
            <Link to="/"><Button text="Sign Out"/></Link>
            </div>
        </div>            
    )
}

export default SuccessLogin;
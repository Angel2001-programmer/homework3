import styles from "./Login.module.css";
import Button from "../../UI/Button/button"
import { Link } from "react-router-dom";

const Login = props => {
    return(
        <div className={styles.container}>
        <form className={styles.login} onSubmit={(e) => Login(e)}>
            <h2>Login</h2>
            <div className={styles.inputCol}>
            <label className={styles.label} htmlFor="email">Enter Email</label>
            <div className={styles.inputRow}>
            <input className={styles.input} type="text" name="email"/>
            </div>
            <div className={styles.inputCol}>
            <label className={styles.label} htmlFor="password">Enter Password</label>
            <input className={styles.input} type="password" name="password"/></div>
            </div>
            <Link to="/SuccessLogin"><Button text="Login"/></Link>
        </form>
        </div> 
    )
}

export default Login;
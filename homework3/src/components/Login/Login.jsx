import styles from "./Login.module.css";
import Button from "../../UI/Button/button"
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = props => {
    const [userData, setUserData] = useState();
    const userCredential = {email: "helloThere123@moogle.co.uk", password: "pass123"};
    let button = <Button text="Login"/>;

    const onChangeInput = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
        console.log(userData);
    }

    const checkUser = () => {
        
    }

    return(
        <div className={styles.container}>
        <form className={styles.login} onSubmit={(e) => Login(e)}>
            <h2>Login</h2>
            <div className={styles.inputCol}>
            <label className={styles.label} htmlFor="email">Enter Email</label>
            <div className={styles.inputRow}>
            <input className={styles.input} type="text" name="email" onChange={onChangeInput}/>
            </div>
            <div className={styles.inputCol}>
            <label className={styles.label} htmlFor="password">Enter Password</label>
            <input className={styles.input} type="password" name="password" onChange={onChangeInput}/></div>
            </div>
            {/* <Link to="/SuccessLogin"><Button text="Login"/></Link> */}
            {button}
        </form>
        </div> 
    )
}

export default Login;
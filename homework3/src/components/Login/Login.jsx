import styles from "./Login.module.css";
import Button from "../../UI/Button/button"
import { useState, useContext } from "react";
import { MContext } from "../../App";
const Login = () => {
    //Managing useState values.
    const [errorMessage, setErrorMessage] = useState();
    const [userData, setUserData] = useState({email: '', password: ''});
    const [isLogged, setisLogged] = useContext(MContext);

    //Internal user information.
    const userCredential = {
        email: "helloThere123@moogle.co.uk", 
        password: "pass123"};

    //email pattern to check if email input has @ and company.com in the email address.
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const onChangeInput = (e) => {
        setUserData(null);
        //copy current array and add new objects to it.
        setUserData({...userData, [e.target.name]: e.target.value});

        //Check if email input or password is invalid.
        if(userData.email === '' || userData.password === ''){
            return setErrorMessage(<p className={styles.errorMessage}>Inputs cannot be empty.</p>);
        } else {
            setErrorMessage(null);
        }

        // Check if email address is valid.
        if(!regex.test(userData.email)){
            // Display an error message.
            return setErrorMessage(<p className={styles.errorMessage}>Email or Password is not valid.</p>);
        } else {
            setErrorMessage(null);
        }
    }

    const checkUser = (e) => {
        e.preventDefault();
        //Print to console.
        console.log(isLogged);
        //Check if email and password from user matches with correct user details.
        if (userCredential.email === userData.email &&
            userCredential.password === userData.password){
            setErrorMessage(null)
            setisLogged(true);
            console.log('Success!')
            //Redirect user to SuccessLogin page.
            window.location.href = "/SuccessLogin";

        } else {
            setisLogged(false);
            //Redirect user to FailedLogin page.
            window.location.href = "/FailedLogin";
        }
    }

    return(
        <div className={styles.container}>
        <form className={styles.login} onSubmit={(e) => checkUser(e)}>
            <h2>Login</h2>
            <div className={styles.inputCol}>
            {errorMessage}
            <label className={styles.label} htmlFor="email">Enter Email</label>
            <div className={styles.inputRow}>
            <input className={styles.input} type="text" name="email" onChange={onChangeInput}/>
            </div>
            <div className={styles.inputCol}>
            <label className={styles.label} htmlFor="password">Enter Password</label>
            <input className={styles.input} type="password" name="password" onChange={onChangeInput}/></div>
            </div>
            <Button text="Login"/>            
            </form>
        </div> 
    )
}

export default Login;
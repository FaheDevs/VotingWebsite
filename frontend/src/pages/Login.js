import React from "react"
import "./Login.css"
import {useState} from "react";
import instance from "../utils/client";

const Login = () => {
    // const [UserNameReg, SetUserNameReg] = useState("");
    //const [UserPasswordRegConfirmation, SetUserPasswordRegConfirmation] = useState("");

    const [EmailReg, SetEmailReg] = useState("");

    const [PasswordReg, SetPasswordReg] = useState("");

    const [LoginStatus, SetLoginStatus] = useState(false)
    let accessToken;
    let refreshToken;


    const log = () => {
        instance.post("/login", {
            email: EmailReg,
            password: PasswordReg
        }).then(response => {
            if (response.status === 200) {
                SetLoginStatus(true)
                //  instance.defaults.headers.common['authorization'] = `Bearer ${response.data.accessToken}`;
                console.log(localStorage.getItem("JWT"))

            }
        }).catch(err =>{
            console.log(err);
            console.log("LOG ERROR ")
        });

    }

    return (
        <div className="center">
            <h1>Sign up</h1>
            <form>
                <div className="inputbox">
                    <input type="email" required="required" onChange={(e) => {
                        SetEmailReg(e.target.value)
                    }}/>
                    <span>Email</span>
                </div>
                <div className="inputbox" data-error="ERROR ON THE PASSWORD">
                    <input type="password" required="required" onChange={(e) => {
                        SetPasswordReg(e.target.value)
                    }}/>
                    <span>Password</span>
                </div>
                <div className="inputbox">
                    <input type="button" value="Login" onClick={log}/>
                </div>
            </form>
            <p> {LoginStatus} </p>

        </div>

    )
}
export default Login

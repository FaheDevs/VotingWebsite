import React from 'react';
import {useState} from "react";

import instance from "../utils/client";


const Register = ()=> {
    const [FullNameReg, SetFullNameReg] = useState("");
    //const [UserNameReg, SetUserNameReg] = useState("");
    const [EmailReg, SetEmailReg] = useState("");
    const [UserPasswordReg, SetUserPasswordReg] = useState("");
    //const [UserPasswordRegConfirmation, SetUserPasswordRegConfirmation] = useState("");
    const [RegisterStatus , SetRegisterStatus] = useState("")

      const register = () => {
        instance.post("/register", {
            name: FullNameReg,
            email: EmailReg,
            password: UserPasswordReg,
        }).then(response => {
            console.log(response.headers)
            console.log(response)

        }).catch(err =>{

        })
    }
        return (
              <div className="center">
            <h1>Register</h1>
            <form>
                 <div className="inputbox">
                    <input type="text"  required="required" onChange={(e)=>{
                        SetFullNameReg(e.target.value)
                    }}/>
                    <span>Full Name</span>
                </div>
                <div className="inputbox">
                    <input type="email"  required="required"  onChange={(e)=>{
                        SetEmailReg(e.target.value)
                    }}/>
                    <span>Email</span>
                </div>
                <div className="inputbox">
                    <input type="password" required="required"onChange={(e)=>{
                        SetUserPasswordReg(e.target.value)
                    }}/>
                    <span>Password</span>
                </div>
                  <div className="inputbox">
                    <input type="password" required="required"/>
                    <span>Confirm Password</span>
                </div>
                <div className="inputbox">
                    <input type="button" value="submit" onClick={register}/>
                </div>
            </form>
                  <p>{RegisterStatus}</p>
        </div>
        );

}

export default Register;
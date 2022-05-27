import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import {Routes} from "react-router";

const RoutesApp = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="*" element={<Error/>}/>

                <Route  element={<ProtectedRoutes/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                </Route>
            </Routes>
            </BrowserRouter>
        </div>

    );
};

export default RoutesApp;
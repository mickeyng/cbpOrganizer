import React, {useState} from 'react'
import Keycloak from 'keycloak-js'
import * as ReactDOM from "react-dom";
import axios from "axios";
import {isAuthenticated, logout} from "./service/AuthService";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";

function App() {
    const [isAuthenticate, setIsAuthenticate] = useState(false);

    function LogOut() {
        const logout = () => {
            // keycloak.logout();
        };
        return (
            <>
                <button onClick={logout}>
                    Logout
                </button>
            </>
        );
    }

    function CheckRoles() {
        let response = "";
        const check = () => {
            // check if it is authenticated, otherwise redirect to login page
            setIsAuthenticate(isAuthenticated());
            if (!isAuthenticated()) {
                response = "OK";
            } else {
                response = "NOT OK";
                // redirect to login page
            }
        };

        return (
            <>
                <p> Check user has access as cbpuser role</p>
                <button onClick={check}>
                    Check
                </button>
                <p id="cbpsuer"></p>
            </>
        );
    }

    function Login() {

    }

    return (
        <React.Suspense >
            <Routes>
                <Route path="/main" name="Home Page" element={<Main />} />
                <Route path="/" name="Login Page" element={<Login />} />
            </Routes>
        </React.Suspense>
    );
}

export default App

import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";
import logo from "./images/logo.png";

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        // Only add nav__black if show variable is true
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                    className="nav__logo"
                    onClick={() => history.push("/")}
                    src={logo}
                    alt=""
                />

                <img
                    // Push to Profile Tab so we can go back use history so we can go back
                    onClick={() => history.push("/profile")}
                    className="nav__avatar"
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Nav;

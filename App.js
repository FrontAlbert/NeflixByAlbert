import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import { auth } from "./components/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./app/features/userSlice.js";
import ProfileScreen from "./components/screens/ProfileScreen";

function App() {
    // Selectuser is from userSlice
    // const user = null;
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            } else {
                // Logged out
                dispatch(logout());
            }
        });

        return unsubscribe;
    }, [dispatch]);

    return (
        <div className="app">
            <Router>
                {!user ? (
                    <LoginScreen />
                ) : (
                    <Switch>
                        <Route path="/profile">
                            <ProfileScreen />
                        </Route>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                    </Switch>
                )}
            </Router>
        </div>
    );
}

export default App;

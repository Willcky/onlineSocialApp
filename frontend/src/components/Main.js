import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
//switch --模糊匹配，顺序matter

function Main(props) {
    const { isLoggedIn, handleLoggedIn } = props;
    //persistent login
    const showLogin = () => {
        return isLoggedIn ? (
        <Redirect to="/home" />//跳到router
        ) : (
            <Login handleLoggedIn={handleLoggedIn} />
        );
    };

    const showHome = () => {
        return isLoggedIn ? <Home /> : <Redirect to="/login" />;
    };

    return (
        <div className="main">
            <Switch>
                <Route path="/" exact render={showLogin} />
                <Route path="/login" component={showLogin} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={showHome} />
            </Switch>
        </div>
    );
}

export default Main;
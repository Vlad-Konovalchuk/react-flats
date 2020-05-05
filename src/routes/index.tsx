import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../components/Flats";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const routes = (
    <Router>
        <Header/>
        <main>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route render={() => <h1>404: page not found</h1>}/>
            </Switch>
        </main>
        <Footer/>
    </Router>
);

export default routes;

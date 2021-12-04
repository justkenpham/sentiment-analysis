import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductDetail from '../pages/ProductDetail'
import HomePage from '../pages/HomePage'
import ProductList from "../pages/ProductList";
import LoginForm from "../components/LoginForm";

const MainRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path="/homepage" component={HomePage} />
                <Route path="/product-detail" component={ProductDetail} />
                <Route path="/product-list" component={ProductList} />
                <Route path="/login" component={LoginForm} />

            </Switch>
        </Router>
    )
}

export default MainRoute;
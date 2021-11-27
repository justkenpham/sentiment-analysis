import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductDetail from '../pages/ProductDetail'
import HomePage from '../pages/HomePage'

const MainRoute = () => {
    return(
        <Router>
            <Switch>
                <Route path="/product-detail" component={ProductDetail} />
                {/* <Route path="/" component={HomePage} /> */}
            </Switch>
        </Router>
    )
}

export default MainRoute;
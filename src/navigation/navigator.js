import React, { Component } from "react";
import routers from "../routers";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

export default class Navigator extends Component {
  render() {
    return (
      <Router>
        <Header />
        {/* <Switch>
                    <Route path="/" exact component={HomeScreen}/>
                    <Route path="/gioithieu" exact component={IntroScreen}/>
                    <Route path="/tracuu" exact component={SearchScreen}/>
                    <Route path="/banggia" exact component={PriceScreen}/>
                    <Route path="/lienhe" exact component={ContactScreen}/>
                    <Route path="/themdonhang" exact component={AddScreen}/>
                </Switch> */}
        {this.Show(routers)}
        <Footer />
      </Router>
    );
  }
  Show = (routes) => {
    var result = null;
    if (routers.length > 0) {
      result = routers.map((route, index) => {
        return (
          <Route
            // key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

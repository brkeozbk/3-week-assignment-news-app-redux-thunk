import React, { Component } from "react";
import {Route, Switch } from 'react-router-dom';

import { AllCategoriesContainer } from "../../containers/AllCategoriesContainer";
import { CategoriesContainer } from "../../containers/CategoriesContainer";

class App extends Component {
  render() {
    return <div className="App">

      <Switch>
      <Route exact path="/">
      <AllCategoriesContainer />
      </Route>

      <Route exact path="/categories/:id">
      <CategoriesContainer />
      </Route>
      </Switch>

    </div>;
  }
}

export default App;

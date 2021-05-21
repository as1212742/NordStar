/** @format */

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Frontpage from "./components/MainPage/entryPoint/FrontPage";
import HomeEks from "./components/MainPage/home/HomeEks";
import { DataProvider } from "./components/context/Provider";

const Main = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Frontpage} />
          {/* <Route exact path="/Homepage" component={HomePage}  /> */}
          <Route exact path="/HomeEks" component={HomeEks} />
          {/* <Route exact path="/HomeEks#Path1" component={}  />
          <Route exact path="/HomeEks#Path2" component={HomeEks}  /> */}
        </Switch>
      </BrowserRouter>
    </DataProvider>
  );
};

export default Main;

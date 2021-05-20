import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Frontpage from './components/MainPage/entryPoint/FrontPage'
import HomePage from './components/MainPage/home/Home'
import {DataProvider} from './components/context/Provider'



const Main = () => {

  return (
    <DataProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/Homepage" component={HomePage}  />
        </Switch>
      </BrowserRouter>
    </DataProvider>

  )
}

export default Main

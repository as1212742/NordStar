import React from 'react'
import { BrowserRouter} from 'react-router-dom';
import Calc from './components/MainPage/Calc'
import Frontpage from './components/MainPage/entryPoint/FrontPage'
const Main = () => {
  return (
    <BrowserRouter>
      <Frontpage/>
    </BrowserRouter>

  )
}

export default Main

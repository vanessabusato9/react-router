import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from '../pages/Homepage'
import AboutUs from "../pages/AboutUs"
import DefaultLayout from '../layout/DefaultLayout'


function App() {

  return <BrowserRouter>
    <Routes>
      <Route Component={DefaultLayout}>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={AboutUs} />
      </Route>
    </Routes>
  </BrowserRouter >;



}

export default App; 

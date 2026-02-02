import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from '../pages/Homepage'
import AboutUs from "../pages/AboutUs"
import Navbar from "../Components/Navbar"

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/Homepage" Component={Homepage}></Route>
      <Route path="/AboutUs" Component={AboutUs}></Route>
    </Routes>
  </BrowserRouter >;

}

export default App; 

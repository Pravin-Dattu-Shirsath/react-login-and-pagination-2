
import './App.css';

import { useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Loginpage from './component/Loginpage';
import Home from './component/Home';
import Registerpage from './component/Registerpage';
function App() {
const[auth,setAuth]=useState(false)
  return (
    <div>
<BrowserRouter>
{/* <Loginpage/> */}
  <Routes>
      <Route path = "/" element={<Loginpage/>} />
      <Route path = "/admin" element={<Home/>} />
      <Route path = "/register" element={<Registerpage/>} />
  </Routes>
  </BrowserRouter>,

     
    </div>
  );
}

export default App;

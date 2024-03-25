import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
 //import RestuarantHomePage from './components/RestuarantHomePage'
 import CustomerOrderPage from './components/CustomerOrderPage'
 import Projectreg from "./components/Projectreg";
 import "./components/Projectreg.css";
 import Nav from"./components/Nav";
 import Forgotpassword from './components/Forgotpassword';
  import './components/Forgotpassword.css'
 import {BrowserRouter,Route,Routes} from"react-router-dom";
 import Restaurantgallery from './components/Restaurantgallery';
 import Customerviewmenu from "./components/Customerviewmenu";





function App() {
  return (
    <div className="App">
      
{/* <RestuarantHomePage/> */}

       <BrowserRouter>
                  <Nav/>

      <Routes>
        <Route path='/CustomerOrderPage' element={<CustomerOrderPage/>}/>
         <Route path='/Forgotpassword'element={<Forgotpassword/>}/>
        <Route path='/Projectreg'element={<Projectreg/>}/>
        <Route path='/Restaurantgallery'element={<Restaurantgallery/>}/>
          <Route path="/Customerviewmenu"  element={<Customerviewmenu/>}/>

      </Routes>

      </BrowserRouter> 
  
    </div>
  );
}

export default App;

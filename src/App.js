import {Link, Route, Routes} from "react-router-dom";
import {Purchaseorder} from "./components/Purchaseorder";
import {ContactUs} from "./components/Contact";
import {NoPage} from "./components/NoPage";
import React from "react";
import {Home} from "./components/Home";
import {Login} from "./components/Login";
function App() {

  return (
      <div>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route>
                  <Route path={"/login"} element={<Login/>}/>
                  <Route path="/home" element={<Home/>} />
                  <Route path="purchase" element={<Purchaseorder/>} />
                  <Route path="contact" element={<ContactUs />} />
                  <Route path="*" element={<NoPage />}/>
              </Route>
          </Routes>

      </div>


  );
}

export default App;

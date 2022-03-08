import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buy from "./Page/Buy";
import Exchange from "./Page/Exchange";
import Recive from "./Page/Recive";
import {NewSend} from "./Page/NewSend";
import Swap from "./Page/Swap";
import TestPage from "./TestPage";
 export const TestHome = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/send" element={<NewSend />} />
          <Route exact  path="/history" element={<History />} />
          <Route exact path="/exchange" element={<Exchange />} />
          <Route exact  path="/Receive" element={<Recive />} />
          <Route exact  path="/swap" element={<Swap />} />
          <Route exact path="/" element={<TestPage />} />

        </Routes>
      </BrowserRouter>
     
    </div>
  );
};
export default TestHome;

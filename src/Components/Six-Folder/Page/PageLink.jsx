import React from "react";
import MultiChild from "../MultiChild";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Send from "./Send";
// import Buy from "./Buy";
// import Recive from "./Recive";
// import Swap from "./Swap";
// import NFTs from "./NFTs";
// import Exchange from "./Exchange";

// import "./MultiCoin.css";

const PageLink = () => {
  return (
    <div>
      <h1> this is Link component</h1>
      <MultiChild />
      {/* <React.Fragment>
        <Router>
          {/* <MultiChild /> */}
      {/* <Routes>
            <Route path="/Send" element={<Send />} />
            <Route path="/Recive" element={<Recive />} />
            <Route path="/Buy" element={<Buy />} />
            <Route path="/Swap" element={<Swap />} />
            <Route path="/NFTs" element={<NFTs />} />
            <Route path="/Exchange" element={<Exchange />} />
          </Routes>
        </Router>
      </React.Fragment> */}
    </div>
  );
};
export default PageLink;

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Places from "./Components/Places";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import LocationView from "./Components/LocationView";
import SearchResults from "./Components/SearchResults";
import Footer from "./Components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home typeOf="FORT"/>} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/Places" element={<Places />} />
          <Route path="/Places/:typeOf" element={<Places />} />
          <Route path="/Places/location-view/:id" element={<LocationView />} />
          <Route
            path="/Places/search/:query"
            element={<SearchResults />}
          ></Route>
        </Routes>

        <Footer />
      </div>
    );
  }
}

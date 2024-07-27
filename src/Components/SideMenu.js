import { BrickWall, Castle, Church, Mountain, Ship, Swords, TreePine, Webhook } from "lucide-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideMenu extends Component {
  render() {
    return (
      <div className="d-flex flex-column h-100 border-right bg-white mt-4">
        <div className="p-4">
          <ul className="nav flex-column">
            <li className="nav-item my-2">
              <h5 className="nav-link rounded w-100 bg-light text-dark mb-2">Place Types</h5>
            </li>
            <li className="nav-item my-2">
              <Link to="/Places" className="nav-link text-secondary mb-2 d-flex text-start align-items-center" style={{fontSize : '15px'}}>
                <Webhook /> <span className="mx-3"> ALL </span>
              </Link>
            </li>
            <li className="nav-item my-2">
              <Link to="/places/HISTORICAL" className="nav-link text-secondary mb-2 d-flex text-start align-items-center" style={{fontSize : '15px'}}>
              <Swords />  <span className="mx-3"> HISTORICAL </span>
              </Link>
            </li>
            <li className="nav-item my-2">
              <Link to="/places/NATURE" className="nav-link text-secondary mb-2 d-flex text-start align-items-center" style={{fontSize : '15px'}}>
              <TreePine />  <span className="mx-3"> NATURE </span>
              </Link>
            </li>
            <li className="nav-item my-2">
              <Link to="/places/BEACH" className="nav-link text-secondary mb-2 d-flex text-start align-items-center" style={{fontSize : '15px'}}>
              <Ship />  <span className="mx-3"> BEACH </span>
              </Link>
            </li>
            <li className="nav-item my-2">
              <Link to="/places/HILL STATION" className="nav-link text-secondary mb-2 d-flex text-start align-items-center" style={{fontSize : '16px'}}>
              <Mountain />  <span className="mx-3"> HILL </span>
              </Link>
            </li>
            <li className="nav-item my-2">
              <Link to="/places/FORT" className="nav-link text-secondary mb-2 d-flex text-start align-items-center" style={{fontSize : '15px'}}>
              <Castle />  <span className="mx-3"> FORT </span>
              </Link>
            </li>
            <li className="nav-item my-2">
              <Link to="/places/CAVE" className="nav-link text-secondary mb-2 d-flex text-start align-items-center" style={{fontSize : '15px'}}>
              <BrickWall />  <span className="mx-3"> CAVE </span>
              </Link>
            </li>
            <li className="nav-item my-2">
              <Link to="/places/TEMPLE" className="nav-link text-secondary mb-2 d-flex text-start align-items-center" style={{fontSize : '15px'}}>
              <Church />  <span className="mx-3"> TEMPLE </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

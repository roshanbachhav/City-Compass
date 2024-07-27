import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/Places/search/${query}`);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/tp-logo.png" alt="" />
          </a>
          <div
            className="nav-data d-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Places">
                  Places
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <Link className="dropdown-btn btn dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </Link>

                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/places">ALL</Link></li>
                    <li><Link className="dropdown-item" to="/places/HISTORICAL">HISTORICAL</Link></li>
                    <li><Link className="dropdown-item" to="/places/NATURE">NATURE</Link></li>
                    <li><Link className="dropdown-item" to="/places/BEACH">BEACH</Link></li>
                    <li><Link className="dropdown-item" to="/places/HILL">HILL</Link></li>
                    <li><Link className="dropdown-item" to="/places/FORT">FORT</Link></li>
                    <li><Link className="dropdown-item" to="/places/CAVE">CAVE</Link></li>
                    <li><Link className="dropdown-item" to="/places/TEMPLE">TEMPLE</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
            <form
              className="d-flex search-form"
              role="search"
              onSubmit={handleSearch}
            >
              <input
                className="form-control search-bar me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={handleChange}
              />
              <button className="search-btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

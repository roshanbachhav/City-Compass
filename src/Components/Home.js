import React, { Component } from "react";
import FeaturedLocations from "./FeaturedLocations";
import { BarLoader } from "react-spinners";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: {},
      limit: 33,
      types: ["FORT", "HISTORICAL", "HILL STATION", "BEACH"]
    };
  }

  async componentDidMount() {
    this.state.types.forEach(type => {
      this.fetchPlaces(type);
    });
  }

  async fetchPlaces(typeOf) {
    try {
      let apiUrl = `https://rest-api-production-ee75.up.railway.app/api/data?limit=${this.state.limit}&typeOf=${typeOf}&featured=true`;
      let response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      this.setState(prevState => ({
        places: {
          ...prevState.places,
          [typeOf]: data.places || [],
        },
      }));
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  render() {
    const { places, types } = this.state;

    return (
      <>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-5 p-5">
              <div className="main-bg-img">
                <img src="../citycompass-bg.jpeg" alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="container p-5">
                <h1>Welcome To - City Compass</h1>
                <hr className="main-heading-hr" />
                <p>Explore our website to find the finest locations effortlessly. From hidden gems to popular spots, we provide comprehensive details to help you discover the best places tailored to your interests and preferences </p>
                <hr className="main-second-heading-hr"/>
                <p>Types of places : Historical , Nature , Beach, Fort , Hill Station ,  <br /> Temple , Cave</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {types.map(type => (
          <div key={type} className="container my-5">
            <div className="row">
              <h2 className="my-3 text-center">
                Discover India's Must-Visit {type} - Highly Recommended!
              </h2>
              {places[type] && places[type].length > 0 ? (
                places[type].map((place, uniqueKey) => (
                  <div key={uniqueKey} className="col-md-4 mb-4">
                    <FeaturedLocations
                      id={place._id}
                      name={place.name}
                      typeOf={place.typeOf}
                      image={place.image}
                      location={place.location}
                    />
                  </div>
                ))
              ) : (
                <div className="row d-flex justify-content-center align-items-center">
                  <BarLoader />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      </>
    );
  }
}

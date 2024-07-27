import React, { useState, useEffect } from "react";
import '../App.css';
import { BarLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import PlacesData from "./PlacesData";

const SearchResults = () => {
  const { query } = useParams();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = `https://rest-api-production-ee75.up.railway.app/api/data/?limit=33&name=${query}`;
        const fetchApi = await fetch(api);
        if (!fetchApi.ok) {
          console.log(`Error on API ${fetchApi.status}`);
          return;
        }
        const data = await fetchApi.json();
        setPlaces(data.places);
        setLoading(false);
      } catch (exception) {
        console.log(exception);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="container-fluid">
      <h1 className="my-5 text-center">Search Results of "{query}"</h1>
      <div className="row">
        <div className="col-md-12">
          <div className="container my-5">
            <div className="row d-flex justify-content-center align-items-center">
              {places.length > 0 ? (
                !loading && 
                places.map((place, uniqueKey) => (
                  <div key={uniqueKey} className="col-md-4 mb-4">
                    <PlacesData
                      id={place._id}
                      name={place.name}
                      description={place.description.slice(0, 80) + "..."}
                      image={place.image}
                      location={place.location}
                      typeOf={place.typeOf}
                    />
                  </div>
                ))
              ) : (
                <BarLoader width={200} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

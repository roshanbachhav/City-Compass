import React from "react";
import PlacesData from "./PlacesData";
import { BarLoader } from "react-spinners";
import SideMenu from "./SideMenu";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const Places = () => {
  const { typeOf } = useParams();
  const [places, setPlaces] = React.useState([]);
  const [limit] = React.useState(6);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `https://rest-api-production-ee75.up.railway.app/api/data/?limit=${limit}&typeOf=${typeOf || ''}`;
        let response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        console.log("Fetched data:", data);
        setPlaces(data.places);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [typeOf, limit]);

  const goPrevious = async () => {
    const previousPage = page - 1;

    if (previousPage < 1) {
      console.log("No previous pages available.");
      return;
    }

    let apiUrl = `https://rest-api-production-ee75.up.railway.app/api/data/?limit=${limit}&typeOf=${typeOf || ''}&page=${previousPage}`;

    try {
      let response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      console.log("Fetched data:", data);

      if (data.places.length > 0) {
        setPlaces(data.places);
        setPage(previousPage);
      } else {
        console.log("No more data to fetch.");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const goNext = async () => {
    const nextPage = page + 1;
    let apiUrl = `https://rest-api-production-ee75.up.railway.app/api/data/?limit=${limit}&typeOf=${typeOf || ''}&page=${nextPage}`;

    try {
      let response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      console.log("Fetched data:", data);

      if (data.places.length > 0) {
        setPlaces(data.places);
        setPage(nextPage);
      } else {
        console.log("No more data to fetch.");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="my-5 text-center">Find Best Indian Locations</h1>
        <div className="row">
          <div className="col-md-2 my-4">
            <SideMenu />
          </div>
          <div className="col-md-10">
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
      <div className="container my-5 d-flex justify-content-center">
        <button
          disabled={page === 1}
          type="button"
          className="btn btn-dark"
          onClick={goPrevious}
        >
          Previous
        </button>
        <button
          disabled={page >= totalPages}
          type="button"
          className="btn btn-dark mx-3"
          onClick={goNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

Places.propTypes = {
  typeOf: PropTypes.string,
};

export default Places;

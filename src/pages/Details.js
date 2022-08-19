import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DestinationInfo from "../components/DestinationInfo";
import Cities from "../components/cities/Cities";
import Header from "../components/Header";

function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [destination, setDestination] = useState({});
  const [cities, setCities] = useState([]);
  const destinationsData = useSelector((state) => state.destination.all);
  const citiesData = useSelector((state) => state.destination.cities);

  useEffect(() => {
    const desResult = destinationsData.find((des) => des.id === parseInt(id));
    if (desResult) {
      setDestination(desResult);
      const citiesResult = citiesData.filter(
        (city) => city.destinationId === desResult.id
      );
      setCities(citiesResult);
    } else {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, [id, destinationsData, navigate]);

  return (
    <>
      {destination ? (
        <>
          <Helmet>
            <title>{destination.name}</title>
          </Helmet>
          <Header heading={destination.name} image={destination.bigImage} />
          <DestinationInfo destination={destination} />
          <Cities cities={cities} name={destination.name} />
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Details;

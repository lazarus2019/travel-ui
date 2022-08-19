import CityContents from "./CityContents";
import CityImage from "./CityImage";

function Cities({ cities, name }) {
  return (
    <div className="cities">
      <div className="container">
        <div className="cities__container">
          <h2 className="heading">cities in {name}</h2>
          <div className="row mr-minus-15 ml-minus-15">
            {cities.length > 0
              ? cities.map((city) => (
                  <div className="col-3 p-15" key={city.id}>
                    <div className="cities__body">
                      <CityImage
                        image={city.image}
                        status={city.status}
                        name={city.name}
                      />
                      <CityContents
                        duration={city.duration}
                        name={city.name}
                        price={city.price}
                        room={city.room}
                        food={city.food}
                      />
                    </div>
                  </div>
                ))
              : `No cities in ${name}`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cities;

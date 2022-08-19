import Facilities from "./Facilities";
import { BsStopwatch } from "react-icons/bs";

function CityContents({ duration, name, price, room, food }) {
  const formate = (value) => {
    return `${value}.00`;
  };
  return (
    <div className="cities__body__contents">
      <div className="cities__body__contents__top">
        <div className="cities__body__contents__top__name">{name}</div>
        <div className="cities__body__contents__top__duration">
          <BsStopwatch size={18} color="#df2189" />
          <div className="cities__body__contents__top__duration__time">
            {duration}
          </div>
        </div>
      </div>
      <div className="cities__body__contents__price">
        <span className="cities__body__contents__price__dollar">$</span>
        {formate(price)}
      </div>
      <Facilities value={room} name="room" />
      <Facilities value={food} name="food" />
      <div className="cities__body__contents__button">
        <button className="btn-dark-sm">Buy now</button>
      </div>
    </div>
  );
}

export default CityContents;

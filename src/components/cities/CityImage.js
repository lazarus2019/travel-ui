import { LazyLoadImage } from "react-lazy-load-image-component";
function CityImage({ image, name, status }) {
  return (
    <div className="cities__body__image">
      <LazyLoadImage src={image} alt={name} />
      <div
        className={
          status === "Bestselling"
            ? "bestselling"
            : status === "New"
            ? "new"
            : status === "Hot"
            ? "hot"
            : ""
        }
      >
        {status}
      </div>
    </div>
  );
}

export default CityImage;

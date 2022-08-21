import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { setOpen, setCurrent } from "../../redux/features/gallerySlice";

function LightBox() {
  const dispatch = useDispatch();
  const currentImage = useSelector((state) => state.gallery.current);

  const closeLightBox = (e) => {
    if (e.target.getAttribute("class") === "gallery__lightbox") {
      dispatch(setOpen(false));
      dispatch(setCurrent({}));
    }
  };

  return (
    <div className="gallery__lightbox" onClick={closeLightBox}>
      <h4>{currentImage.name}</h4>
      <div className="gallery__lightbox__card">
        <div className="gallery__lightbox__card__image">
          <LazyLoadImage src={currentImage.image} alt={currentImage.name} />
        </div>
      </div>
    </div>
  );
}

export default LightBox;

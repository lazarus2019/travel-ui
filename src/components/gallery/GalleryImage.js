import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { setCurrent, setOpen } from "../../redux/features/gallerySlice";

function GalleryImage({ glr }) {
  const dispatch = useDispatch();

  const openLightBox = (imageObject) => {
    dispatch(setOpen(true));
    dispatch(setCurrent(imageObject));
  };

  return (
    <div className="col-3">
      <div className="gallery__image animation">
        <LazyLoadImage src={glr.image} onClick={() => openLightBox(glr)} />
      </div>
    </div>
  );
}

export default GalleryImage;

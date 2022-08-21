import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import GalleryImage from "./GalleryImage";
import LightBox from "./LightBox";

function Gallery() {
  const [open, setOpen] = useState(false);
  const galleryData = useSelector((state) => state.gallery.all);
  const isOpen = useSelector((state) => state.gallery.isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const [heading] = useState("Travelers captured images");
  return (
    <div className="gallery">
      {open ? <LightBox /> : ""}
      <div className="container">
        <h2 className="heading mb-55 headingAnimation">{heading}</h2>
        <div className="row">
          {galleryData.length > 0
            ? galleryData.map((gallery) => (
                <GalleryImage key={gallery.id} glr={gallery} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

import { LazyLoadImage } from "react-lazy-load-image-component";
import assets from "../../assets";
import React from "react";

function AboutImage() {
  const aboutImage = assets.images.about;
  return (
    <div className="page__image">
      <LazyLoadImage src={aboutImage} alt="about image" />
    </div>
  );
}

export default AboutImage;

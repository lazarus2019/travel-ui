import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";

import assets from "../assets";

function Header({ heading, paragraph, children, image }) {
  const navigate = useNavigate();
  const [state] = useState({
    video: assets.videos.header,
    poster: assets.images.poster,
    logo: assets.images.logo,
  });
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="container pr">
        <div className="header__logo">
          <LazyLoadImage src={state.logo} alt="Logo" onClick={goToHome} />
        </div>
      </div>
      <div className="header__video">
        {image ? (
          <LazyLoadImage src={image} />
        ) : (
          <video src={state.video} autoPlay loop muted poster={state.poster} />
        )}
      </div>
      <div className="header__contents">
        <div className="container">
          <div className="header__contents__text">
            <div className="header__contents__text__child">
              <h1 className="header__contents__text__child__h1">{heading}</h1>
              <p className="header__contents__text__child__p">{paragraph}</p>
              <div className="header__contents__text__child__link">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

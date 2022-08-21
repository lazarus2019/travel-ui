import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import assets from "../../assets";
function FooterIntro() {
  const [state] = useState({
    logo: assets.images.footer.logo,
    intro:
      "Travel friends is a traveling agency, we arrange tours to the world famous and most beautiful countries, Since 2005 we provide high quality services to our valuable customers.",
  });
  return (
    <div className="footer__intro">
      <div className="footer__intro__image animation">
        <LazyLoadImage src={state.logo} alt="footer logo" />
      </div>
      <div className="footer__intro__msg animation">{state.intro}</div>
    </div>
  );
}

export default FooterIntro;

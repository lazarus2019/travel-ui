import FooterIntro from "./FooterIntro";
import assets from "../../assets";
import FooterLinks from "./FooterLinks";
function Footer() {
  const footerBackground = `url(${assets.images.footer.background})`;

  return (
    <footer className="footer" style={{ background: footerBackground }}>
      <div className="footer__container">
        <div className="container">
          <div className="footer__container__block">
            <div className="row mr-minus-15 ml-minus-15">
              <div className="col-6 p-15">
                <FooterIntro />
              </div>
              <div className="col-6 p-15">
                <FooterLinks />
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>&copy; copy right travel friends {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

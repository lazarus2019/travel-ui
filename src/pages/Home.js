import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";

import Login from "../auth/Login";
import Register from "../auth/Register";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { setOpen, setCurrent } from "../redux/features/modalSlice";
import Destinations from "../components/Destinations";
import Services from "../components/services/Services";
import Reviews from "../components/reviews/Reviews";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";

function Home() {
  const dispatch = useDispatch();
  const [state] = useState({
    heading: "We are travel friends",
    paragraph:
      "Come and join us we travel the most famous and beautiful places in the world",
  });

  const [registerModal] = useState("registerModal");
  const [loginModal] = useState("loginModal");

  const clickHandler = () => {
    dispatch(setOpen(true));
    dispatch(setCurrent(registerModal));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Travel Friends</title>
        <meta
          name="description"
          content="Travel to the world with travel frirends"
        />
        <meta name="keywords" content="travel, travel tours, airline" />
      </Helmet>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button className="btn-default" onClick={clickHandler}>
          Get Started
        </button>
      </Header>
      <Modal current={registerModal}>
        <Register currentModal={loginModal} />
      </Modal>
      <Modal current={loginModal}>
        <Login currentModal={registerModal} />
      </Modal>
      <Destinations />
      <Services />
      <Reviews />
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;

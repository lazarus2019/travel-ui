import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import assets from "../assets";

function NotFound() {
  const [state] = useState({
    heading: "Oops, 404",
    paragraph: "Sorry, the page you are looking for does not exist.",
    image: assets.images.notfound,
  });

  return (
    <>
      <Helmet>
        <title>Not found</title>
        <meta name="description" content="travel friends not found page" />
      </Helmet>
      <Header
        heading={state.heading}
        paragraph={state.paragraph}
        image={state.image}
      >
        <Link to="/" className='btn-default'>Go to Home</Link>
      </Header>
    </>
  );
}

export default NotFound;

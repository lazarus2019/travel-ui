import React, { useState } from "react";
import { Link } from "react-router-dom";

import Toggle from "./Toggle";

function Nav() {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <Toggle open={open} onClick={clickHandler} />

      {open ? (
        <div className="navLayer" onClick={() => setOpen(false)}></div>
      ) : (
        ""
      )}
      <div className={open ? "nav nav--open" : "nav nav--close"}>
        <div className="nav__content">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </div>
    </>
  );
}

export default Nav;

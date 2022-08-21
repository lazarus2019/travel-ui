import React from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

function ShowFooterLinks({ links, external }) {
  return links.length > 0 ? (
    <ul className="footer__ul animation">
      {links.map((link) => (
        <li className="footer__ul__li" key={link.id}>
          {external ? (
            <>
              <BsChevronRight size={12} />{" "}
              <a href={link.route} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </>
          ) : (
            // link.hasOwnProperty('route') ? link.route : `/details/${link.id}`
            <>
              <BsChevronRight size={12} />{" "}
              <Link to={link.route ?? `/details/${link.id}`}>{link.name}</Link>
            </>
          )}
        </li>
      ))}
    </ul>
  ) : (
    ""
  );
}

export default ShowFooterLinks;

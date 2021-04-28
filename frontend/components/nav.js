import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <nav className="uk-navbar-container uk-navbar">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>Strapi Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
        </div>
      </nav>
    </div>
  );
};

export default Nav;
import React, { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
import { NAV_LINKS } from "../../statics/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container-fluid">
      <div className="nav-wrapper container">
        <div className="nav">
          <div className="nav__logo uppercase">
            <a href="#">Manav.</a>
          </div>
          <div className="nav__toggle" onClick={handleToggle}>
            {isOpen ? <TfiClose /> : <TbMenu />}
          </div>
        </div>
        {isOpen && (
          <div className="nav-items-warpper">
            <ul className="nav-items SMN_effect-25">
              {NAV_LINKS.map((currNavLink, index) => {
                return (
                  <li
                    className="nav-item"
                    key={index}
                    onClick={() => setIsOpen(false)}
                  >
                    <a href={currNavLink.link}>{currNavLink.label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

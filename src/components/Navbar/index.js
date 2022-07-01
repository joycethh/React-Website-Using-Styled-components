import React from "react";

import { Nav, NavbarContainer, NavLogo } from "./NavbarElement";

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Tang</NavLogo>
          <h1>Hey</h1>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;

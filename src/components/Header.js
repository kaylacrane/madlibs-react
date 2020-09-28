import React from "react";
import { StyledHeader } from "./StyledHeader";

function Header() {
  return (
    <StyledHeader>
      <h1 className="header-title">silly stories</h1>
      <p className="header-text">mad libs story generator </p>
    </StyledHeader>
  );
}

export default Header;

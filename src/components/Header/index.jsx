import React from "react";
import { HeaderContainer } from "./Header";

import Options from "../Options";
import Logo from "../Logo";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Options />
    </HeaderContainer>
  );
};

export default Header;

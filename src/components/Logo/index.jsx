import React from "react";
import { RiBook3Line } from "react-icons/ri";
import { Icon, Span, Title } from "./Logo";

const Logo = () => {
  return (
    <>
      <Icon>
        <RiBook3Line />  
      </Icon>
      <Title>
        Bo<Span>oks</Span>
      </Title>
    </>
  );
};

export default Logo;

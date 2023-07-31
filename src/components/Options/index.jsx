import React from "react";
import { OptionsContainer, Option, Paragraph, Icons } from "./Options";

import { FiUser } from "react-icons/fi";
import { BsBag } from "react-icons/bs";

const options = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

const Options = () => {
  return (
    <OptionsContainer>
      {options.map((option, index) => (
        <Option>
          <Paragraph key={index}>{option}</Paragraph>
        </Option>
      ))}
      <Icons>
        <FiUser />
      </Icons>
      <Icons>
        <BsBag />
      </Icons>
    </OptionsContainer>
  );
};

export default Options;

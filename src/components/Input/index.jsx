import React from "react";
import { InputStyle } from "./Input";

const Input = ({ placeholder, onBlur }) => {
  return (
  <InputStyle 
  placeholder={placeholder} 
  onBlur={onBlur} 
  />
  );
}

export default Input;

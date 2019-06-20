import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  width: 130px;
  border-radius: 5px;
  margin: 5px;
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  padding: 1px 7px 2px;
  align-items: flex-start;
  text-align: center;
  cursor: pointer;
  color: #fff;
  background-color: #000;
  box-sizing: border-box;
  padding: 2px 6px 3px;
  border-width: 2px;
  border-style: outset;
  border-image: initial;
`;

const Button = ({ children, ...btnProps }) => {
  return <StyledButton {...btnProps}>{children}</StyledButton>;
};

export default Button;

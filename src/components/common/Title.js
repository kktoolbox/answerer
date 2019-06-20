import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin: 20px 0px;
`;

const Title = ({ children, ...TextProps }) => {
  return <StyledTitle {...TextProps}>{children}</StyledTitle>;
};

export default Title;

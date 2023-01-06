import { Nav } from "./Nav";
import styled from "styled-components";
import { Colors } from "../../GlobalStyle";
import { FlexDiv } from "../divs/FlexDiv";
import React from "react";

export const Header: React.FC = () => {
  return (
    <HeaderStyled id="header">
      <HeaderContent>
        <Nav />
      </HeaderContent>
    </HeaderStyled>
  );
};

const HeaderStyled = styled(FlexDiv)`
  background-color: ${Colors.mediumGrey};
  padding: 0 0.6rem;
  height: 4.3rem;
`;

const HeaderContent = styled(FlexDiv)`
  width: 1200px;
  justify-content: space-between;
`;

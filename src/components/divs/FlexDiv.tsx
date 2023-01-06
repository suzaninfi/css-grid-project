import styled from "styled-components";
import React from "react";
import { WideScreenOnly } from "./WideScreenOnly";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const FlexDiv: React.FC<DivProps> = (props => {
  return <CenteredFlexDiv className={props.className} {...props}>{props.children}</CenteredFlexDiv>;
});

export const WideScreenOnlyFlexDiv: React.FC<DivProps> = (props) => {
  return (
    <CenteredWideScreenOnlyDiv className={props.className} {...props}>
      {props.children}
    </CenteredWideScreenOnlyDiv>
  );
};

const CenteredFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CenteredWideScreenOnlyDiv = styled(WideScreenOnly)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

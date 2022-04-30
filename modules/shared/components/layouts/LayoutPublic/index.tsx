import React from "react";
import { Container, Image, Title, Description } from "./styles";
const LayoutPublic = (props: any) => {
  const children = props.children;
  return <Container>{children}</Container>;
};
export default LayoutPublic;

import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Policy = () => {
  return (
    <Wrapper>
      <Container>
        <span>
          © {new Date().getFullYear()} Toutem All rights reserved. | Terms and
          Conditions | Return policy
        </span>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Quicksand";
  background-color: #f9de80;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #32391c;
  padding: 1rem 0;
`;

export default Policy;

import React from "react";
import styled from "styled-components";
import coImg from "../assets/coImg.svg";
import bg from "../assets/collection.svg";
import { collection } from "../utils/constants";
import Article from "./Article";

const Collection = () => {
  return (
    <Wrapper>
      <div></div>
      <Article {...collection} variant="outlined" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
`;

export default Collection;

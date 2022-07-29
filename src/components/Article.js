import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const Article = ({
  title,
  content,
  link = "#",
  variant = "contained",
  btn = "show now",
  label = false,
}) => {
  return (
    <Wrapper className="left-section">
      <div>
        {label && <span className="label">New</span>}
        <h1>
          {title.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </h1>
        <p>{content}</p>
        <NewBtn variant={variant} color="secondary" href={link}>
          {btn}
        </NewBtn>
      </div>
    </Wrapper>
  );
};

const NewBtn = styled(Button)`
  margin-top: 1.5rem;
  border-radius: 5px;
  min-width: 175px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  line-height: 97.9%;
  letter-spacing: 0.01em;
  padding: 0.85rem 2.5rem;
  border-width: 2px;
`;

const Wrapper = styled.article`
  .label {
    background-color: #f9de80;
    font-size: 1.875rem;
    font-weight: bold;
    padding: 0.375rem 1.1rem;
    color: #424b25;
    margin-bottom: 1.25rem;
    display: inline-block;
    line-height: 37.08px;
    text-transform: capitalize;
  }
  h1 {
    color: #424b25;
    font-weight: 500;
    font-size: 5rem;
    line-height: 78.32px;
    margin-bottom: 0;
    margin-top: 0;
    font-family: "Abril Fatface", "cursive", "Arial";
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 156.5%;
    letter-spacing: 0.01em;
    color: #363d1e;
  }
`;

export default Article;

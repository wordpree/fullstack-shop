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
  titleFont = "80px",
  lineHeight = "78.32px",
  color = "#424b25",
  btnWidth = "175px",
}) => {
  const cssStyle = { titleFont, lineHeight, color };
  return (
    <Wrapper className="left-section" {...cssStyle}>
      <div>
        {label && <span className="label">New</span>}
        <h1>
          {title.map((t, index) => (
            <span key={t + index}>{t}</span>
          ))}
        </h1>
        <p>{content}</p>
        <NewBtn
          variant={variant}
          color="secondary"
          href={link}
          width={btnWidth}
        >
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
  padding: 0.85rem;
  border-width: 2px;
  width: ${(props) => props.width};
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
    color: ${(props) => props.color};
    font-weight: 500;
    line-height: ${(props) => props.lineHeight};
    margin-bottom: 0;
    margin-top: 0;
    font-family: "Abril Fatface", "cursive", "Arial";
    font-size: ${(props) => props.titleFont};
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 156.5%;
    letter-spacing: 0.01em;
    color: #363d1e;
    font-family: "Quicksand", sans-serif;
  }
`;

export default Article;

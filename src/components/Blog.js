import React from "react";
import styled from "styled-components";
import { Button, Container } from "@mui/material";
import BlogCard from "./BlogCard";
import { blog } from "../utils/constants";

const Blog = () => {
  return (
    <Wrapper>
      <h2>Blog</h2>
      <Container className="container">
        {blog.map((b) => (
          <BlogCard {...b} key={b.title} />
        ))}
      </Container>
      <Button
        color="secondary"
        variant="outlined"
        sx={{
          width: 275,
          margin: "3.75rem auto 0",
          borderWidth: 2,
          display: "flex",
        }}
      >
        See all
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0 3rem;
  .container {
    display: flex;
  }
  h2 {
    font-family: "Abril Fatface", "cursive", "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 97.9%;
    letter-spacing: 0.01em;
    color: #5f6c37;
    text-align: center;
  }
`;

export default Blog;

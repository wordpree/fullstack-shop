import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const BlogCard = ({ title, desc, img, alt }) => {
  return (
    <Wrapper sx={{ maxWidth: 368 }} elevation={2}>
      <CardMedia component="img" height="200" image={img} alt={alt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="title">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="desc">
          {desc}
        </Typography>
      </CardContent>
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    font-family: "Quicksand", sans-serif;
    color: #5f6c37;
    border-bottom: 1px solid #ccdb99;
    padding-bottom: 0.5rem;
  }
  .desc {
    padding-top: 0.5rem;
  }
`;

export default BlogCard;

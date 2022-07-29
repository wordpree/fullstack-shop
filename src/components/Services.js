import React from "react";
import styled from "styled-components";
import { Paper } from "@mui/material";
import ar from "../assets/ar.svg";
import diff from "../assets/diff.svg";
import eo from "../assets/eo.svg";
import nc from "../assets/nc.svg";
import bg from "../assets/texture.svg";

const Services = () => {
  const icons = [eo, nc, diff, ar];
  return (
    <ServicesContainer>
      {icons.map((i) => (
        <Paper
          key={i}
          sx={{
            height: 274,
            width: 274,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: i === diff ? "#5F6C37" : "#FFFDF5",
            borderRadius: "0px 20px 0px 20px",
            marginRight: "-10px",
          }}
        >
          <img src={i} alt="icon" />
        </Paper>
      ))}
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),
    url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 12rem;
  padding: 5rem 3rem;
  display: flex;
  margin-left: calc(576px - 50vw);
  margin-right: calc(576px - 50vw);
  justify-content: center;
`;
export default Services;

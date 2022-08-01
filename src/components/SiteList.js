import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SiteList = ({ title, list }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <div className="list">
        {list.map((l) => (
          <NavLink key={l.label} to={l.link} className="link">
            {l.label}
          </NavLink>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-right: 1.75rem;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }
  .list {
    display: flex;
    flex-direction: column;
  }
  .link {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 33px;
    color: #32391c;
    text-decoration: none;
  }
`;

export default SiteList;

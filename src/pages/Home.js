import React from "react";
import {
  Banner,
  Collection,
  Services,
  BestSeller,
  Soap,
  Trend,
  Blog,
} from "../components";

const Home = () => {
  return (
    <main>
      <Banner />
      <Services />
      <Collection />
      <BestSeller />
      <Soap />
      <Trend />
      <Blog />
    </main>
  );
};

export default Home;

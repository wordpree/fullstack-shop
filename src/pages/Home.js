import React from "react";
import { Banner, Collection, Services, BestSeller, Soap } from "../components";

const Home = () => {
  return (
    <main>
      <Banner />
      <Services />
      <Collection />
      <BestSeller />
      <Soap />
    </main>
  );
};

export default Home;

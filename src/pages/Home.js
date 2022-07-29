import React from "react";
import { Banner, Collection, Services } from "../components";

const Home = () => {
  return (
    <main>
      <Banner />
      <Services />
      <Collection />
      <div style={{ height: "400px" }}></div>
    </main>
  );
};

export default Home;

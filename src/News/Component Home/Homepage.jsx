import React from "react";
import Iklan from "./Iklan";
import Category from "./Category";

const Home = () => {
  return (
    <div className="bg-[--quarternary]">
      <Iklan />
      <div>
        <Category />
      </div>
    </div>
  );
};

export default Home;

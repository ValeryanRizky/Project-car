import React from "react";
import Iklan from "../Component Home/Iklan";
import Category from "../Component Home/Category/Category";
import Card from "../Component Home/CardHome/CardHome";
import HotSell from "../Component Home/HotSell";
import Footer from "../Component Home/footer";

const Home = () => {
  return (
    <div className="bg-[--quarternary]">
      <Iklan />
      <div>
        <Category />
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <HotSell/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import ComponentCard from "./component-card";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="font-sans">
      <div className="flex w-full justify-between px-10">
        <p className="text-black font-semibold cursor-pointer text-2xl">
          Car Sale
        </p>
        <Link to={"/FlashSell"}>
          <p className="text-black font-semibold cursor-pointer text-2xl">
            See More
          </p>
        </Link>
      </div>
      <div className="flex gap-x-8 p-6">
        <ComponentCard
          img="https://apollo-singapore.akamaized.net/v1/files/6v97l1pj2seh3-ID/image;s=780x0;q=60"
          penumpang="2"
          km="10.000 km"
          type="Sedan"
          title="BMW M4 Competition (2023)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 2.659.000.000,00"
        />
        <ComponentCard
          img="https://apollo-singapore.akamaized.net/v1/files/xjl4k8s1fuvx2-ID/image;s=780x0;q=60"
          penumpang="2"
          km="10.000 km"
          type="Sedan"
          title="Mercedes-Benz S-Class (2011)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp2.740.000.000,00"
        />
        <ComponentCard
          img="https://apollo-singapore.akamaized.net/v1/files/e84aq181boo2-ID/image;s=780x0;q=60"
          penumpang="2"
          km="14.000 km"
          type="Sedan"
          title="Porsche Cayman (2013)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp1.890.000.000"
        />
      </div>
    </div>
  );
};

export default Card;

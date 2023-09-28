import React from "react";
import ComponentCard from "../Component Home/CardHome/component-card";
import { Link } from "react-router-dom";

const HotSell = () => {
  return (
    <div>
      <div className="flex w-full justify-between px-10">
        <p className="text-black font-semibold  text-2xl">Hot Sell</p>
        <Link to={"/HotSell"}>
          <p className="text-black font-semibold  text-2xl">More Category</p>
        </Link>
      </div>
      <div className="flex gap-x-8 p-6">
        <ComponentCard
          img="https://apollo-singapore.akamaized.net/v1/files/0lp72iy5dfy32-ID/image;s=780x0;q=60"
          penumpang="4"
          km="40.000 km"
          type="SUV"
          title="Porsche Cayenne (2012)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp8.300.000.000"
        />
        <ComponentCard
          img="https://www.hyundaimobil.net/wp-content/uploads/2023/04/wGD7pvxb02gTmuFIpAVyCTisc4nixbopcwpg2aac.png"
          penumpang="4"
          km="9.500 km"
          type="SUV"
          title="Hyundai Ioniq 5 (2023)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 783.100.000,00"
        />
        <ComponentCard
          img="https://apollo-singapore.akamaized.net/v1/files/9tiymbf7v6hl1-ID/image;s=780x0;q=60"
          penumpang="2"
          km="8.500 km"
          type="Sedan"
          title="Ferrari 488 (2018)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp14.600.000.000"
        />
      </div>
    </div>
  );
};

export default HotSell;

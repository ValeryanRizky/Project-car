import React from "react";
import ComponentCard from "../CardHome/component-card";

const Ferrari = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-x-4 p-6">
        <ComponentCard
          img="https://apollo-singapore.akamaized.net/v1/files/67un8sxd3dyu3-ID/image;s=780x0;q=60"
          penumpang="2"
          km="5.000 km"
          type="Sedan"
          title="  Ferrari F8 Spider (2023)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 12.200.000.000"
        />
        <ComponentCard
          img="https://apollo-singapore.akamaized.net/v1/files/9tiymbf7v6hl1-ID/image;s=780x0;q=60"
          penumpang="2"
          km="8.500 km"
          type="Sedan"
          title="  Ferrari 488 (2018)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 9.099.000.000"
        />
      </div>
    </div>
  );
};

export default Ferrari;

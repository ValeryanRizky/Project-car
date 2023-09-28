import React from "react";
import ComponentCard from "../CardHome/component-card";

const Toyota = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-x-4 p-6">
        <ComponentCard
          img="https://static.carmudi.co.id/uD3Un5_wIPeCmcDi1-q0u78RanY=/900x405/http://trenotomotif.com/ncs/images/Thumbnail/Thumbnail2022/Toyota-86.jpg"
          penumpang="2"
          km="5.000 km"
          type="Sedan"
          title="Toyota 86 (2023)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 1.000.000.000"
        />
        <ComponentCard
          img="https://static.carmudi.co.id/ToT8W3_e-rfl3ZMeNFluloNWFW4=/900x405/https://trenotomotif.com/ncs/images/TOYOTA/New-Camry-2021/New-Toyota-Camry.jpg"
          penumpang="2"
          km="5.000 km"
          type="Sedan"
          title="Toyota Camry (2023)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 793.300.000"
        />
      </div>
    </div>
  );
};

export default Toyota;

import React from "react";
import ComponentCard from "../CardHome/component-card";

const Mazda = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-x-4 p-6">
        <ComponentCard
          img="https://imgcdn.oto.com/medium/gallery/exterior/23/2199/mazda-3-2019-84418.jpg"
          penumpang="4"
          km="2.000 km"
          type="Suv"
          title="Mazda 3 Hatchback(2023)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 555.000.000"
        />
        <ComponentCard
          img="https://static.carmudi.co.id/PP7L9Gh2HCFPRECtCxLYezvVOss=/900x405/https://trenotomotif.com/ncs/images/Mazda/Mazda%20CX-8/thumbnail.jpg"
          penumpang="4"
          km="2.000 km"
          type="Suv"
          title="Mazda CX-8(2023)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 798.800.000"
        />
        <ComponentCard
          img="https://www.autofacil.es/wp-content/uploads/2022/04/mazda_cx-60.jpeg"
          penumpang="4"
          km="2.000 km"
          type="Suv"
          title="Mazda CX-60(2023)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 1.188.000.000"
        />
      </div>
    </div>
  );
};

export default Mazda;

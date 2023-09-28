import React from "react";
import ComponentCard from "../CardHome/component-card";

const Honda = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-x-4 p-6">
        <ComponentCard
          img="https://apollo-singapore.akamaized.net/v1/files/4paq1gh106gi-ID/image;s=780x0;q=60"
          penumpang="2"
          km="20.000 km"
          type="Sedan"
          title="Honda Civic Type R (2021)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 1.177.000.000"
        />
        <ComponentCard
          img="https://apollo-singapore.akamaized.net/v1/files/gs7hyixjbgxz2-ID/image;s=780x0;q=60"
          penumpang="2"
          km="14.500 km"
          type="Sedan"
          title=" Honda Civic Type R (2023)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 1.399.000.000,00"
        />
         <ComponentCard
          img="https://static.carmudi.co.id/FMy2SaSyv3IzmpinU5VF-1nG7uE=/900x405/https://trenotomotif.com/ncs/images/honda/Honda%20Accord/OK_%20Honda%20Accord.jpg"
          penumpang="4"
          km="10.500 km"
          type="Sedan"
          title=" Honda Accord(2023)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 787.300.000"
        />
      </div>
    </div>
  );
};

export default Honda;

import React from "react";
import ComponentCard from "../CardHome/component-card";

const Bmw = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-x-4 p-6">
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
          img="https://apollo-singapore.akamaized.net/v1/files/0ny2mnd1suz53-ID/image;s=780x0;q=60"
          penumpang="4"
          km="14.500 km"
          type="SUV"
          title=" BMW X3M Competition (2011)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 1.850.000.000"
        />
        <ComponentCard
          img="https://apollo-singapore.akamaized.net/v1/files/j6nxmimigixo2-ID/image;s=780x0;q=60"
          penumpang="4"
          km="16.000 km"
          type="Sedan"
          title="Bmw 640i (2014)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 725.000.000"
        />
        <ComponentCard
          img="src/assets/bmw1.jpg"
          penumpang="4"
          km="16.000 km"
          type="Sedan"
          title="Bmw 320i (2020)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 745.000.000"
        />
        <ComponentCard
          img="https://static.carmudi.co.id/dYvaF6olCMPplaE1rTjgfAcFUKA=/900x405/https://trenotomotif.com/ncs/images/BMW/BMW%20330i%20M%20Sport/BMW_330i_M_Sport.jpg"
          penumpang="4"
          km="10.000 km"
          type="Sedan"
          title="Bmw 330i (2023)"
          desc="Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order."
          harga="Rp 1.240.000.000"
        />
        <ComponentCard
          img="https://static.carmudi.co.id/mgSZRe9qMQjxMcuSi6SwEIDopQA=/900x405/https://trenotomotif.com/ncs/images/BMW/530i/530i_thumbnail.jpg"
          penumpang="4"
          km="10.000 km"
          type="Sedan"
          title="Bmw 530i (2023)"
          desc="Here are the biggest enterprise technology acquisitions of
          2021 so far, in reverse chronological order."
          harga="Rp 1.525.000.000"
        />
      </div>
    </div>
  );
};

export default Bmw;

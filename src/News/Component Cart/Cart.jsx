import React from "react";
import ComponentCart from "./component-cart";

const Cart = () => {
  return (
    <div>
      <div className="text-3xl p-10 font-bold w-full border-b border-black">
        <p>Your Cart</p>
      </div>
      <div className="p-4">
        <ComponentCart
          img="https://apollo-singapore.akamaized.net/v1/files/6v97l1pj2seh3-ID/image;s=780x0;q=60"
          title="BMW M4 Competition (2023)"
          harga="Rp 2.659.000.000,00"
        />
        <ComponentCart
          img="https://apollo-singapore.akamaized.net/v1/files/xjl4k8s1fuvx2-ID/image;s=780x0;q=60"
          title="Mercedes-Benz S-Class (2011)"
          harga="Rp2.740.000.000,00"
        />
        <ComponentCart
          img="https://apollo-singapore.akamaized.net/v1/files/e84aq181boo2-ID/image;s=780x0;q=60"
          title="Porsche Cayman (2013)"
          harga="Rp1.890.000.000"
        />
        <ComponentCart
          img="https://apollo-singapore.akamaized.net/v1/files/0lp72iy5dfy32-ID/image;s=780x0;q=60"
          title="Porsche Cayenne (2012)"
          harga="Rp8.300.000.000"
        />
        <ComponentCart
          img="https://www.hyundaimobil.net/wp-content/uploads/2023/04/wGD7pvxb02gTmuFIpAVyCTisc4nixbopcwpg2aac.png"
          title="Hyundai Ioniq 5 (2023)"
          harga="Rp 783.100.000,00"
        />
        <ComponentCart
          img="https://apollo-singapore.akamaized.net/v1/files/9tiymbf7v6hl1-ID/image;s=780x0;q=60"
          title="Ferrari 488 (2018)"
          harga="Rp14.600.000.000"
        />
      </div>
    </div>
  );
};

export default Cart;

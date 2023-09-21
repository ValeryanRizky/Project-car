import React from "react";
import ComponentCategory from "./component-category";

const Category = () => {
  return (
    <div >
      <div className="flex w-full justify-between px-10">
        <p className="text-black font-semibold  text-2xl">category</p>
        <p className="text-black font-semibold  text-2xl">More Category</p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-8 p-8 w-full">
        <ComponentCategory img="https://bmw.astra.co.id/wp-content/uploads/2023/07/BMW.svg_.png" title="Bmw"/>
        <ComponentCategory img="https://id-test-11.slatic.net/original/927243d41ec4d1613a5f3bc6521e36de.jpg" title="Honda"/>
        <ComponentCategory img="https://w7.pngwing.com/pngs/789/113/png-transparent-scuderia-ferrari-car-auto-avio-costruzioni-815-fiat-ferrari-horse-logo-car-thumbnail.png" title="Ferarri"/>
        <ComponentCategory img="https://w7.pngwing.com/pngs/344/173/png-transparent-toyota-alphard-car-lexus-daihatsu-boon-toyota-emblem-trademark-logo.png" title="Toyota"/>
        <ComponentCategory img="https://banner2.cleanpng.com/20180331/pgw/kisspng-suzuki-sx4-car-logo-company-suzuki-5abfeba080daa7.9470009915225271365278.jpg" title="Suzuki"/>
        <ComponentCategory img="https://qph.cf2.quoracdn.net/main-qimg-c35b86dc729998825851b05f7eb7d661-lq" title="Wuling"/>
        <ComponentCategory img="https://w7.pngwing.com/pngs/205/26/png-transparent-daihatsu-hd-logo.png" title="Daihatsu"/>
        <ComponentCategory img="https://w7.pngwing.com/pngs/309/569/png-transparent-mazda3-car-mazda-bt-50-mazda-cx-9-mazda-car-logo-brand-emblem-trademark-logo.png" title="Mazda"/>
        <ComponentCategory img="https://w7.pngwing.com/pngs/184/947/png-transparent-mitsubishi-motors-logo-mitsubishi-angle-text-triangle.png" title="Mitsubishi"/>
        <ComponentCategory img="src/assets/logo Hyundai.png" title="Hyundai"/>
        <ComponentCategory img="https://png.pngtree.com/png-clipart/20200225/original/pngtree-mercedes-benz-logo-vector-or-color-illustration-png-image_5274086.jpg" title="Mercedes-benz"/>
        <ComponentCategory img="https://w7.pngwing.com/pngs/976/246/png-transparent-ford-motor-company-ford-fiesta-ford-mustang-car-ford-emblem-truck-logo.png" title="Ford"/>
      </div>
    </div>
  );
};

export default Category;

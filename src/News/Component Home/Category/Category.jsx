import React from "react";
import ComponentCategory from "./component-category";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="font-sans">
      <div className="flex w-full justify-between px-10">
        <p className="text-black font-semibold  text-2xl">category</p>
        <p className="text-black font-semibold  text-2xl">More Category</p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-8 p-8 w-full">
        <Link to={'/DetailBmw'}>
        <ComponentCategory img="https://bmw.astra.co.id/wp-content/uploads/2023/07/BMW.svg_.png" title="Bmw"/>
        </Link>
        <Link to={'/DetailHonda'}>
        <ComponentCategory img="https://id-test-11.slatic.net/original/927243d41ec4d1613a5f3bc6521e36de.jpg" title="Honda"/>
        </Link>
        <Link to={'/DetailFerrari'}>
        <ComponentCategory img="https://w7.pngwing.com/pngs/789/113/png-transparent-scuderia-ferrari-car-auto-avio-costruzioni-815-fiat-ferrari-horse-logo-car-thumbnail.png" title="Ferarri"/>
        </Link>
        <Link to={'/DetailToyota'}>
        <ComponentCategory img="https://w7.pngwing.com/pngs/344/173/png-transparent-toyota-alphard-car-lexus-daihatsu-boon-toyota-emblem-trademark-logo.png" title="Toyota"/>
        </Link>
        <Link to={'/DetailMazda'}>
        <ComponentCategory img="https://w7.pngwing.com/pngs/309/569/png-transparent-mazda3-car-mazda-bt-50-mazda-cx-9-mazda-car-logo-brand-emblem-trademark-logo.png" title="Mazda"/>
        </Link>
        <ComponentCategory img="src/assets/logo Hyundai.png" title="Hyundai"/>
        <ComponentCategory img="https://png.pngtree.com/png-clipart/20200225/original/pngtree-mercedes-benz-logo-vector-or-color-illustration-png-image_5274086.jpg" title="Mercedes-benz"/>
        <ComponentCategory img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnGfVntu3wfSGVsMJM71qEYGdXuoh3nCKceJpU-X9AzHAM0sLiuqq9FyriGv4I4imnmA&usqp=CAU" title="Porsche"/>
        <ComponentCategory img="https://images.ctfassets.net/vx4kxymiofne/4upqUjg5V1PnG0iJJ5iylS/14748e85aa83d7bcfe39c07991b4028a/AUDI_Brand_Logo.png" title="Audi"/>      
        </div>
    </div>
  );
};

export default Category;

import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const DetailCar = () => {
  return (
    <div>
      <div className="flex mt-4 p-6">
        <div>
          <img
            className="rounded-[10px] h-[455px] w-[800px]"
            src="https://apollo-singapore.akamaized.net/v1/files/6v97l1pj2seh3-ID/image;s=780x0;q=60"
            alt=""
          />
        </div>
        <div className="mt-[60px] p-6 flex flex-col">
          <div>
            <p className="text-lg font-bold">2023 BMW M4 Competition</p>
          </div>
          <div className="flex">
            <p className="font-semibold">10.000 km</p>
            <p className="px-1">|</p>
            <p className="font-semibold">Sedan</p>
          </div>
          <div>
            <p className="flex text-red-700 gap-x-1 mt-2">
              Rp
              <a className="text-lg text-[#e9280d] font-bold">
                2.659.000.000,00
              </a>
            </p>
          </div>
          <div className="flex w-full gap-x-2">
            <AiOutlineHeart className="mt-7" size={28} color="red" />
            <p className="mt-7">Favorit</p>
            <div className="flex w-full gap-2">
              <AiOutlineShareAlt className="mt-7" size={28} color="black" />
              <p className="mt-7">Bagikan</p>
            </div>
          </div>
          <div className="mt-6 flex w-full">
            <Link to={'/Cart'}>
            <button className="flex relative justify-center p-2 mt-5 rounded-full bg-black text-white h-12 w-[200px] font-semibold">
              Add To Cart
              <AiOutlineShoppingCart size={25} />
            </button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-10"/>
      <div className="">
        <div className="font-sans">
          <div>
            <p className="text-center text-3xl mt-8">Detail Mobil</p>
          </div>
          <div className="w-full p-10 items-center">
            <table className="w-full flex">
              <thead className="w-1/2 font-sans">
                <tr>
                  <td className="text-gray-400 text-lg h-[60px]">
                    Jenis Bahan Bakar
                  </td>
                  <td className="font-semibold px-40">Bensin</td>
                </tr>
                <tr>
                  <td className="text-gray-400 text-lg h-[60px]">
                    Jumlah Tempat Duduk
                  </td>
                  <td className="font-semibold px-40">2</td>
                </tr>
                <tr>
                  <td className="text-gray-400 text-lg h-[60px]">
                    Kunci cadangan
                  </td>
                  <td className="font-semibold px-40">Ada</td>
                </tr>
                <tr>
                  <td className="text-gray-400 text-lg h-[60px]">
                    Garansi Pabrik
                  </td>
                  <td className="font-semibold px-40">Ada</td>
                </tr>
              </thead>
              <tbody className="w-1/2">
                <tr>
                  <td className="text-gray-400 text-lg h-[60px]">Warna</td>
                  <td className="font-semibold px-40">Kuning</td>
                </tr>
                <tr>
                  <td className="text-gray-400 text-lg h-[60px]">Jarak(Km)</td>
                  <td className="font-semibold px-40">10.000 Km</td>
                </tr>
                <tr>
                  <td className="text-gray-400 text-lg h-[60px]">
                    Buku Servis
                  </td>
                  <td className="font-semibold px-40">Ada</td>
                </tr>
                <tr>
                  <td className="text-gray-400 text-lg h-[60px]">
                    Masa Berlaku Stnk
                  </td>
                  <td className="font-semibold px-40">Januari 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCar;

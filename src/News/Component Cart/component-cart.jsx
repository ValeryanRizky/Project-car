import React from 'react'
import { useState } from 'react'

export default function ComponentCart(props) {
    const [quantity, setQuantity] = useState(1)
    const handletambah = () => {
        const qty = quantity + 1
        setQuantity(qty)
    }
    const handlekurang = () => {
        const qty = quantity - 1
        setQuantity(qty)   
    }

    return (
        <div className="p-10 flex border border-solid border-gray-500 rounded-lg w-[800px] mt-6">
        <img
          className="w-[150px] rounded-lg"
          src={props.img}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 w-full">
          <p className="text-lg font-semibold font-sans">{props.title}</p>
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="font-normal text-red-700 font-semibold text-lg mt-2"> {props.harga}</p>
            </div>
            <div className="flex">
              <button onClick={handlekurang} className="bg-black text-white p-2 h-[30px] w-[30px] rounded-l-md flex items-center justify-center">
                -
              </button>
              <div className="bg-gray-200 p-2 h-[30px] w-[30px] flex items-center justify-center">
                <span>{quantity}</span>
              </div>
              <button  onClick={handletambah} className="bg-black text-white p-2 rounded-r-md flex items-center justify-center h-[30px] w-[30px]">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
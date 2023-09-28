import React from 'react'
import { BsSpeedometer2 } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function ComponentCard(props) {
  return (
    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-6">
            <img
              className="rounded-t-lg h-[255px] w-full"
              src={props.img}
              alt=""
            />
            <div className="p-5 pt-3 w-full">
              <div className="flex gap-x-2 font-semibold mb-2">
                <div className="flex items-center gap-x-1">
                  <BiSolidUser size={20} />
                  <p>{props.penumpang}</p>
                </div>
                |
                <div className="flex items-center gap-x-1">
                  <BsSpeedometer2 size={20} />
                  <p>{props.km}</p>
                </div>
                |
                <div className="flex items-center gap-x-1">
                  <AiFillCar size={20} />
                  <p>{props.type}</p>
                </div>
              </div>
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {props.title}
                </h5>
              </div>
              <div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {props.desc}
                </p>
              </div>
              <div className="flex justify-between items-center">
              <p className=" font-normal text-red-700 font-semibold text-lg">
                  {props.harga}
                </p>
                <Link to={'/DetailCar'}>
                <a
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#262626] rounded-lg "
                >
                  Read more
                </a>
                </Link>
              </div>
            </div>
          </div>
  )
}
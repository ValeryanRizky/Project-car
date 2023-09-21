import React from 'react'

export default function ComponentCategory(props) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 ">
        <img
          className="w-[60px] h-[60px] border-2 p-2 rounded-full border-black cursor-pointer"
          src={props.img}
          alt="logo"
        />
        <p className="font-semibold">{props.title}</p>
      </div>
  )
}

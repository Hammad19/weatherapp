import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

export default function Inputs(props) {
  
  
  const handleOnchange = (event) => 
   {
    props.setCityTitle(event.target.value);
  }
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4 ">
        <input
          onChange={handleOnchange}
          type="text"
          placeholder="Search for City...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none"
        ></input>
        <UilSearch 
          onClick = {props.updatenews}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        ></UilSearch>
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        ></UilLocationPoint>
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="imperial" className="text-xl text-white font-light mx-1">
        °C
        </button>

        <p className="text-white"> | </p>

        <button name="metric" className="text-xl text-white font-light mx-1">
        °F
        </button>
      </div>
    </div>
  );
}

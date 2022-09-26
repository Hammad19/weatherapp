import React from "react";

export default function Forecast(props) {
  return (
    <>
      <div className="flex flex-row items-center mt-6">
        <p className="text-white font-medium uppercase">{props.title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white ">
        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:30 AM</p>
            <img src="http://www.openweathermap.org/img/wn/01d@2x.png" alt="" className="w-12 my-1"/>
            <p className="font-medium">32°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:30 AM</p>
            <img src="http://www.openweathermap.org/img/wn/01d@2x.png" alt="" className="w-12 my-1"/>
            <p className="font-medium">32°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:30 AM</p>
            <img src="http://www.openweathermap.org/img/wn/01d@2x.png" alt="" className="w-12 my-1"/>
            <p className="font-medium">32°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:30 AM</p>
            <img src="http://www.openweathermap.org/img/wn/01d@2x.png" alt="" className="w-12 my-1"/>
            <p className="font-medium">32°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:30 AM</p>
            <img src="http://www.openweathermap.org/img/wn/01d@2x.png" alt="" className="w-12 my-1"/>
            <p className="font-medium">32°</p>
        </div>
      </div>

    </>
  );
}

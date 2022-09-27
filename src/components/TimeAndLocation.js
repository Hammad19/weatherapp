import React from "react";

export default function TimeAndLocation(props) {
  return (
    <>
    <div className="flex justify-center my-6 items-center">
      <p className="text-white text-xl font-extralight">
        {props.time}
      </p>
      
    </div>

    <div className="flex items-center justify-center my-3">
    <p className="text-white text-3xl"> {props.citytitle}, {props.countrytitle}</p>
    </div>

    </>
  );
}

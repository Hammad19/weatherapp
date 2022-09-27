import React from 'react'

export default function TopButtons(props) {
  const cities = [
    {
      id: 1,
      title: "karachi",
    },
    {
      id: 2,
      title: "hyderabad",
    },
    {
      id: 3,
      title: "sukkur",
    },
    {
      id: 4,
      title: "islamabad",
    },
    {
      id: 5,
      title: "haripur",
    },
  ];

  // const handleOnClick =(cityname) =>
  // {
  //   props.setCityTitle(cityname)
  //   console.log(cityname);
    
    
  // }

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          onClick={console.log(city.title)}
          key={city.id}
          className="text-white text-lg font-medium"
          
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

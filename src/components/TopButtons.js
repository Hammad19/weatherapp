import React from 'react'

export default function TopButtons() {


  const cities =
    [
    
    {
      id: 1,
      name: 'Karachi'
    },

    {
      id: 2,
      name: 'Lahore'
    },

    {
      id: 3,
      name: 'Faisalabad'
    },

    {
      id: 4,
      name: 'Abottabad'
    },

    {
      id: 5,
      name: 'Hyderabad'
    },


    ]
  return (

    

    <div className = 'flex items-center justify-between my-6 '>
      {cities.map((city)=>
      (
        <button key= {city.id} className='text-white text-lg font-medium hover:scale-110'>{city.name}</button>
      )
      )
      }
    </div>
  )
}

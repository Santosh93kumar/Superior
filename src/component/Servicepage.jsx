import React from 'react'
import { useParams } from 'react-router-dom';
import data from './data.js'
function Servicepage() {
    const {id} = useParams();
    const service = data.find(item => item.id === parseInt(id));
    console.log(service);

  return (
    <div className='flex flex-col'>
        <h2 className='text-center text-2xl font-bold text-zinc-800 pt-5 '>{service.name}</h2>
 
        <p className='pb-6 text-center text-zinc-400'>{service.slug}</p>
        <div className='w-full flex justify-center items-center'>
            <img src={service.img} className='w-auto h-[70vh] object-center' alt="" />
        </div>
        <div>
            <p className='text-zinc-900 px-16 text-lg'>{service.content}</p>
        </div>
    </div>
  )
}

export default Servicepage
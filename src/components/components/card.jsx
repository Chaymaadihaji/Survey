import React from 'react'

function Card({name,position}) {
  return (
    <>
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{position}</p>
      </div>
    </div>
    </>
  )
}

export default Card
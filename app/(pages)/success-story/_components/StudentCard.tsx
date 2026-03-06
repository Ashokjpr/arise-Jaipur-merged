import React from 'react'
interface StudentCardProps {
  image: string;
  name: string;
  marks: string;
}

function StudentCard({
  image,
  name,
  marks,
}: StudentCardProps) {
  return (
    <div className="hover:bg-white hover:border border-gray-50   shadow-md text-center hover:shadow-xl transition duration-300 overflow-hidden">

      <div className='h-75 w-full mx-auto flex justify-center'>
        <img
          src={image}
          alt={name}
          className="w-auto h-full mx-auto  object-cover mb-4 "
        />
      </div>

      <div className='bg-white '>
        <h3 className="text-lg font-semibold text-blue-800">
          {name}
        </h3>

        <p className="text-sm text-gray-500">
          FMGE Score
        </p>

        <p className="text-xl font-bold text-green-600">
          {marks}
        </p>
      </div>
    </div>
  )
}

export default StudentCard

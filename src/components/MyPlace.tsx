import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

const MyPlace = () => {
  return (
    <div className="p-9 h-[40rem] overflow-auto">
      <div className="block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md mb-4">
        <h5 className="mb-2 text-2xl tracking-tight text-gray-900 font-bold font-dreams7 flex justify-between">
          {/* {item.stationName} */}
          <div>
            <AiOutlineStar className="text-white cursor-pointer" />
          </div>
        </h5>
        <div className=" text-gray-700 text-center font-dreams5">
          <p className="text-3xl text-white pb-2">좋음</p>
          {/* <p>미세먼지 수치: {item.pm10Value}</p> */}
          {/* <p>({item.dataTime}기준)</p> */}
        </div>
      </div>
    </div>
  )
}

export default MyPlace

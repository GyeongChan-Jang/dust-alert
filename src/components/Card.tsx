import React, { useEffect, useState } from 'react'
import { getDust } from '../util/getDust'
import { AiOutlineStar } from 'react-icons/ai'

const Card = () => {
  const [dust, setDust] = useState([])
  // 시도 명이 getDust 인수로 들어가야함

  useEffect(() => {
    getDust()
      .then((data) => {
        setDust(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="p-9 h-[40rem] overflow-auto">
      {dust.map((item: any, index) => (
        <div key={index}>
          <div
            className={`${
              item.pm10Grade === '1'
                ? 'bg-sky-400'
                : item.pm10Grade === '2'
                ? 'bg-emerald-400'
                : item.pm10Grade === '3'
                ? 'bg-yellow-500'
                : item.pm10Grade === '4'
                ? 'bg-orange-500'
                : item.pm10Grade === '5'
                ? 'bg-rose-500'
                : 'bg-gray-400'
            } block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md mb-4`}
          >
            <h5 className="mb-2 text-2xl tracking-tight text-gray-900 font-bold font-dreams7 flex justify-between">
              {item.stationName}
              <div>
                <AiOutlineStar className="text-white cursor-pointer" />
              </div>
            </h5>
            <div className=" text-gray-700 text-center font-dreams5">
              <p className="text-3xl text-white pb-2">좋음</p>
              <p>미세먼지 수치: {item.pm10Value}</p>
              <p>({item.dataTime}기준)</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card

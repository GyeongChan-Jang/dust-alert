import React, { useEffect, useState } from 'react'
import { getDust } from '../util/getDust'

const Card = () => {
  const [dust, setDust] = useState([])

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
    <div className="p-9">
      {dust.map((item: any, index) => (
        <div
          key={index}
          className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 "
        >
          <h5 className="mb-2 text-2xl tracking-tight text-gray-900 font-bold font-dreams7 ">
            {item.stationName}
          </h5>
          <div className=" text-gray-700 text-center font-dreams5">
            <p>
              {item.pm10Grade === '1'
                ? '좋음'
                : item.pm10Grade === '2'
                ? '보통'
                : item.pm10Grade === '3'
                ? '한때나쁨'
                : item.pm10Grade === '4'
                ? '나쁨'
                : item.pm10Grade === '5'
                ? '매우나쁨'
                : '알수없음'}
            </p>
            <p>미세먼지 수치: 30</p>
            <p>(2022-0815 17:00 기준)</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card

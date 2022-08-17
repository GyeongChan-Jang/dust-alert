import React, { useEffect, useState } from 'react'
import { getDustInfo } from '../util/getDustInfo'
import { AiOutlineStar } from 'react-icons/ai'
import { useAppSelector } from '../store/store'

const Card = () => {
  const { sidoDustContents, gugunDust, status }: any = useAppSelector((state) => state.dust)

  console.log(gugunDust)

  return (
    <div className="p-9 h-[40rem] overflow-auto">
      {status.loading && (
        <img className="mx-auto" width={80} height={80} src="../../src/assets/loading.gif" />
      )}
      {!status.loading &&
        !gugunDust &&
        sidoDustContents.map((item: any, index: number) => (
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
                <p className="text-3xl text-white pb-2">
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
                    : '알 수 없음'}
                </p>
                <p>미세먼지 수치: {item.pm10Grade}</p>
                <p>({item.dataTime}기준)</p>
              </div>
            </div>
          </div>
        ))}
      {!status.loading && gugunDust && (
        <div key={gugunDust}>
          <div
            className={`${
              gugunDust.pm10Grade === '1'
                ? 'bg-sky-400'
                : gugunDust.pm10Grade === '2'
                ? 'bg-emerald-400'
                : gugunDust.pm10Grade === '3'
                ? 'bg-yellow-500'
                : gugunDust.pm10Grade === '4'
                ? 'bg-orange-500'
                : gugunDust.pm10Grade === '5'
                ? 'bg-rose-500'
                : 'bg-gray-400'
            } block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md mb-4`}
          >
            <h5 className="mb-2 text-2xl tracking-tight text-gray-900 font-bold font-dreams7 flex justify-between">
              {gugunDust.stationName}
              <div>
                <AiOutlineStar className="text-white cursor-pointer" />
              </div>
            </h5>
            <div className=" text-gray-700 text-center font-dreams5">
              <p className="text-3xl text-white pb-2">
                {gugunDust.pm10Grade === '1'
                  ? '좋음'
                  : gugunDust.pm10Grade === '2'
                  ? '보통'
                  : gugunDust.pm10Grade === '3'
                  ? '한때나쁨'
                  : gugunDust.pm10Grade === '4'
                  ? '나쁨'
                  : gugunDust.pm10Grade === '5'
                  ? '매우나쁨'
                  : '알 수 없음'}
              </p>
              <p>미세먼지 수치: {gugunDust.pm10Grade}</p>
              <p>({gugunDust.dataTime}기준)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card

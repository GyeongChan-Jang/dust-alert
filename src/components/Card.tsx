import React, { useEffect, useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../store/store'
import { favoriteDustHandler, favoriteDustRemoveHandler } from '../store/dustSlice'
import { useParams } from 'react-router-dom'
interface LocationType {
  favoriteLocation?: {
    pathname: string
  }
}

const Card = ({ favoriteLocation, myplaceLocation }: any) => {
  const { sidoDustContents, gugunDust, status, favoriteDust, initialDust }: any = useAppSelector(
    (state) => state.dust
  )
  const dispatch = useAppDispatch()

  const starClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: any) => {
    e.preventDefault()
    dispatch(favoriteDustHandler(item))
  }

  const starRemoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: any) => {
    e.preventDefault()
    dispatch(favoriteDustRemoveHandler(item))
  }

  return (
    <div className="p-9 h-[40rem] overflow-auto">
      {status.loading && (
        <img
          className="absolute inset-y-1/2 left-1/2 -translate-x-10 -translate-y-10 "
          width={80}
          height={80}
          // https://user-images.githubusercontent.com/90392240/185378405-044634ca-d68d-4a5f-a134-e528f2877982.gif
          src="/public/assets/loading.gif"
        />
      )}
      {/* 전체 시도 보기 */}
      {!status.loading &&
        !gugunDust &&
        !favoriteLocation &&
        !myplaceLocation &&
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
              } block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md mb-4 mx-auto`}
            >
              <h5 className="mb-2 text-2xl tracking-tight text-gray-900 font-bold font-dreams7 flex justify-between">
                {item.stationName}
                <div onClick={(e) => starClickHandler(e, item)}>
                  {favoriteDust.find(
                    (favoriteDust: any) => favoriteDust.stationName === item.stationName
                  ) ? (
                    <AiFillStar className="text-white cursor-pointer" />
                  ) : (
                    <AiOutlineStar className="text-white cursor-pointer" />
                  )}
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
      {/* 구군명 보기 */}
      {!status.loading && gugunDust && !favoriteLocation && !myplaceLocation && (
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
            } block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md mb-4 mx-auto`}
          >
            <h5 className="mb-2 text-2xl tracking-tight text-gray-900 font-bold font-dreams7 flex justify-between">
              {gugunDust.stationName}
              <div onClick={(e) => starClickHandler(e, gugunDust)}>
                {favoriteDust.find(
                  (favoriteDust: any) => favoriteDust.stationName === gugunDust.stationName
                ) ? (
                  <AiFillStar className="text-white cursor-pointer" />
                ) : (
                  <AiOutlineStar className="text-white cursor-pointer" />
                )}
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
      {/* 즐겨찾기 보기 */}
      {!status.loading &&
        favoriteLocation &&
        favoriteDust.map((item: any, index: number) => (
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
              } block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md mb-4 mx-auto`}
            >
              <h5 className="mb-2 text-2xl tracking-tight text-gray-900 font-bold font-dreams7 flex justify-between">
                {item.stationName}
                <div onClick={(e) => starRemoveHandler(e, item)}>
                  {item.isLiked ? (
                    <AiFillStar className="text-white cursor-pointer" />
                  ) : (
                    <AiOutlineStar className="text-white cursor-pointer" />
                  )}
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
      {!status.loading && favoriteLocation && favoriteDust.length === 0 && (
        <p className="text-2xl text-gray-700 font-dreams6 text-center">즐겨찾기가 없습니다!</p>
      )}
      {/* 내 지역보기 */}
      {!status.loading && initialDust && myplaceLocation && !favoriteLocation && (
        <div key={initialDust}>
          <div
            className={`${
              initialDust.pm10Grade === '1'
                ? 'bg-sky-400'
                : initialDust.pm10Grade === '2'
                ? 'bg-emerald-400'
                : initialDust.pm10Grade === '3'
                ? 'bg-yellow-500'
                : initialDust.pm10Grade === '4'
                ? 'bg-orange-500'
                : initialDust.pm10Grade === '5'
                ? 'bg-rose-500'
                : 'bg-gray-400'
            } block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md mb-4 mx-auto`}
          >
            <h5 className="mb-2 text-2xl tracking-tight text-gray-900 font-bold font-dreams7 flex justify-between">
              {initialDust.stationName}
              <div onClick={(e) => starClickHandler(e, initialDust)}>
                {favoriteDust.find(
                  (favoriteDust: any) => favoriteDust.stationName === initialDust.stationName
                ) ? (
                  <AiFillStar className="text-white cursor-pointer" />
                ) : (
                  <AiOutlineStar className="text-white cursor-pointer" />
                )}
              </div>
            </h5>
            <div className=" text-gray-700 text-center font-dreams5">
              <p className="text-3xl text-white pb-2">
                {initialDust.pm10Grade === '1'
                  ? '좋음'
                  : initialDust.pm10Grade === '2'
                  ? '보통'
                  : initialDust.pm10Grade === '3'
                  ? '한때나쁨'
                  : initialDust.pm10Grade === '4'
                  ? '나쁨'
                  : initialDust.pm10Grade === '5'
                  ? '매우나쁨'
                  : '알 수 없음'}
              </p>
              <p>미세먼지 수치: {initialDust.pm10Grade}</p>
              <p>({initialDust.dataTime}기준)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card

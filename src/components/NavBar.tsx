import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'

const NavBar = () => {
  return (
    <div>
      <div className="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
        <a
          href="#"
          className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
        >
          <div className="text-center">
            <span className="block h-8 text-3xl leading-8 ">
              <HiLocationMarker className="mx-auto" />
            </span>
            <span className="block text-xs leading-none">내 지역보기</span>
          </div>
        </a>
        <a
          href="#"
          className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
        >
          <div className="text-center">
            <span className="block h-8 text-3xl leading-8">
              <i className="mdi mdi-star-outline"></i>
            </span>
            <span className="block text-xs leading-none">전체 시도보기</span>
          </div>
        </a>
        <a
          href="#"
          className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
        >
          <div className="text-center">
            <span className="block h-8 text-3xl leading-8">
              <i className="mdi mdi-magnify"></i>
            </span>
            <span className="block text-xs leading-none">즐겨찾기</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default NavBar

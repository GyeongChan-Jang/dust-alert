import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { SiOpenstreetmap } from 'react-icons/si'
import { MdFavorite } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="font-dreams5 shadow-lg fixed bottom-0 w-full">
      <div className="bg-white w-full border-t border-gray-200 flex ">
        <button className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
          <Link to="/myplace">
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8 mb-2">
                <HiLocationMarker className="mx-auto" />
              </span>
              <span className="block text-xs leading-none">내 지역보기</span>
            </div>
          </Link>
        </button>
        <button className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
          <Link to="/total">
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8 mb-2">
                <SiOpenstreetmap className="mx-auto" />
              </span>
              <span className="block text-xs leading-none">전체 시도보기</span>
            </div>
          </Link>
        </button>
        <button className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
          <Link to="/favorite">
            <div className="text-center">
              <span className="block h-8 text-3xl leading-8 mb-2">
                <MdFavorite className="mx-auto" />
              </span>
              <span className="block text-xs leading-none">즐겨찾기</span>
            </div>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default NavBar

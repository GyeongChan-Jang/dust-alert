import React, { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { getDust, gugunDustHandler, myplaceHandler } from '../store/dustSlice'
import { useLocation } from 'react-router-dom'

const sidoName = [
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
  '세종'
]

const SelectBox = () => {
  const [selectedSido, setSelectedSido] = useState(sidoName[0])
  const [selectedGugun, setSelectedGugun] = useState('')
  const myplaceLocation = useLocation()

  const dispatch = useAppDispatch()
  const { sidoDustContents } = useAppSelector((state) => state.dust)

  const sidoSelectHandler = (e: string) => {
    setSelectedGugun('')
    setSelectedSido(e)
    dispatch(getDust(e))
  }

  const gugunSelectHandler = (e: string) => {
    setSelectedGugun(e)
    console.log(e)
    if (myplaceLocation.pathname === '/myplace') {
      console.log('위치는 myplace')
      dispatch(myplaceHandler(e))
    } else {
      dispatch(gugunDustHandler(e))
    }
  }

  return (
    <div className="flex items-center justify-center p-6 gap-2">
      <div className="w-full max-w-xs mx-auto">
        <Listbox as="div" className="space-y-1" value={selectedSido} onChange={sidoSelectHandler}>
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm leading-5 font-bold text-gray-700">
                시도를 선택하세요!
              </Listbox.Label>
              <div className="relative">
                <span className="inline-block w-full rounded-md shadow-sm">
                  <Listbox.Button className="text-black cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                    <span className="block truncate">{selectedSido}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                </span>

                <Transition
                  show={open}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                >
                  <Listbox.Options
                    static
                    className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                  >
                    {sidoName.map((sido) => (
                      <Listbox.Option key={sido} value={sido}>
                        {({ selected, active }) => (
                          <div
                            className={`${
                              active ? 'text-white bg-blue-600' : 'text-gray-900'
                            } cursor-default select-none relative py-2 pl-8 pr-4`}
                          >
                            <span
                              className={`${
                                selected ? 'font-semibold' : 'font-normal'
                              } block truncate`}
                            >
                              {sido}
                            </span>
                            {selected && (
                              <span
                                className={`${
                                  active ? 'text-white' : 'text-blue-600'
                                } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                              >
                                <svg
                                  className="h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>

      <div className="w-full max-w-xs mx-auto">
        <Listbox as="div" className="space-y-1" value={selectedGugun} onChange={gugunSelectHandler}>
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm leading-5 font-bold text-gray-700">
                구군을 선택하세요!
              </Listbox.Label>
              <div className="relative">
                <span className="inline-block w-full rounded-md shadow-sm">
                  <Listbox.Button className="text-black cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                    <span className="block truncate">
                      {selectedGugun ? selectedGugun : sidoDustContents[0].stationName}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                </span>

                <Transition
                  show={open}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                >
                  <Listbox.Options
                    static
                    className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                  >
                    {sidoDustContents?.map((item: any, index: number) => (
                      <Listbox.Option key={index} value={item.stationName}>
                        {({ selected, active }) => (
                          <div
                            className={`${
                              active ? 'text-white bg-blue-600' : 'text-gray-900'
                            } cursor-default select-none relative py-2 pl-8 pr-4`}
                          >
                            <span
                              className={`${
                                selected ? 'font-semibold' : 'font-normal'
                              } block truncate`}
                            >
                              {item.stationName}
                            </span>
                            {selected && (
                              <span
                                className={`${
                                  active ? 'text-white' : 'text-blue-600'
                                } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                              >
                                <svg
                                  className="h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  )
}

export default SelectBox

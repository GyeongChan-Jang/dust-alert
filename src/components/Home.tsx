import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getDust } from '../store/dustSlice'
import { useAppDispatch } from '../store/store'

const Home = ({ setIsStarted }: any) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const startButtonHandler = () => {
    dispatch(getDust('서울'))
    setIsStarted((prev: any) => !prev)
    navigate('/myplace')
  }

  return (
    <div className="bg-center bg-cover bg-no-repeat h-screen items-center justify-center flex flex-col ">
      <div className="items-center justify-center w-full p-8 flex flex-col">
        <div
          id="moka-ix3cs"
          className="bg-gray-200 items-center justify-center md:w-1/2 w-full shadow-md p-5 h-auto rounded-lg blur-3 bg-opacity-50 flex flex-col col-span-12"
        >
          <h4 className="w-48 border-t-4 border-solid border-indigo-500 h-10"></h4>
          <img
            width={40}
            height={40}
            // https://user-images.githubusercontent.com/90392240/185337126-a27ff4eb-f459-4f37-bea2-2d09cc479ddc.png
            src="/public/assets/dust.png"
            alt="dust"
          />
          <h4 className="text-blue-800 font-dreams8 text-2xl mt-6">먼지 이놈!</h4>
          <h2 className="text-black text-xl text-center mt-2 mb-20">
            전국 미세먼지 상황을 알려주는 알리미입니다.
          </h2>
          <button
            onClick={startButtonHandler}
            className="text-white bg-indigo-800 hover:bg-indigo-900 w-56 p-4 text-2xl font-bold rounded-xl cursor-pointer"
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home

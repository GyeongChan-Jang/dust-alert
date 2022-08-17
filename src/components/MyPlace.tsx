import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../store/store'
import Card from './Card'

const MyPlace = () => {
  const myplaceLocation = useLocation()
  const { initialDust } = useAppSelector((state) => state.dust)
  console.log(initialDust)

  return (
    <div>
      <Card myplaceLocation={myplaceLocation} />
    </div>
  )
}

export default MyPlace

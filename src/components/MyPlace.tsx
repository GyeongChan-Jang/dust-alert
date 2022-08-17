import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../store/store'
import Card from './Card'

const MyPlace = () => {
  const myplaceLocation = useLocation()

  return (
    <div>
      <Card myplaceLocation={myplaceLocation} />
    </div>
  )
}

export default MyPlace

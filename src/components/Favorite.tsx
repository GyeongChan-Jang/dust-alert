import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from './Card'

const Favorite = () => {
  const favoriteLocation = useLocation()

  return (
    <div>
      <Card favoriteLocation={favoriteLocation} />
    </div>
  )
}

export default Favorite

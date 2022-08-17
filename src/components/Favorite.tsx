import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Card from './Card'

const Favorite = () => {
  const FavoriteLocation = useLocation()

  return (
    <div>
      <Card FavoriteLocation={FavoriteLocation} />
    </div>
  )
}

export default Favorite

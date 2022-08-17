import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
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

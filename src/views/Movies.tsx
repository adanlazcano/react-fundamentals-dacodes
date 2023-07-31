import MoviesComponent from '@/components/movies'
import  { memo } from 'react'

const Movies = memo(() => {
  return (
   <MoviesComponent/>
  )
})

export default Movies
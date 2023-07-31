import { memo } from 'react'
import img from '@/assets/img/notfound.jpg'

const NotFound = memo(() => {
  return (
    <div className='notFound'>
        <img src={img} alt="404" />
    </div>
  )
})

export default NotFound
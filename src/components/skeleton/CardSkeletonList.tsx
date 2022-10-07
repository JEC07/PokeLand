import * as React from 'react'
import '../../styles/skeleton/skeleton.css'

interface Props {
  amount: number
}

const CardSkeletonList: React.FC<Props> = ({ amount }: Props) => {
  const list = Array<string>(amount).fill('skeleton')

  return (
    <ul className='skeletons-container'>
      {
        list.map((_, index) =>
          <li
            key={index}
            className='skeleton-card'
          >
            <div className='skeleton-100 skeleton-loading' />
            <div className='skeleton-100 skeleton-loading' />
            <div className='skeleton-45 skeleton-loading' />
            <div className='skeleton-45 skeleton-loading' />
            <div className='skeleton-45 skeleton-loading' />
            <div className='skeleton-45 skeleton-loading' />
          </li>
        )
      }
    </ul>
  )
}

export default CardSkeletonList

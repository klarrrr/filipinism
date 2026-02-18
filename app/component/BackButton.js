import React from 'react'

const BackButton = ({loc, backToWhere}) => {
  return (
    <a href={loc} className='text-(--dark-text) p-2 pr-4 pl-4 w-fit rounded-xl transition ease-in-out duration-300 hover:bg-(--light-blue) font-medium'>
        ← {backToWhere}
    </a>
  )
}

export default BackButton

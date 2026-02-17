import Link from 'next/link'
const nav_link = ({location, title, onClick}) => {
  return (
    <Link href={location} className='
        ml-6 
        mr-6 
        w-full 
        p-5 
        md:p-0 
        md:w-fit 
        text-center 
        mt-1 
        mb-1 
        md:mt-0 
        md:mb-0
        transition
        ease-in-out
        duration-300
        hover:text-(--sky-blue)
    ' onClick={onClick}>
        {title}
    </Link>
  )
}

export default nav_link

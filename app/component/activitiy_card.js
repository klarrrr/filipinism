const activitiy_card = ({category, title, desc, tags, loc}) => {
  return (
    <div className="
        overflow-hidden
        rounded-3xl

        transition
        ease-in-out
        duration-300
        hover:cursor-pointer
        hover:shadow-1xl
        transform
        hover:-translate-y-2

        shadow-lg

        w-full
        bg-white
      
        flex
        flex-col
        p-10
        gap-4

        border-t-4
        border-b-4

        border-t-(--bright-blue)
        border-b-(--bright-blue)
    ">
        <p className="text-(--bright-blue) text-xs bg-(--light-blue) rounded-2xl w-fit p-2 pl-3 pr-3">{category}</p>
        <h2 className="text-(--deep-blue) font-bold text-xl">{title}</h2>
        <p className="text-(--dark-text) text-md">{desc}</p>
        <div className="flex flex-row gap-4">
            {
                tags.map((tag, index) => (
                <p key={index} className='text-(--dark-text) text-sm font-light'>{tag}</p>
                ))
            }
        </div>
        <a className="w-full bg-(--bright-blue) p-3 text-sm rounded-xl text-center hover:bg-(--deep-blue) transition ease-in-out duration-300 transform hover:scale-105" href={loc}>
            Start Quiz
        </a>
    </div>
  )
}

export default activitiy_card

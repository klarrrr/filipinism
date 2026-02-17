const db_card = ({icon, title, paragraph}) => {
  return (
    <div className="
        flex-1 
        text-center
        p-16 
        shadow-lg
        rounded-2xl 
        border-2 
        hover:shadow-2xl 
        transition 
        ease-in-out 
        transform 
        hover:-translate-y-1
        duration-300
        space-y-8
        bg-white
    ">
      {/* Icon */}
      <h1 className="text-5xl">{icon}</h1>
      <h2 className="text-(--bright-blue) text-3xl font-bold">{title}</h2>
      <p className="text-md lg:text-lg xl:text-xl text-(--dark-text)">
        {paragraph}
      </p>
    </div>
  )
}

export default db_card

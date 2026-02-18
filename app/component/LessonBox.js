const LessonBox = ({dir, title, subtitle, content}) => {
  return (
    <div className="rounded-2xl bg-white drop-shadow-md overflow-hidden">
        
        {/* Header */}

        <div className="bg-linear-50  from-(--deep-blue)  to-(--bright-blue) p-8 sm:p-12 md:p-16 text-white text-center flex flex-col gap-4">
            
            {/* Directory */}

            <p className="text-xs sm:text-sm font-light">{dir}</p>

            {/* Title */}

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h1>

            {/* Subtitle */}
            
            <p className="text-sm md:text-md">{subtitle}</p>
        </div>

        {/* Content */}
        {/* Add your content inside of the content attribute wow */}
        
        <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-4">

            {/* Will enumerate the elements in-order */}
            {
                content.map((e, index)=>(
                    <div key={index}>{e}</div>
                ))
            }

        </div>

    </div>
  )
}

export default LessonBox

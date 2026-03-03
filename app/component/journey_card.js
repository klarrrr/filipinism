const journey_card = ({count, title, desc}) => {
  return (
    <div className="shadow-md hover:shadow-xl transition ease-in-out duration-300 hover:-translate-y-1 rounded-3xl">
        <div className="bg-white rounded-3xl p-4 flex gap-4 flex-col md:flex-row border border-(--sky-blue)">

            {/* Number */}

            <div className="bg-(--light-blue) rounded-xl p-4 md:p-8 items-center justify-center flex">
                <h1 className="text-(--deep-blue) font-bold text-3xl">{count}</h1>
            </div>

            {/* Content */}

            <div className="flex flex-col gap-4 p-2">
                <h2 className="text-(--bright-blue) font-bold text-lg text-center md:text-left">{title}</h2>
                <p className="text-(--dark-text)">{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default journey_card

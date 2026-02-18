const primary_button = ({label}) => {
    // TODO: Add Params that will make button dynamic
    return (
        <a
            href="/lessons"
            className="
                inline-block 
                pl-10 pr-10 pt-5 pb-5
                bg-(--white)
                text-(--bright-blue)
                font-bold
                text-xl
                rounded-4xl
                transition
                ease-in-out
                transform
                drop-shadow-lg
                hover:-translate-y-0.5
                hover:drop-shadow-2xl
                duration-300
                self-center
                w-fit
            "
        >
        {label}
      </a>
  )
}

export default primary_button

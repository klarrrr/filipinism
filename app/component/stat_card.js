const stat_card = ({stat, title}) => {
  return (
    <div className="
        bg-linear-135
        from-(--bright-blue) 
        to-(--sky-blue) 
        rounded-2xl
        p-8
        pt-12
        pb-12
        flex-1
        space-y-4
    ">
        <h2 className="
            text-(--white) 
            text-4xl 
            font-semibold
        ">
            {stat}
        </h2>
        <p className="
        text-md font-light text-(--white)">
            {title}
        </p>
    </div>
  )
}

export default stat_card

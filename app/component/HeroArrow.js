export default function HeroArrow({ direction, onClickCycle }) {
    return (
      <button
        className="
          w-12 h-12 rounded-full
          bg-white/10 backdrop-blur-md
          text-white text-2xl
          hover:bg-white/20
          transition
          hover:cursor-pointer
          hover:scale-105
          duration-300
          ease-in-out
        "
        aria-label={direction}
        onClick={onClickCycle}
      >
        {direction === "left" ? "‹" : "›"}
      </button>
    );
  }
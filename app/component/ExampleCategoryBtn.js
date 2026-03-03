const ExampleCategoryBtn = ({content, css, onClickFunc}) => {
  return (
    <button onClick={onClickFunc} className={`p-2 pr-4 pl-4 lg:pr-8 lg:pl-8 rounded-lg font-semibold text-sm md:text-md ${css}`}>
        {content}
    </button>
  )
}

export default ExampleCategoryBtn

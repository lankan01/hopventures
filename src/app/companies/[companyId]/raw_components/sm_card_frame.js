export default function SmCardFrame({title, description, backgroundColor}) {

  return(
    <>
      <div className={`rounded-lg shadow-md p-4 mb-2 ${backgroundColor}`}>
        <h2 className="text-base sm:text-lg font-medium mb-1">{title}</h2>
        <p className="text-white text-xs sm:text-base ml-4">{description}</p>
      </div>
    </>
  )
}

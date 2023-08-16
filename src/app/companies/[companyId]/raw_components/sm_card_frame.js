export default function SmCardFrame({title, description}) {

  return(
    <>
      <div className="bg-2o-gray rounded-lg shadow-md p-4 mb-2">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-white ml-4">{description}</p>
      </div>
    </>
  )
}

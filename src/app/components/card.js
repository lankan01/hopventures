export default function Card({company}) {

  return (
    <div className="bg-gray-900 rounded-lg p-4 shadow-md sm-card">
      <div className="flex items-center mb-2">
        {/* Company Logo */}
        {/* <img
          src={company.logoUrl} // Replace with actual logo URL
          alt={company.name}
          className="w-12 h-12 mr-2 rounded-full"
        /> */}
        <h2 className="text-xl font-semibold text-white">{company.name}</h2>
      </div>
      <p className="text-gray-400 mb-2">{company.category}</p>
      <p className="text-gray-300 mb-4">{company.summary}</p>
      <p className="text-gray-400">

      <div className="flex">
        <div className="rounded-full bg-2o-pink py-1 px-2 flex items-center justify-center w-1/3 mb-2 mr-2">
          <span className="text-base mr-2 hidden sm:inline">📍</span> {/* Emoji */}
          <p className="text-black sm:text-xs text-xxs font-medium">{company.location}</p> {/* Location */}
        </div>
        <div className="rounded-full bg-2o-pink py-1 px-2 flex items-center justify-center w-1/3 mb-2 mr-2">
          <span className="text-base mr-2 hidden sm:inline">📈</span> {/* Emoji */}
          <p className="text-black sm:text-xs text-xxs font-medium">{company.series_stage}</p> {/* Series Stage */}
        </div>
        <div className="rounded-full bg-2o-pink py-1 px-2 flex items-center justify-center w-1/3 mb-2">
          <span className="text-base mr-2 hidden sm:inline">👯</span> {/* Emoji */}
          <p className="text-black sm:text-xs text-xxs font-medium">{company.size} ppl</p> {/* Size */}
        </div>
      </div>

      </p>
    </div>
  );
}

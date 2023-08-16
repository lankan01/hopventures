import Image from 'next/image'

export default function CompanySummary({company}) {

  return(
    <>
      <div className="flex items-center bg-2o-gray border-solid border-2 border-white rounded-2xl p-2 sm:p-4 shadow-md">
        {/* Logo */}
        <div className="flex-shrink-0 rounded-full w-20 h-20 sm:w-32 sm:h-32 overflow-hidden bg-white flex items-center justify-center mr-4 ml-2 sm:ml-0">
            {company.logo_url ? (
              <Image
                src={company.logo_url}
                alt="Company Logo"
                objectFit="contain"
                height={200}
                width={200}
              />
            ) : (
              <div className="rounded-full w-20 h-20 sm:w-32 sm:h-32 bg-2o-pink flex items-start justify-center">
                <span className="text-white text-lg"></span>
              </div>
            )}
        </div>

        {/* Summary text */}
        <div className="w-full ml-4 mr-1">
          <h1 className="text-lg sm:text-3xl font-semibold pb-1 sm:pb-2">{company.name}</h1>
          {/* Location / Category / Series */}
          <div className="flex justify-between pb-2 sm:pb-4">
            <p className="text-xxs sm:text-base font-thin inline-block mr-2">Category - {company.category}</p>
            <p className="text-xxs sm:text-base font-thin inline-block mr-2">Location -  {company.location}</p>
            <p className="text-xxs sm:text-base font-thin inline-block mr-6">Series Stage -  {company.series_stage}</p>
          </div>
          <p className="text-xxs sm:text-base">What we do: <span className="italic">{company.summary}</span></p>

          {/* Links to socials */}
          <div className="flex justify-between pt-4 sm:pt-6">
            <div className="rounded-full bg-2o-pink px-2 flex items-center justify-center w-1/3 mb-4 mr-2">
              <span className="text-base mr-2 hidden sm:inline">🔗</span>
              <p className="text-2o-gray sm:text-sm text-xs font-medium">website</p>
            </div>
            <div className="rounded-full bg-2o-pink px-2 flex items-center justify-center w-1/3 mb-4 mr-6">
              <span className="text-base mr-2 hidden sm:inline">🔗</span>
              <p className="text-2o-gray sm:text-sm text-xs font-medium">linkedin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

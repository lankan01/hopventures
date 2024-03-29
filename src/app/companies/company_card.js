import Image from 'next/image'
import Link from 'next/link'

export default function CompanyCard({company}) {

  // Define the maximum length for the summary
  const maxSummaryLength = 100;

  // Check if the summary is longer than the maximum length
  const truncatedSummary = company.summary.length > maxSummaryLength
    ? company.summary.slice(0, maxSummaryLength) + '...'
    : company.summary;

  return (
    <div className="bg-gray-900 rounded-lg p-4 shadow-md sm-card hover:translate-y-[-5px] transition-transform">
      <Link href={`/companies/${company.id}`} key={company.id}>
        <div className="flex items-start mb-2">
          {/* Logo */}
          <div className="rounded-full w-8 h-8 sm:w-16 sm:h-16 overflow-hidden bg-white flex items-center justify-center">
            {company.logo_url ? (
              <Image
                src={company.logo_url}
                alt="Company Logo"
                objectFit="contain"
                height={200}
                width={200}
              />
            ) : (
              <div className="rounded-full w-8 h-8 sm:w-16 sm:h-16 overflow-hidden bg-2o-pink flex items-start justify-center">
                <span className="text-white text-lg"></span>
              </div>
            )}
          </div>

          {/* Title / Category */}
          <div className="flex-grow ml-2">
            <div className="flex items-center justify-between">
              <h2 className="sm:text-xl text-sm font-semibold text-white">{company.name}</h2>
            </div>
            <p className="sm:text-l text-xs text-gray-400 mt-1 mb-2">{company.category}</p>
          </div>

          {/* Hiring "H" */}
          <div className="rounded-full w-5 h-5 bg-1o-pink flex items-center justify-center mr-1 mb-5">
            <span className="text-white sm:text-m text-xs">H</span>
          </div>
        </div>

        {/* Summary */}
        <p className="sm:text-sm text-xs italic text-gray-300 mb-4">{truncatedSummary}</p>

        {/* Tags */}
        <div className="flex">
          <div className="rounded-full bg-2o-pink px-2 flex items-center justify-center w-1/3 mb-4 mr-2">
            <span className="text-base mr-2 hidden ipad:inline">📍</span>
            <p className="text-2o-gray sm:text-xs text-xxxs font-normal">{company.location}</p>
          </div>
          <div className="rounded-full bg-2o-pink px-2 flex items-center justify-center w-1/3 mb-4 mr-2">
            <span className="text-base mr-2 hidden ipad:inline">📈</span>
            <p className="text-2o-gray sm:text-xs text-xxxs font-normal">{company.series_stage}</p>
          </div>
          <div className="rounded-full bg-2o-pink px-2 flex items-center justify-center w-1/3 mb-4">
            <span className="text-base mr-2 hidden ipad:inline">👯</span>
            <p className="text-2o-gray sm:text-xs text-xxxs font-normal">{company.size} ppl</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

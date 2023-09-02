import JobCategoryDropdown from './components/jobcategories'
import LocationsDropdown from './components/locationsdropdown'
import LocationType from './components/locationtype'
import SalaryRange from './components/salaryrange'
import SalaryCurrency from './components/salarycurrency'
import CompanyLogo from './components/companylogo'

export default function Posts() {

  return (
    <>
    <form className="px-8 mb-80">
      <div className="text-xl font-semibold mb-4">
        Job Details
      </div>
      <div className="flex justify-between sm:w-3/4 w-full">
        <div className="relative z-0 sm:w-full w-full mb-6 mr-12 group">
          <input type="text" name="floating_job_title" id="floating_job_title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-1o-pink focus:outline-none focus:ring-0 focus:border-1o-pink peer" placeholder=" " required />
          <label for="floating_job_title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-1o-pink peer-focus:dark:text-1o-pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Title</label>
        </div>
        <div className="w-full">
          <JobCategoryDropdown />
        </div>
      </div>
      <div className="flex justify-between sm:w-3/4 w-full">
        <div className="w-full mr-12">
          <LocationsDropdown />
        </div>
        <div className="w-full">
          <LocationType />
        </div>
      </div>

      <div className="relative z-0 sm:w-3/4 w-full mb-6 group">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Job Description</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-1o-pink focus:border-1o-pink dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-1o-pink dark:focus:border-1o-pink" placeholder="Leave a comment..."></textarea>
      </div>

      {/* Salary input */}
      <div className="flex justify-between sm:w-3/4 w-full">
        <div className="w-1/12 justify-center items-center">
          <SalaryCurrency />
        </div>
        <div className="w-5/12">
          <SalaryRange placeholder={"50,000"} label={"Min Salary /yr"} />
        </div>
        <div className="w-5/12">
          <SalaryRange placeholder={"80,000"} label={"Max Salary /yr"} />
        </div>
      </div>

      {/* Link to apply */}
      <div className="relative z-0 sm:w-3/4 w-full mb-6 group">
        <input type="text" name="floating_link_to_apply" id="floating_link_to_apply" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-1o-pink focus:outline-none focus:ring-0 focus:border-1o-pink peer" placeholder=" " required />
        <label for="floating_link_to_apply" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-1o-pink peer-focus:dark:text-1o-pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Website link / Email to apply</label>
      </div>

{/*  */}

      {/* Company Details */}
      <div className="relative z-0 sm:w-3/4 w-full mb-6 mt-12 group">
        <div className="text-xl font-semibold mb-4 mt-4">
          Company Details
        </div>

        <div className="flex justify-between sm:w-full w-full mb-6">
          <CompanyLogo />
          {/* Logo and name */}
          <div className="w-full justify-center ml-8 items-center">
            <div className="relative z-0 w-full mb-6 group">
              <input type="text" name="floating_company_name" id="floating_company_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-1o-pink focus:outline-none focus:ring-0 focus:border-1o-pink peer" placeholder=" " required />
              <label for="floating_company_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-1o-pink peer-focus:dark:text-1o-pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Company Name
              </label>
            </div>
          </div>
        </div>


        {/* Company website / linkedin */}
        <div className="flex justify-between w-full">
          <div className="relative z-0 w-full mb-6 mr-8 group">
            <input type="text" name="floating_company_website" id="floating_company_website" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-1o-pink focus:outline-none focus:ring-0 focus:border-1o-pink peer" placeholder=" " required />
            <label for="floating_company_website" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-1o-pink peer-focus:dark:text-1o-pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Company Website
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 ml-8 group">
            <input type="text" name="floating_company_linkedin" id="floating_company_linkedin" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-1o-pink focus:outline-none focus:ring-0 focus:border-1o-pink peer" placeholder=" " required />
            <label for="floating_company_linkedin" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-1o-pink peer-focus:dark:text-1o-pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Company LinkedIn
            </label>
          </div>
        </div>
      </div>
    </form>
    </>
  )
}

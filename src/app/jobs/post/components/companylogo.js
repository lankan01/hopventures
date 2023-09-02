export default function CompanyLogo() {

  return(
    <>
      <div className="flex">
        <div className="rounded-full w-8 h-8 sm:w-16 sm:h-16 mr-4 overflow-hidden bg-2o-pink flex items-start justify-center">
          <span className="text-white text-lg"></span>
        </div>

      </div>
      <div className="relative sm:w-full w-full mb-6 ml-4 group">
        <input type="text" name="floating_logo_url" id="floating_logo_url" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-1o-pink focus:outline-none focus:ring-0 focus:border-1o-pink peer" placeholder=" " required />
        <label for="floating_logo_url" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-1o-pink peer-focus:dark:text-1o-pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Logo URL</label>
      </div>
    </>
  )
}

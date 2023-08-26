import JobCategorySearch from './components/jobcategorysearch'

export default function Posts() {

  return (
    <>
    <form className="px-4">
      <div className="relative z-0 sm:w-3/4 w-full mb-6 group">
        <input type="text" name="floating_job_title" id="floating_job_title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-1o-pink focus:outline-none focus:ring-0 focus:border-1o-pink peer" placeholder=" " required />
        <label for="floating_job_title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-1o-pink peer-focus:dark:text-1o-pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Title</label>
      </div>
      <JobCategorySearch />
      <div className="relative z-0 sm:w-3/4 w-full mb-6 group">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Job Description</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
      </div>
    </form>
    </>
  )
}

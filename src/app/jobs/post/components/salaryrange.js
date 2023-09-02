export default function SalaryRange({placeholder, label}) {

  return(
    <>
      <div className="relative w-full mb-6 group">
        <label
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
        <input
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-500 peer"
          type="number"
          name="floating_salary_range"
          id="floating_salary_range"
          placeholder={placeholder}
          label={label}
          required
        />
      </div>

    </>
  )
}

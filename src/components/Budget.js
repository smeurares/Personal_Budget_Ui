import { useGlobalContext } from "../context";

export default function Budget() {
  const {income, setIncome, error, setError, setBudget} = useGlobalContext()

  const handleSubmit = (e) => {
   e.preventDefault();
   setBudget(false)
   setError({error: false, message: ''})
   setIncome(income)
  }

  return (
    <div className='bg-gray-100 flex items-center justify-around flex-col border-2 mb-6 mt-6'>
      <h2 className='mb-4 mt-6 text-xl font-medium'>What is your monthly income?</h2>
      <form className="flex items-center justify-center flex-col">
        <div className="flex flex-col">
          <input
            type='number'
            className={`w-full p-2 mt-2 text-primary border bg-indigo-100 rounded-lg outline-none text-sm transition duration-150 ease-in-out mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
            id='income'
            placeholder='Your Income'
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>
        {error.error && <p>{error.message}</p>}
        <button
          className={`bg-indigo-600 hover:bg-indigo-900 p-2 pl-4 pr-4 rounded-md text-white mb-6`}
          onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

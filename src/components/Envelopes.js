import { useGlobalContext } from "../context";

export default function Envelopes() {
  const { setEnvelopeBudget, setEnvelopeTitle, addEnvelope } =
    useGlobalContext();

  const handleFormSubmit = (e) => {
    addEnvelope();
    console.log("here");
  };

  return (
    <div className='bg-gray-100 flex items-center justify-around flex-col border-b-2 mb-6'>
      <h2 className='mb-4 text-xl font-medium'>Envelopes management</h2>
      <p>
        In order to manage successfully your budget, you need to allow parts of
        the income based on different needs and wishes.
      </p>
      <div className='flex flex-col justify-around sm:flex-row mb-6'>
        <div className='container mb-4 mx-auto pr-4 mt-12'>
          <div className='w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer'>
            <div className='h-20 bg-indigo-500 flex items-center justify-between'>
              <p className='mr-0 text-white text-lg pl-5'>Create an envelope</p>
            </div>
            <div className='flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600'>
              <form
                className='flex items-center justify-center flex-col'
                onSubmit={() => handleFormSubmit()}>
                <div className='flex flex-col'>
                  <input
                    type='number'
                    className={`w-full p-2 mt-2 text-primary border bg-indigo-100 rounded-lg outline-none text-sm transition duration-150 ease-in-out mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                    id='allowedBudget'
                    placeholder='Allowed Budget'
                    onChange={(e) => setEnvelopeBudget(e.target.value)}
                  />
                  <input
                    type='text'
                    className={`w-full p-2 mt-2 text-primary border bg-indigo-100 rounded-lg outline-none text-sm transition duration-150 ease-in-out mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                    id='envelopeName'
                    placeholder='Envelope name'
                    onChange={(e) => setEnvelopeTitle(e.target.value)}
                  />
                </div>

                <button
                  className={`bg-indigo-600 hover:bg-indigo-900 p-2 pl-6 pr-6 rounded-md text-white mb-5 mt-5 text-lg`}>
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

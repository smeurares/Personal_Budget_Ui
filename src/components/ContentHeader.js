import { useGlobalContext } from "../context";
import store from "storejs";
import { useEffect } from "react";

export default function ContentHeader() {
  const { income, getAllEnvelopes, allEnvelopes } = useGlobalContext();

  useEffect(() => {
    return () => getAllEnvelopes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='sm:flex sm:justify-center bg-gray-100 py-10 p-14'>
      <div className='container mb-4 mx-auto pr-4'>
        <div className='w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer'>
          <div className='h-20 bg-indigo-500 flex items-center justify-between'>
            <p className='mr-0 text-white text-lg pl-5'>Budget</p>
          </div>
          <div className='flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600'>
            <p>TOTAL</p>
          </div>
          <p className='py-4 text-3xl ml-5'>{income || store("income")} $</p>
          <hr />
        </div>
      </div>

      <div className='container mx-auto pr-4'>
        <div className='w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer'>
          <div className='h-20 bg-indigo-500 flex items-center justify-between'>
            <p className='mr-0 text-white text-lg pl-5'>Planned Budget</p>
          </div>
          <div className='flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600'>
            <p>TOTAL</p>
          </div>
          <p className='py-4 text-3xl ml-5'>0</p>
          <hr />
        </div>
      </div>

      <div className='container mx-auto pr-4'>
        <div className='w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer'>
          <div className='h-20 bg-indigo-500 flex items-center justify-between'>
            <p className='mr-0 text-white text-lg pl-5'>Envelopes</p>
          </div>
          <div className='flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600'>
            <p>TOTAL</p>
          </div>
          <p className='py-4 text-3xl ml-5'>
            {allEnvelopes ? allEnvelopes.length : "0"}
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}

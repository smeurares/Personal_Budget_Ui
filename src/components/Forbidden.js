import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function Forbidden() {
  const { setIsLoggedIn } = useGlobalContext();
  return (
    <div className='h-screen w-screen bg-gray-100 flex items-center'>
      <div className='container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700'>
        <div className='max-w-md'>
          <div className='text-5xl font-dark font-bold'>404</div>
          <p className='text-2xl md:text-3xl font-light leading-normal'>
            Sorry, you are not authenticated.{" "}
          </p>
          <p className='mb-8'>But dont worry, you can login right below.</p>

          <Link
            to='/login'
            onClick={() => setIsLoggedIn(false)}
            className='px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700'>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

import { useGlobalContext } from "../context";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";

export default function SignIn() {
  const { login, setLoginEmail, setLoginPassword, loading, setIsLoggedIn } =
    useGlobalContext();
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    login();
    history.push("/content");
    setIsLoggedIn(true);

    console.log("here");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='md:mt-6 lg:mt-4 h-screen flex bg-gray-bg1'>
      <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16 sm:mt-16'>
        <div className='text-2xl font-medium text-primary mt-4 mb-12 text-center flex justify-center flex-col'>
          <img
            className='h-8 w-auto sm:h-10 text-center '
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt=''
          />
          <h1 className='mt-4'>Log in</h1>
        </div>

        <form onSubmit={(e) => handleFormSubmit(e)}>
          <div>
            <label
              htmlFor='email'
              className='text-xl font-normal text-grey-600'>
              Email
            </label>
            <input
              type='email'
              className={`w-full p-2 mt-2 text-primary border bg-indigo-100 rounded-lg outline-none text-sm transition duration-150 ease-in-out mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              id='email'
              placeholder='Your Email'
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='text-xl font-normal text-grey-600'>
              Password
            </label>
            <input
              type='password'
              className={`w-full p-2 mt-2 text-primary border bg-indigo-100 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              id='password'
              placeholder='Your Password'
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-center items-center mt-6'>
            <button
              className={`bg-indigo-600 hover:bg-indigo-900 p-2 pl-4 pr-4 rounded-md text-white`}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

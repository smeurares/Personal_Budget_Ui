import React from "react";
import {Input} from 'reactstrap';

export default function SignUp() {
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;
    let firstName = e.target.element.firstname.value;

    console.log(email, password, firstName);
  };
  return (
    <div className='md:mt-6 lg:mt-4 h-screen flex bg-gray-bg1'>
      <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16 sm:mt-16'>
        <div className='text-2xl font-medium text-primary mt-4 mb-12 text-center flex justify-center flex-col'>
          <img
            className='h-8 w-auto sm:h-10 text-center '
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt=''
          />
          <h1 className='mt-4'>Sign up</h1>
        </div>

        <form onSubmit={handleFormSubmit}>
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
            />
          </div>
          <div>
            <label
              htmlFor='firstname'
              className='text-xl font-normal text-grey-600'>
              First Name
            </label>
            <input
              type='text'
              className={`w-full p-2 mt-2 text-primary border bg-indigo-100 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              id='firstname'
              placeholder='First Name'
            />
          </div>
          <div>
            <label
              htmlFor='lastname'
              className='text-xl font-normal text-grey-600'>
              Last Name
            </label>
            <input
              type='text'
              className={`w-full p-2 mt-2 text-primary border bg-indigo-100 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              id='lastname'
              placeholder='Last Name'
            />
          </div>
          <div>
            <label htmlFor='dob' className='text-xl font-normal text-grey-600'>
              Date of birth
            </label>
            <input
              type='date'
              className={`w-full p-2 mt-2 text-primary border bg-indigo-100 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              id='dob'
            />
          </div>
          <div>
            <label htmlFor='currentincome' className='text-xl font-normal text-grey-600'>
              Current Income Level
            </label>
            <Input type='select' name='currentincome' id='currentincome' className='w-full p-2 mt-2 text-primary border bg-indigo-100 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'>
              <option>Low</option>
              <option>Lower-middle</option>
              <option>Upper-middle</option>
              <option>High</option>
              <option>Independent</option>
            </Input>
          </div>
          <div>
            <label htmlFor='desiredincome' className='text-xl font-normal text-grey-600'>
              Desired Income Level
            </label>
            <Input type='select' name='desiredincome' id='desiredincome' className='w-full p-2 mt-2 text-primary border bg-indigo-100 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'>
              <option>Low</option>
              <option>Lower-middle</option>
              <option>Upper-middle</option>
              <option>High</option>
              <option>Independent</option>
            </Input>
          </div>
          <div className='flex justify-center items-center mt-6'>
            <button
              className={`bg-indigo-600 hover:bg-indigo-900 p-2 pl-4 pr-4 rounded-md text-white`}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

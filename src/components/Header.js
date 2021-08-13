import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-grey-300 max-h max-w w-screen h-screen">
      <div className="p-16 my-24 grid place-items-center items-center">
        <h1 className="text-3xl font-bold text-indigo-600">Create you personal budget</h1> 
        <p className="mt-6 text-md text-grey-800">Style your unique budget, based on your needs, budget level and preferences.</p>
        <Link className="mt-12 bg-indigo-600 hover:bg-indigo-900 p-2 pl-4 pr-4 rounded-md text-white" to="/sign-up">Get started</Link>
      </div>
    </div>
  );
}

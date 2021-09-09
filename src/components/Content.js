import store from "storejs";
import { useGlobalContext } from "../context";
import Forbidden from "./Forbidden";
import Loading from "./Loading";
import Budget from "./Budget";
import Envelopes from "./Envelopes";
import ContentHeader from "./ContentHeader";
import Data from "./Data";

export default function Content() {
  const { loading, setBudget, budget, setEnvelopes, envelopes } =
    useGlobalContext();
  const name = store("name");

  if (!store("authenticated")) {
    return <Forbidden />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='bg-gray-100 h-screen'>
      <div className='bg-gray-500 h-20 flex text-blue-50 text-xl md:text-2xl'>
        <button
          onClick={() => setBudget(!budget)}
          className='m-auto hover:text-indigo-200'>
          Set budget
        </button>
        <h1 className='m-auto'>Welcome to your budget, {name}!</h1>
        <button
          onClick={() => setEnvelopes(!envelopes)}
          className='m-auto hover:text-indigo-200'>
          Add envelope
        </button>
      </div>
      <ContentHeader />

      {budget && <Budget />}

      {envelopes && <Envelopes />}

      {<Data />}
    </div>
  );
}

import { useState, useEffect } from "react";
import store from "storejs";
import { useGlobalContext } from "../context";
import Forbidden from "./Forbidden";
import Loading from "./Loading";

export default function Content() {
  const { loading, isLoggedIn } = useGlobalContext();
  const name = store("name");
  const id = store("id");

  if (!isLoggedIn) {
    return <Forbidden />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='bg-gray-500 h-24 p-1 flex flex-col text-blue-50'>
      <h1 className="m-auto">Welcome to your budget, {name}!</h1>
    </div>
  );
}

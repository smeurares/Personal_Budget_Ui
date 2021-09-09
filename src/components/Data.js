import React, { useState } from "react";
import Axios from "axios";

import { useGlobalContext } from "../context";

const Data = () => {
  const { getAllEnvelopes, allEnvelopes, removeEnvelope, setAllEnvelopes } =
    useGlobalContext();

  const showEnvelopes = () => {
    return getAllEnvelopes();
  };

  const deleteEnvelope = (id) => {
    removeEnvelope(id);
    const deleted = allEnvelopes.filter((envelope) => id !== envelope.id);
    setAllEnvelopes(deleted);
  };

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const [unitPrice, setUnitPrice] = useState(null);

  const onEditBudget = ({ id, currentUnitPrice }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });
    setUnitPrice(currentUnitPrice);
  };

  const updateInventoryBudget = ({ id, newUnitPrice }) => {
    Axios({
      method: "PUT",
      data: {
        budget: newUnitPrice,
      },
      url: `/envelopes/${id}`,
    }).then((res) => {
      const response = res;
      console.log(response.updated);
      onCancel();
      getAllEnvelopes();
    });
  };

  const onSave = ({ id, newUnitPrice }) => {
    updateInventoryBudget({ id, newUnitPrice });
  };

  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
      rowKey: null,
    });
    // reset the unit price state value
    setUnitPrice(null);
  };

  const renderHeader = () => {
    let headerElement = ["title", "budget", "actions"];

    return (
      allEnvelopes &&
      headerElement.map((key, index) => {
        return (
          <th
            className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600'
            key={index}>
            {key.toUpperCase()}
          </th>
        );
      })
    );
  };

  const renderBody = () => {
    return (
      allEnvelopes &&
      allEnvelopes.map(({ id, title, budget }) => {
        return (
          <tr className='text-gray-700' key={id}>
            <td className='px-4 py-3 border-b'>
              <div className='flex items-center text-sm'>
                <div className='relative w-8 h-8 mr-3 rounded-full md:block'>
                  <img
                    className='object-cover w-full h-full rounded-full'
                    src='https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                    alt=''
                    loading='lazy'
                  />
                  <div
                    className='absolute inset-0 rounded-full shadow-inner'
                    aria-hidden='true'></div>
                </div>
                <div>
                  <p className='font-semibold text-black'>{title}</p>
                </div>
              </div>
            </td>
            <td className='px-4 py-3 text-ms font-semibold border'>
              {inEditMode.status && inEditMode.rowKey === id ? (
                <input
                  value={unitPrice}
                  onChange={(event) => setUnitPrice(event.target.value)}
                />
              ) : (
                <p className='font-semibold text-black'>{budget}</p>
              )}
            </td>
            <td className='px-4 py-3 text-ms font-semibold border'>
              {inEditMode.status && inEditMode.rowKey === id ? (
                <React.Fragment>
                  <button
                    className='px-2 py-2 bg-green-500 rounded-md hover:bg-green-700'
                    onClick={() => onSave({ id: id, newUnitPrice: unitPrice })}>
                    Save
                  </button>

                  <button
                    className='px-2 py-2 bg-red-500 rounded-md hover:bg-red-700'
                    style={{ marginLeft: 8 }}
                    onClick={() => onCancel()}>
                    Cancel
                  </button>
                </React.Fragment>
              ) : (
                <button
                  className='px-2 py-2 bg-green-500 rounded-md hover:bg-green-700'
                  onClick={() =>
                    onEditBudget({ id: id, currentUnitPrice: budget })
                  }>
                  Edit
                </button>
              )}
              |
              <button
                className='px-2 py-2 bg-red-500 rounded-md hover:bg-red-700'
                onClick={() => deleteEnvelope(id)}>
                Delete
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  if (!allEnvelopes) {
    return (
      <div class='flex justify-center items-center'>
        <button
          className='bg-indigo-600 hover:bg-indigo-900 p-2 pl-6 pr-6 rounded-md text-white mb-5 mt-5 text-lg mx-auto'
          onClick={() => showEnvelopes()}>
          Show envelopes
        </button>
      </div>
    );
  }

  return (
    <section className='container mx-auto p-6 font-mono'>
      <div className='w-full mb-8 overflow-hidden rounded-lg shadow-lg'>
        <div className='w-full overflow-x-auto'>
          <table id='envelopes' className='w-full'>
            <thead>
              <tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600'>
                {renderHeader()}
              </tr>
            </thead>
            <tbody className='bg-white'>{renderBody()}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Data;

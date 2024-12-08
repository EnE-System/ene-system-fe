import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const UsersTable = () => {
  const data = useSelector((state) => state.users.data);


  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [realData, setRealData] = useState([]); 
  const [isOpenForDelete , setIsOpenForDelete] = useState(false)
  const [deleteId , setDeleteId] = useState(null)

  const handleEditData = (id) => {
    setIsOpen(!isOpen);
    setEditData(id);
  };

  useEffect(() => {
    if (data && editData) {
      const handleRealData = data.find((user) => user.id === editData);
      if (handleRealData) {
        setRealData(handleRealData);
      }
    } else {
      console.log('no data found for id', editData);
    }
  }, [editData, data]);

   
  const handleDeleteData = (id)=>{
    setDeleteId(id) 
    setIsOpenForDelete(!isOpenForDelete)
  } 

  return (
    <div className="container mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">#</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Age
              </th>
              <th
                className="border border-gray-300 px-4 py-2 text-left"
                colSpan={2}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr className="hover:bg-gray-50" key={user.id}>
                <td className="border border-gray-300 px-4 py-2 bg-white">
                  {user.id}
                </td>
                <td className="border border-gray-300 px-4 py-2 bg-white">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 bg-white">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2 bg-white">
                  {user.age}
                </td>
                <td
                  className="border border-gray-300 px-4 py-2 bg-white cursor-pointer hover:text-green-500"
                  onClick={() => handleEditData(user.id)}
                >
                  Edit
                </td>
                <td className="border border-gray-300 px-4 py-2 bg-white cursor-pointer hover:text-red-500" 
                onClick={()=>handleDeleteData(user.id)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* model for editing*/}
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Modal */}

          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-md text-center">
                  Name to edit is : {realData.name}
                </h2>
                <p className="text-center">edit age is :{realData.age}</p>
                <div className="flex justify-center mt-6">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}  
           {
            isOpenForDelete && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-md text-center">
                  Are you sure you want to delete {realData.name}
                </h2>
                <p className="text-center"></p>
                <div className="flex justify-between mt-6">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={()=>setIsOpenForDelete(!isOpenForDelete)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                   
                  >
                    yes
                  </button>
                </div>
              </div>
            </div>
            )
           }
        </div>
      </div>
    </div>
  );
};

export default UsersTable;

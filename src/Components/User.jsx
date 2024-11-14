import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleRemoveBtn = (_id) => {
    console.log(_id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/user/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              swal("User has been deleted!", {
                icon: "success",
              });
              //   remove data from UI
              const remaining = users.filter((item) => item._id !== _id);
              setUsers(remaining);
            } else {
              swal("User is safe!");
            }
          });
      }
    });
  };
  return (
    <div className="h-[800px]">
      <h1 className="text-4xl font-bold text-center my-10">
        Total Users {loadedUsers.length}
      </h1>
      <div className="overflow-x-auto px-10 my-10">
        <table className="table ">
          {/* head */}
          <thead className="">
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Photo</th>
              <th>Created</th>
              <th>Last Login</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.photo}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  {
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleRemoveBtn(user._id)}
                        className="bg-red-700 hover:bg-red-900  font-bold px-2 py-1 rounded-3xl"
                      >
                        Remove
                      </button>
                    </div>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

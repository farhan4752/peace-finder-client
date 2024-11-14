import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import {
  FaMapMarkerAlt,
  FaGlobe,
  FaMoneyBillWave,
  FaInfoCircle,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { AuthContext } from "./AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/spots?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);
  console.log(spots);

  const handleRemoveBtn = (_id) => {
    console.log(_id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this spot!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/spots/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              swal("Your spot has been deleted!", {
                icon: "success",
              });
              const remaining = spots.filter((item) => item._id !== _id);
              setSpots(remaining);
            } else {
              swal("Your spot is safe!");
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-4 text-blue-800">
        Explore Must-See Destinations Around the World
      </h2>
      <p className="text-lg text-center text-gray-600 mb-10 font-cursive italic max-w-2xl mx-auto">
        Uncover a handpicked selection of breathtaking travel spots that capture
        the spirit of adventure and culture. From stunning landscapes to vibrant
        cities, each destination offers essential details to guide your next
        journey.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {spots?.map((spot) => (
          <div
            key={spot._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={spot.image}
              alt={spot.tourists_spot_name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
                <FaInfoCircle className="text-blue-600 mr-2" />{" "}
                {spot.tourists_spot_name}
              </h3>
              <p className="text-sm text-gray-500 flex items-center">
                <FaGlobe className="text-green-500 mr-2" /> Country:{" "}
                {spot.country_name}
              </p>
              <p className="text-sm text-gray-500 flex items-center">
                <FaMapMarkerAlt className="text-red-500 mr-2" /> Location:{" "}
                {spot.location}
              </p>
              <p className="text-sm text-gray-500 flex items-center mb-4">
                <FaMoneyBillWave className="text-yellow-500 mr-2" /> Average
                Cost: BDT {spot.average_cost}
              </p>

              <div className="flex flex-col gap-2">
                <Link to={`/spots/${spot._id}`}>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200 flex items-center justify-center">
                    <FaInfoCircle className="mr-2" /> View Details
                  </button>
                </Link>
                <Link
                  to={`/updateMySpot/${spot._id}`}
                  className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-200 flex items-center justify-center"
                >
                  <FaEdit className="mr-2" /> Update
                </Link>
                <Link
                  onClick={() => handleRemoveBtn(spot._id)}
                  className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition duration-200 flex items-center justify-center"
                >
                  <FaTrash className="mr-2" /> Remove
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;

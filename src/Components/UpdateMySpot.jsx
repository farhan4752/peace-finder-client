import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UpdateMySpot = () => {
  const spot = useLoaderData(); // single spot data loaded for updating
  const navigate = useNavigate(); // Initialize navigate
  console.log(spot);

  const handleUpdateBtn = (event) => {
    event.preventDefault();

    const form = event.target;

    const tourists_spot_name = form.name.value;
    const country_name = form.country.value;
    const location = form.location.value;
    const short_description = form.shortDescription.value;
    const average_cost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const image = form.photo.value;
    const travel_time = form.travelTime.value;
    const total_visitors_per_year = form.totalVisitors.value;
    const user_email = form.userEmail.value;
    const user_name = form.userName.value;

    const updatedSpot = {
      tourists_spot_name,
      country_name,
      location,
      short_description,
      average_cost,
      seasonality,
      image,
      travel_time,
      total_visitors_per_year,
      user_email,
      user_name,
    };

    console.log(updatedSpot);

    // Send updated data to the server
    fetch(`https://peace-finder-server.onrender.com/spots/${spot._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal(
            "Good job!",
            "You updated the spot successfully!",
            "success"
          ).then(() => {
            // Redirect to the list page after successful update
            navigate("/myList");
          });
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-12 px-4 lg:px-8">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Update Tourist Spot
        </h2>
        <p className="text-center text-gray-700 mb-8">
          Update the details of this tourist spot to keep information accurate
          and helpful for travelers.
        </p>

        <form onSubmit={handleUpdateBtn} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={spot.image}
                placeholder="Enter photo URL"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Tourist Spot Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Spot Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={spot.tourists_spot_name}
                placeholder="Enter tourist spot name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Country Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <input
                type="text"
                name="country"
                defaultValue={spot.country_name}
                placeholder="Enter country"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                defaultValue={spot.location}
                placeholder="Enter location"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Short Description */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Short Description
              </label>
              <textarea
                type="text"
                name="shortDescription"
                defaultValue={spot.short_description}
                placeholder="Enter a brief description"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
              />
            </div>

            {/* Average Cost */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Average Cost
              </label>
              <input
                type="text"
                name="averageCost"
                defaultValue={spot.average_cost}
                placeholder="Enter average cost (BDT)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Seasonality */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Seasonality
              </label>
              <input
                type="text"
                name="seasonality"
                defaultValue={spot.seasonality}
                placeholder="Enter best seasons to visit"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Travel Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Travel Time
              </label>
              <input
                type="text"
                name="travelTime"
                defaultValue={spot.travel_time}
                placeholder="Enter estimated travel time"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Total Visitors Per Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Visitors per Year
              </label>
              <input
                type="text"
                name="totalVisitors"
                defaultValue={spot.total_visitors_per_year}
                placeholder="Enter annual visitor count"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* User Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User Email
              </label>
              <input
                type="text"
                name="userEmail"
                defaultValue={spot.user_email}
                readOnly
                placeholder="Enter user email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* User Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={spot.user_name}
                readOnly
                placeholder="Enter user name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8 text-center">
            <button
              type="submit"
              value="updateSpot"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition duration-300"
            >
              Update Spot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMySpot;

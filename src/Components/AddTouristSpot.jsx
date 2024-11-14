import { useContext, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

function AddTouristSpot() {
  const navigate = useNavigate;
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    image: "",
    tourists_spot_name: "",
    country_name: "",
    location: "",
    short_description: "",
    average_cost: "",
    seasonality: "",
    travel_time: "",
    total_visitors_per_year: "",
    user_email: `${user.email || ""}`,
    user_name: `${user.displayName || ""}`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Good job!", "You added a new tourist spot!", "success").then(
            () => {
              navigate("/myList"); // Redirect to the list page
            }
          );
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-12 px-4 lg:px-8">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Add Tourist Spot
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image URL */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="image"
              >
                Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            {/* Tourist Spot Name */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="spotName"
              >
                Tourist Spot Name
              </label>
              <input
                type="text"
                id="spotName"
                name="tourists_spot_name"
                value={formData.tourists_spot_name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter the tourist spot name"
                required
              />
            </div>

            {/* Country Name */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="countryName"
              >
                Country Name
              </label>
              <input
                type="text"
                id="countryName"
                name="country_name"
                value={formData.country_name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Country Name"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="location"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter location"
                required
              />
            </div>

            {/* Short Description */}
            <div className="col-span-1 md:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="description"
              >
                Short Description
              </label>
              <textarea
                id="description"
                name="short_description"
                value={formData.short_description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter a brief description"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Average Cost */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="cost"
              >
                Average Cost (in BDT)
              </label>
              <input
                type="number"
                id="cost"
                name="average_cost"
                value={formData.average_cost}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 7000"
                required
              />
            </div>

            {/* Seasonality */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="seasonality"
              >
                Seasonality
              </label>
              <input
                type="text"
                id="seasonality"
                name="seasonality"
                value={formData.seasonality}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Winter"
                required
              />
            </div>

            {/* Travel Time */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="travelTime"
              >
                Travel Time
              </label>
              <input
                type="text"
                id="travelTime"
                name="travel_time"
                value={formData.travel_time}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 3 days"
                required
              />
            </div>

            {/* Total Visitors Per Year */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="visitors"
              >
                Total Visitors Per Year
              </label>
              <input
                type="number"
                id="visitors"
                name="total_visitors_per_year"
                value={formData.total_visitors_per_year}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 100000"
                required
              />
            </div>

            {/* User Email */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="userEmail"
              >
                User Email
              </label>
              <input
                type="email"
                id="userEmail"
                name="user_email"
                // value={user.email || ""}
                onChange={handleChange}
                readOnly
                value={formData.user_email}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* User Name */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="userName"
              >
                User Name
              </label>
              <input
                type="text"
                id="userName"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Add Tourist Spot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTouristSpot;

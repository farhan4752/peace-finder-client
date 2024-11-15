import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaGlobe,
  FaMoneyBillWave,
  FaInfoCircle,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

const SpotDetails = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState(null);

  useEffect(() => {
    fetch(`https://peace-finder-server.onrender.com/spots/${id}`)
      .then((response) => response.json())
      .then((data) => setSpot(data))
      .catch((error) => console.error("Error fetching spot details:", error));
  }, [id]);

  if (!spot) {
    return <div className="text-center py-20 text-gray-600">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 lg:px-8">
      <h1 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-blue-500 font-Times_New_Roman">
        Details of {spot.tourists_spot_name}
      </h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
        <div className="w-full h-96">
          <img
            src={spot.image}
            alt={spot.tourists_spot_name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
            <FaInfoCircle className="text-blue-600 mr-2" />
            {spot.tourists_spot_name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p className="text-md text-gray-600 flex items-center mb-2">
              <FaGlobe className="text-green-500 mr-2" /> Country:{" "}
              {spot.country_name}
            </p>
            <p className="text-md text-gray-600 flex items-center mb-2">
              <FaMapMarkerAlt className="text-red-500 mr-2" /> Location:{" "}
              {spot.location}
            </p>
            <p className="text-md text-gray-600 flex items-center mb-2">
              <FaMoneyBillWave className="text-yellow-500 mr-2" /> Average Cost:
              BDT {spot.average_cost}
            </p>
            <p className="text-md text-gray-600 flex items-center mb-2">
              <FaCalendarAlt className="text-purple-500 mr-2" /> Best Season:{" "}
              {spot.seasonality}
            </p>
            <p className="text-md text-gray-600 flex items-center mb-2">
              <FaClock className="text-indigo-500 mr-2" /> Travel Time:{" "}
              {spot.travel_time} Days
            </p>
            <p className="text-md text-gray-600 flex items-center mb-2">
              <FaUsers className="text-teal-500 mr-2" /> Visitors per Year:{" "}
              {spot.total_visitors_per_year}
            </p>
          </div>
          <p className="text-md text-gray-600 mt-4 mb-4">
            <span className="font-semibold">Description: </span>
            {spot.short_description}
          </p>

          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Contact Information
            </h4>
            <p className="text-md text-gray-600 flex items-center mb-2">
              <FaUser className="text-blue-500 mr-2" /> User Name:{" "}
              {spot.user_name}
            </p>
            <p className="text-md text-gray-600 flex items-center mb-2">
              <FaEnvelope className="text-orange-500 mr-2" /> Email:{" "}
              {spot.user_email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;

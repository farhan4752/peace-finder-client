import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaGlobe,
  FaMoneyBillWave,
  FaInfoCircle,
} from "react-icons/fa";

const AllTouristSpots = () => {
  const loadedSpots = useLoaderData();
  const [spots, setSpots] = useState(loadedSpots);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-10 px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Discover Enchanting Tourist Spots
        </h2>
        <p className="text-lg text-center text-gray-600 mb-10 font-cursive italic w-[500px] lg:w-[800px]  mx-auto">
          Explore a curated collection of breathtaking tourist destinations.
          Each spot features stunning images and essential details, including
          the country, location, and average cost, to help you plan your perfect
          getaway. Click{" "}
          <span className="font-bold text-blue-800 italic">View Details</span>{" "}
          to learn more about each enchanting location and make your travel
          dreams come true.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {spots
            .slice()
            .reverse()
            .map((spot) => (
              <div
                key={spot._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
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
                  <Link to={`/spots/${spot._id}`}>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200 flex items-center justify-center">
                      <FaInfoCircle className="mr-2" /> View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllTouristSpots;

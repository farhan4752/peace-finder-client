import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaGlobe,
  FaMoneyBillWave,
  FaInfoCircle,
} from "react-icons/fa";
import ReviewSection from "./ReviewSection";
import AllCountry from "./Country_Section/AllCountry";

const Home = () => {
  const loadedSpots = useLoaderData();
  const [spots, setSpots] = useState(loadedSpots);

  return (
    <div>
      <div className="min-h-screen py-10 px-4 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-blue-500 font-Times_New_Roman">
          Our featured Tourist Spots
        </h2>
        <p className="text-sm lg:text-xl text-center text-gray-600 mb-10 font-mono italic w-[300px] lg:w-[800px]  mx-auto">
          Discover our handpicked selection of top tourist destinations, each
          offering unique experiences and stunning sights to inspire your next
          adventure.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {spots.slice(0, 8).map((spot) => (
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
      {/* 3rd section */}
      <AllCountry></AllCountry>

      {/* 2nd section */}
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;

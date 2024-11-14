import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const indiaData = [
  {
    image: "../../../public/image/india/tajMahal.jpeg",
    tourists_spot_name: "Taj Mahal",
    country_name: "India",
    location: "Agra",
    short_description:
      "An ivory-white marble mausoleum, one of the Seven Wonders of the World.",
    average_cost: "4000",
    seasonality: "Winter",
    travel_time: "4",
    total_visitors_per_year: "7000000",
  },
  {
    image: "../../../public/image/india/jaipurCityPlace.jpg",
    tourists_spot_name: "Jaipur City Palace",
    country_name: "India",
    location: "Jaipur",
    short_description:
      "A blend of Mughal and Rajput architecture, known for its museums and art galleries.",
    average_cost: "3000",
    seasonality: "Autumn",
    travel_time: "2",
    total_visitors_per_year: "500000",
  },
  {
    image: "../../../public/image/india/Traditional-Kerala-Houseboat.webp",
    tourists_spot_name: "Backwaters of Kerala",
    country_name: "India",
    location: "Kerala",
    short_description:
      "A unique network of lakes, canals, and rivers ideal for houseboat cruises.",
    average_cost: "3500",
    seasonality: "Monsoon",
    travel_time: "8",
    total_visitors_per_year: "200000",
  },
  {
    image: "../../../public/image/india/Leh-Ladakh.jpeg",
    tourists_spot_name: "Leh-Ladakh",
    country_name: "India",
    location: "Ladakh",
    short_description: "Known for its mountainous landscapes and monasteries.",
    average_cost: "4500",
    seasonality: "Summer",
    travel_time: "10",
    total_visitors_per_year: "150000",
  },
  {
    image: "../../../public/image/india/goaBeach.webp",
    tourists_spot_name: "Goa Beach",
    country_name: "India",
    location: "Goa",
    short_description:
      "Popular beaches and nightlife, a top holiday destination.",
    average_cost: "2500",
    seasonality: "Winter",
    travel_time: "3",
    total_visitors_per_year: "600000",
  },
  {
    image: "../../../public/image/india/varanasi.webp",
    tourists_spot_name: "Varanasi Ghats",
    country_name: "India",
    location: "Varanasi",
    short_description:
      "Ancient ghats along the Ganges, a spiritual hub for pilgrims.",
    average_cost: "1500",
    seasonality: "Spring",
    travel_time: "6",
    total_visitors_per_year: "300000",
  },
];

const India = () => {
  return (
    <div className="bg-blue-50 py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Tourist Spots in India
      </h2>
      <div className="flex justify-start mb-8 max-w-screen-lg mx-auto">
        {" "}
        {/* Center button container */}
        <Link to="/allCountry">
          <button className="btn btn-primary px-5 py-2 text-lg mx-auto md:mx-0 md:ml-6 lg:ml-0">
            Go Back
          </button>
        </Link>
      </div>
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {indiaData.map((spot, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={spot.image}
              alt={spot.tourists_spot_name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {spot.tourists_spot_name}
              </h3>
              <p className="text-gray-500 mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                <strong>Location:</strong> {spot.location}
              </p>
              <p className="text-gray-600 mb-4">{spot.short_description}</p>
              <div className="text-gray-700 mb-4 space-y-2">
                <p className="flex items-center">
                  <FaMoneyBillWave className="mr-2 text-green-500" />
                  <strong>Average Cost:</strong> BDT {spot.average_cost}
                </p>
                <p className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-blue-500" />
                  <strong>Seasonality:</strong> {spot.seasonality}
                </p>
                <p className="flex items-center">
                  <FaClock className="mr-2 text-yellow-500" />
                  <strong>Travel Time:</strong> {spot.travel_time} hours
                </p>
                <p className="flex items-center">
                  <FaUsers className="mr-2 text-purple-500" />
                  <strong>Annual Visitors:</strong>{" "}
                  {spot.total_visitors_per_year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default India;

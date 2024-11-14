import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const maldivesData = [
  {
    image: "../../../public/image/Maldives/male-atoll.webp",
    tourists_spot_name: "Malé Atoll",
    country_name: "Maldives",
    location: "Malé",
    short_description:
      "The most popular atoll, offering vibrant coral reefs and luxurious resorts.",
    average_cost: "8000",
    seasonality: "Winter",
    travel_time: "2",
    total_visitors_per_year: "250000",
  },
  {
    image: "../../../public/image/Maldives/Biyadhoo-Island.jpeg",
    tourists_spot_name: "Biyadhoo Island",
    country_name: "Maldives",
    location: "Kaafu Atoll",
    short_description:
      "A diver’s paradise known for its calm waters, coral reefs, and diverse marine life.",
    average_cost: "7500",
    seasonality: "Autumn",
    travel_time: "1.5",
    total_visitors_per_year: "180000",
  },
  {
    image: "../../../public/image/Maldives/Maafushi-Island.jpeg",
    tourists_spot_name: "Maafushi Island",
    country_name: "Maldives",
    location: "Kaafu Atoll",
    short_description:
      "Famous for its white sandy beaches and water sports activities.",
    average_cost: "6000",
    seasonality: "Summer",
    travel_time: "3",
    total_visitors_per_year: "220000",
  },
  {
    image: "../../../public/image/Maldives/Banana-Reef.jpeg",
    tourists_spot_name: "Banana Reef",
    country_name: "Maldives",
    location: "North Malé Atoll",
    short_description:
      "A top dive site featuring a variety of colorful fish and coral formations.",
    average_cost: "7000",
    seasonality: "Spring",
    travel_time: "1",
    total_visitors_per_year: "150000",
  },
  {
    image: "../../../public/image/Maldives/hulhumale-maldives.webp",
    tourists_spot_name: "Hulhumale Island",
    country_name: "Maldives",
    location: "North Malé Atoll",
    short_description:
      "A blend of beaches and urban life, known for its modern architecture and resorts.",
    average_cost: "6500",
    seasonality: "Winter",
    travel_time: "2.5",
    total_visitors_per_year: "140000",
  },
  {
    image: "../../../public/image/Maldives/Addu-Atoll.jpg",
    tourists_spot_name: "Addu Atoll",
    country_name: "Maldives",
    location: "Addu City",
    short_description:
      "The southernmost atoll with scenic lagoons and unique island experiences.",
    average_cost: "8500",
    seasonality: "Autumn",
    travel_time: "4",
    total_visitors_per_year: "100000",
  },
];

const Maldives = () => {
  return (
    <div className="bg-blue-50 py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Tourist Spots in the Maldives
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
        {maldivesData.map((spot, index) => (
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

export default Maldives;

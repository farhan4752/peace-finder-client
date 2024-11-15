import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const bangladeshData = [
  {
    image: "/image/Bangladesh/Sundarban.jpg",
    tourists_spot_name: "Sundarbans ",
    country_name: "Bangladesh",
    location: "Khulna",
    short_description:
      "The largest mangrove forest in the world, home to the Royal Bengal Tiger.",
    average_cost: "3500",
    seasonality: "Winter",
    travel_time: "8",
    total_visitors_per_year: "120000",
  },
  {
    image: "/image/Bangladesh/cox's bazar.jpg",
    tourists_spot_name: "Cox's Bazar Beach",
    country_name: "Bangladesh",
    location: "Cox's Bazar",
    short_description:
      "The longest natural sea beach in the world, famous for its scenic beauty.",
    average_cost: "2000",
    seasonality: "Summer",
    travel_time: "10",
    total_visitors_per_year: "500000",
  },
  {
    image: "/image/Bangladesh/Ratargul.jpg",
    tourists_spot_name: "Ratargul Swamp Forest",
    country_name: "Bangladesh",
    location: "Sylhet",
    short_description:
      "A freshwater swamp forest and one of the most popular eco-tourism spots.",
    average_cost: "2500",
    seasonality: "Monsoon",
    travel_time: "7",
    total_visitors_per_year: "60000",
  },
  {
    image: "/image/Bangladesh/Sajek-Valley.jpg",
    tourists_spot_name: "Sajek Valley",
    country_name: "Bangladesh",
    location: "Rangamati",
    short_description:
      "Known as the 'Queen of Hills' with breathtaking views and rolling clouds.",
    average_cost: "3000",
    seasonality: "Winter",
    travel_time: "6",
    total_visitors_per_year: "45000",
  },
  {
    image: "/image/Bangladesh/Jaflong.webp",
    tourists_spot_name: "Jaflong",
    country_name: "Bangladesh",
    location: "Sylhet",
    short_description:
      "A scenic spot with rivers and hills, known for its natural stone collection.",
    average_cost: "2200",
    seasonality: "Spring",
    travel_time: "5",
    total_visitors_per_year: "40000",
  },

  {
    image: "/image/Bangladesh/Tanguar Haor.jpg",
    tourists_spot_name: "Tanguar Haor",
    country_name: "Bangladesh",
    location: "Sunamganj",
    short_description:
      "A vast wetland ecosystem known for its biodiversity and scenic beauty.",
    average_cost: "1800",
    seasonality: "Monsoon",
    travel_time: "8",
    total_visitors_per_year: "55000",
  },
];

const Bangladesh = () => {
  return (
    <div className="bg-blue-50 py-12 px-6">
      <h2 className="text-xl lg:text-3xl font-bold text-center mb-6 text-blue-500 font-Times_New_Roman">
        Tourist Spots in Bangladesh
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
        {bangladeshData.map((spot, index) => (
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

export default Bangladesh;

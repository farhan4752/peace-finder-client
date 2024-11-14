import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const nepalData = [
  {
    image: "../../../public/image/Nepal/Everest.jpeg",
    tourists_spot_name: "Everest Base Camp",
    country_name: "Nepal",
    location: "Solukhumbu",
    short_description:
      "A popular trekking destination offering stunning views of Mount Everest.",
    average_cost: "12000",
    seasonality: "Spring, Autumn",
    travel_time: "10",
    total_visitors_per_year: "50000",
  },
  {
    image: "../../../public/image/Nepal/Pokhara.jpeg",
    tourists_spot_name: "Pokhara",
    country_name: "Nepal",
    location: "Kaski",
    short_description:
      "A lakeside city known for its natural beauty and panoramic mountain views.",
    average_cost: "4000",
    seasonality: "All year",
    travel_time: "3",
    total_visitors_per_year: "300000",
  },
  {
    image: "../../../public/image/Nepal/Lumbini.jpeg",
    tourists_spot_name: "Lumbini",
    country_name: "Nepal",
    location: "Rupandehi",
    short_description:
      "The birthplace of Lord Buddha, a pilgrimage site with ancient temples and monasteries.",
    average_cost: "2500",
    seasonality: "All year",
    travel_time: "6",
    total_visitors_per_year: "150000",
  },
  {
    image: "../../../public/image/Nepal/Chitwan National Park.jpeg",
    tourists_spot_name: "Chitwan National Park",
    country_name: "Nepal",
    location: "Chitwan",
    short_description:
      "A UNESCO World Heritage site known for its rich wildlife, including rhinos and tigers.",
    average_cost: "5000",
    seasonality: "Winter",
    travel_time: "5",
    total_visitors_per_year: "100000",
  },
  {
    image: "../../../public/image/Nepal/pashupatinath.jpg",
    tourists_spot_name: "Pashupatinath Temple",
    country_name: "Nepal",
    location: "Kathmandu",
    short_description:
      "A sacred Hindu temple complex dedicated to Lord Shiva, attracting pilgrims from all over.",
    average_cost: "2000",
    seasonality: "All year",
    travel_time: "1",
    total_visitors_per_year: "200000",
  },
  {
    image: "../../../public/image/Nepal/Annapurna Circuit.jpeg",
    tourists_spot_name: "Annapurna Circuit",
    country_name: "Nepal",
    location: "Annapurna",
    short_description:
      "A renowned trekking route offering diverse landscapes and breathtaking mountain views.",
    average_cost: "9000",
    seasonality: "Spring, Autumn",
    travel_time: "14",
    total_visitors_per_year: "60000",
  },
];

const Nepal = () => {
  return (
    <div className="bg-blue-50 py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Tourist Spots in Nepal
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
        {nepalData.map((spot, index) => (
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

export default Nepal;

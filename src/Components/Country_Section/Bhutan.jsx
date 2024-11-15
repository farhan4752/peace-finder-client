import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const bhutanData = [
  {
    image: "/image/Bhutan/Paro-Taktsang.avif",
    tourists_spot_name: "Paro Taktsang (Tiger's Nest Monastery)",
    country_name: "Bhutan",
    location: "Paro",
    short_description:
      "A sacred monastery perched on a cliff, offering breathtaking views and spiritual peace.",
    average_cost: "4500",
    seasonality: "Spring, Autumn",
    travel_time: "3",
    total_visitors_per_year: "70000",
  },
  {
    image: "/image/Bhutan/dzong-Punakha.webp",
    tourists_spot_name: "Punakha Dzong",
    country_name: "Bhutan",
    location: "Punakha",
    short_description:
      "An ancient fortress and palace, known for its stunning architecture and beautiful surroundings.",
    average_cost: "3000",
    seasonality: "Winter, Spring",
    travel_time: "2",
    total_visitors_per_year: "60000",
  },
  {
    image: "/image/Bhutan/Thimphu.jpeg",
    tourists_spot_name: "Thimphu",
    country_name: "Bhutan",
    location: "Thimphu",
    short_description:
      "The capital city of Bhutan, offering a mix of modern and traditional experiences.",
    average_cost: "2000",
    seasonality: "All year",
    travel_time: "1",
    total_visitors_per_year: "150000",
  },
  {
    image: "/image/Bhutan/Buddha-Dordenma-Statue.jpeg",
    tourists_spot_name: "Buddha Dordenma Statue",
    country_name: "Bhutan",
    location: "Thimphu",
    short_description:
      "A giant Buddha statue offering panoramic views of Thimphu valley and peaceful surroundings.",
    average_cost: "2500",
    seasonality: "All year",
    travel_time: "1",
    total_visitors_per_year: "100000",
  },
  {
    image: "/image/Bhutan/Phobjikha-Valley.jpeg",
    tourists_spot_name: "Phobjikha Valley",
    country_name: "Bhutan",
    location: "Wangdue Phodrang",
    short_description:
      "A glacial valley and wildlife reserve known for its beauty and endangered black-necked cranes.",
    average_cost: "4000",
    seasonality: "Winter",
    travel_time: "4",
    total_visitors_per_year: "30000",
  },
  {
    image: "/image/Bhutan/dochula-pass-chorten.jpg",
    tourists_spot_name: "Dochula Pass",
    country_name: "Bhutan",
    location: "Thimphu-Punakha Road",
    short_description:
      "A high mountain pass with 108 memorial chortens and stunning Himalayan views.",
    average_cost: "3500",
    seasonality: "Spring, Winter",
    travel_time: "2",
    total_visitors_per_year: "50000",
  },
];

const Bhutan = () => {
  return (
    <div className="bg-blue-50 py-12 px-6">
      <h2 className="text-xl lg:text-3xl font-bold text-center mb-6 text-blue-500 font-Times_New_Roman">
        Tourist Spots in Bhutan
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
        {bhutanData.map((spot, index) => (
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

export default Bhutan;

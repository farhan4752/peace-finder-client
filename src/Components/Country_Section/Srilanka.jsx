import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const sriLankaData = [
  {
    image: "../../../public/image/Srilanka/Sigiriya-Rock-Fortress.jpg",
    tourists_spot_name: "Sigiriya Rock Fortress",
    country_name: "Sri Lanka",
    location: "Sigiriya",
    short_description:
      "An ancient rock fortress with frescoes and beautiful gardens, offering panoramic views.",
    average_cost: "4000",
    seasonality: "Winter, Spring",
    travel_time: "3",
    total_visitors_per_year: "120000",
  },
  {
    image: "../../../public/image/Srilanka/Ella.jpg",
    tourists_spot_name: "Ella",
    country_name: "Sri Lanka",
    location: "Ella",
    short_description:
      "A small town in the highlands, known for its scenic train ride, waterfalls, and lush hills.",
    average_cost: "2500",
    seasonality: "All year",
    travel_time: "2",
    total_visitors_per_year: "90000",
  },
  {
    image: "../../../public/image/Srilanka/Yala-National-Park.jpeg",
    tourists_spot_name: "Yala National Park",
    country_name: "Sri Lanka",
    location: "Yala",
    short_description:
      "A wildlife sanctuary famous for its leopard population, elephants, and diverse flora and fauna.",
    average_cost: "3500",
    seasonality: "Winter, Spring",
    travel_time: "4",
    total_visitors_per_year: "110000",
  },
  {
    image: "../../../public/image/Srilanka/Temple-of-the-Tooth-header.jpg",
    tourists_spot_name: "Temple of the Tooth",
    country_name: "Sri Lanka",
    location: "Kandy",
    short_description:
      "A UNESCO World Heritage site housing a sacred tooth relic of the Buddha.",
    average_cost: "3000",
    seasonality: "All year",
    travel_time: "2",
    total_visitors_per_year: "130000",
  },
  {
    image: "../../../public/image/Srilanka/Galle-Fort.jpg",
    tourists_spot_name: "Galle Fort",
    country_name: "Sri Lanka",
    location: "Galle",
    short_description:
      "A historic Dutch fort with colonial architecture, quaint streets, and seaside views.",
    average_cost: "2000",
    seasonality: "All year",
    travel_time: "1",
    total_visitors_per_year: "80000",
  },
  {
    image: "../../../public/image/Srilanka/Mirissa Beach.jpeg",
    tourists_spot_name: "Mirissa Beach",
    country_name: "Sri Lanka",
    location: "Mirissa",
    short_description:
      "A popular beach destination known for whale watching, surfing, and relaxing sunsets.",
    average_cost: "2200",
    seasonality: "Summer, Winter",
    travel_time: "3",
    total_visitors_per_year: "75000",
  },
];

const SriLanka = () => {
  return (
    <div className="bg-blue-50 py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Tourist Spots in Srilanka
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
        {sriLankaData.map((spot, index) => (
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

export default SriLanka;

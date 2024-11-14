import { Link } from "react-router-dom";

const countriesData = [
  {
    id: 1,
    IMG: "../../../public/image/country/bd.jpg",
    Country_name: "Bangladesh",
    description:
      "Known for its scenic beauty, vibrant culture, and natural attractions, Bangladesh offers diverse landscapes from the world's longest sea beach at Cox's Bazar to the Sundarbans mangrove forest, home of the Bengal tiger.",
  },
  {
    id: 2,
    IMG: "../../../public/image/country/India.jpg",
    Country_name: "India",
    description:
      "A land of rich history, spirituality, and colorful festivals, India is famous for the Taj Mahal, bustling markets, and diverse cuisine. The country offers a mix of ancient landmarks and modern attractions, making it a unique travel destination.",
  },
  {
    id: 3,
    IMG: "../../../public/image/country/Nepal.jpg",
    Country_name: "Nepal",
    description:
      "Nestled in the Himalayas, Nepal is known for Mount Everest, ancient temples, and a rich spiritual heritage. Adventure seekers and nature lovers are drawn to its trekking routes and serene landscapes.",
  },
  {
    id: 4,
    IMG: "../../../public/image/country/Sri-Lanka.jpg",
    Country_name: "SriLanka",
    description:
      "Sri Lanka offers tropical beaches, wildlife safaris, and ancient ruins. Known for its tea plantations and cultural sites, this island nation provides travelers with a mix of adventure, relaxation, and cultural experiences.",
  },
  {
    id: 5,
    IMG: "../../../public/image/country/maldives.png",
    Country_name: "Maldives",
    description:
      "Renowned for its crystal-clear waters, overwater bungalows, and coral reefs, the Maldives is a tropical paradise that attracts honeymooners, divers, and beach lovers from around the world.",
  },
  {
    id: 6,
    IMG: "../../../public/image/country/bhutan.jpg",
    Country_name: "Bhutan",
    description:
      "The 'Land of the Thunder Dragon,' Bhutan is famous for its peaceful monasteries, stunning mountain scenery, and the philosophy of Gross National Happiness. The country limits tourism to protect its cultural and natural heritage.",
  },
];

const AllCountry = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Explore South Asia
      </h2>
      <p className="text-lg text-center text-gray-600 mb-10 font-cursive italic w-[500px] lg:w-[800px]  mx-auto">
        Journey through South Asia's rich landscapes and vibrant cultures.
        Uncover hidden gems and must-visit destinations across this diverse
        region.
      </p>
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {countriesData.map((country) => (
          <Link
            to={`/${country.Country_name}`}
            key={country.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={country.IMG}
              alt={country.Country_name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {country.Country_name}
              </h3>
              <p className="text-gray-600 mb-4">{country.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCountry;

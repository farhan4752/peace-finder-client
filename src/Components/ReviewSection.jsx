import { FaStar } from "react-icons/fa";
const ReviewSection = () => {
  const reviews = [
    {
      id: "1",
      userName: "Mohammad Asif Rahman",
      rating: 5,
      title: "Amazing Experience!",
      text: "Visiting St. Martin's Island was one of the best experiences of my life. The blue water and white sandy beaches are truly mesmerizing. The food was also very delicious!",
      date: "2024-10-15",
      helpfulVotes: 15,
      managementResponse:
        "Thank you, Asif! Your praise means a lot to us. We look forward to your return!",
    },
    {
      id: "2",
      userName: "Salma Khatun",
      rating: 4,
      title: "Romantic Getaway",
      text: "My trip to the Sundarbans was a romantic experience. The river cruise was really special. However, there were some mosquito issues, so be cautious.",
      date: "2024-09-10",
      helpfulVotes: 10,
      managementResponse:
        "Thank you, Salma! We are always here for our visitors' recommendations.",
    },
    {
      id: "3",
      userName: "Alina Islam",
      rating: 3,
      title: "Historical Site",
      text: "The places near Jaflong were crowded. I missed the beauty of the traditional sites. I would recommend getting a local guide's help.",
      date: "2024-08-22",
      helpfulVotes: 6,
      managementResponse:
        "Thank you, Alina! Local guides can really help enhance the visitor experience. Best wishes for your next trip.",
    },
    {
      id: "4",
      userName: "Shahedullah Mallik",
      rating: 2,
      title: "Disappointing Experience",
      text: "I traveled to Cox's Bazar, but the crowd and rain ruined the entire enjoyment. I hope to visit again in better weather.",
      date: "2024-07-30",
      helpfulVotes: 3,
      managementResponse:
        "We are sorry that your experience was not good, Shahedullah. We hope you return in better weather in the future.",
    },
    {
      id: "5",
      userName: "Jihan Chowdhury",
      rating: 4,
      title: "Mindblowing Journey!",
      text: "My trip to the Sundarbans was a romantic experience. The river cruise was really special. However, there were some mosquito issues, so be cautious.",
      date: "2024-07-30",
      helpfulVotes: 3,
      managementResponse:
        "We are sorry that your experience was not good, Jihan. We hope you return in better weather in the future.",
    },
    {
      id: "6",
      userName: "Farhan Chowdhury",
      rating: 5,
      title: "Amazing Experience!",
      text: "Visiting St. Martin's Island was one of the best experiences of my life. The blue water and white sandy beaches are truly mesmerizing. The food was also very delicious!",
      date: "2024-10-15",
      helpfulVotes: 15,
      managementResponse:
        "Thank you, Farhan! Your praise means a lot to us. We look forward to your return!",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-10 font-serif text-blue-700">
        Visitor's Reviews
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-teal-100 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {review.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{review.date}</p>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">
                {"★".repeat(review.rating)}
              </span>
              <span className="text-gray-400 ml-2">
                {"★".repeat(5 - review.rating)}
              </span>
            </div>
            <p className="text-gray-700 mb-2">{review.text}</p>
            <p className="text-sm text-gray-500">- {review.userName}</p>
            <div className="mt-4 flex items-center">
              <button className="text-blue-600 hover:underline">Helpful</button>
              <span className="text-gray-500 ml-2">
                {review.helpfulVotes} helpful votes
              </span>
            </div>
            {review.managementResponse && (
              <div className="mt-4 bg-blue-100 p-3 rounded-md">
                <strong className="text-blue-600">Management Response:</strong>{" "}
                {review.managementResponse}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-10 justify-between items-stretch my-20 px-6 md:px-0">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-8 py-12 h-[600px] rounded-3xl shadow-2xl bg-gradient-to-r from-green-400 to-teal-100 text-center space-y-4">
          <a className="rounded-tl-full rounded-br-full bg-black text-lg md:text-3xl lg:text-4xl text-red-500 px-8 py-3 font-bold italic transform -rotate-3 shadow-lg mb-5 ">
            PEACE FINDER
          </a>
          <blockquote className="my-4 font-semibold font-serif text-gray-800 italic text-lg lg:text-xl leading-relaxed px-4">
            "Traveling – it leaves you speechless, then turns you into a
            storyteller."
            <span className="block mt-2 text-sm font-light text-gray-600">
              — Ibn Battuta
            </span>
          </blockquote>
          <blockquote className="my-4 font-semibold font-serif text-gray-800 italic text-lg lg:text-xl leading-relaxed px-4">
            "ভ্রমণ করার মূল উদ্দেশ্য হলো আমাদের চোখের পরিধি বাড়ানো।"
            <span className="block mt-2 text-sm font-light text-gray-600">
              — রবীন্দ্রনাথ ঠাকুর
            </span>
          </blockquote>
          <p className="text-base md:text-lg lg:text-xl font-medium text-gray-800 px-4">
            "Your feedback matters! Share your experience with us and help
            fellow travelers discover new destinations. Leave a review today!"
          </p>
          <div className="flex mt-6 space-x-2">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                size={index === 2 ? 60 : 40}
                className="text-yellow-500 transform transition-transform hover:scale-110"
              />
            ))}
          </div>
        </div>

        {/* Review Form */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 p-6 h-full rounded-xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-blue-700 font-Times_New_Roman">
            Leave a Review
          </h3>
          <form className="flex flex-col justify-between h-full">
            <div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Your Name:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition duration-150"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Rating:
                </label>
                <select className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition duration-150">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <option key={rating} value={rating}>{`${rating} Star${
                      rating > 1 ? "s" : ""
                    }`}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Review Title:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition duration-150"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Your Review:
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500 transition duration-150"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            <button className="bg-blue-600 text-white py-3 px-5 rounded-md hover:bg-blue-700 transition duration-200 w-full font-semibold">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-slate-300 py-10 px-6 md:px-20 lg:px-40 bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://www.techspot.com/images2/news/bigimage/2023/05/2023-05-03-image-22.jpg')",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left section - Contact Info */}
        <div className="space-y-4 text-center md:text-left">
          {/* Logo and Name */}
          <div className="flex items-center justify-center md:justify-start">
            <a className="rounded-tl-full rounded-br-full bg-black text-lg md:text-3xl lg:text-4xl text-red-500 px-8 py-3 font-bold italic transform -rotate-3 shadow-lg mb-5 ">
              PEACE FINDER
            </a>
          </div>

          {/* Short Description */}
          <p className="text-white text-sm md:text-base font-mono">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="text-xl md:text-2xl text-white hover:text-gray-900"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-xl md:text-2xl text-blue-400 hover:text-gray-900"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-xl md:text-2xl text-pink-700 hover:text-gray-900"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-xl md:text-2xl text-white hover:text-gray-900"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Contact Details */}
          <div className="space-y-2 font-mono text-sm md:text-base">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <FaPhoneAlt className="text-green-700" />
              <span className="text-white">+88 01533 333 333</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <FaEnvelope className="text-red-700" />
              <span className="text-white">info@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <FaMapMarkerAlt className="text-blue-700" />
              <span className="text-white">
                72. Wall Street, King Road, Dhaka
              </span>
            </div>
          </div>
        </div>

        {/* Right section - Contact Form */}
        <div className="font-mono">
          <h2 className="text-xl md:text-2xl font-bold text-center md:text-left text-white">
            Connect with Us
          </h2>
          <form className="space-y-4 mt-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-amber-700"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="block mx-auto md:mx-0 bg-amber-700 hover:bg-amber-900 text-white font-bold py-2 px-6 rounded-lg shadow-md text-sm md:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center font-courier bg-gray-900 text-white mt-10 py-4 text-xs md:text-sm">
        <p>
          &copy; {new Date().getFullYear()} Peace Finder | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

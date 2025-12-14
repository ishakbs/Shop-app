import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative pt-25 bg-black text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Welcome to Our Store
            </h1>

             <p className="text-lg sm:text-xl lg:text-2xl m-8 text-gray-200">
             Discover amazing products and enjoy a seamless shopping experience.
            </p>

            <div className="flex justify-center space-x-4">
          <Link
            to="/shop"
            className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-3xl shadow-md hover:bg-gray-300 transition duration-700"
          >
            Shop Now
          </Link>
          <a
            href="#about"
            className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-3xl hover:bg-white hover:text-gray-900 transition duration-500"
          >
            Learn More
          </a>
        </div>

         </div>

         
         
      {/* Animated scroll arrow */}
         <div className="absolute bottom-6 left-1/2 transform -translate-x-1 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
export default Hero;
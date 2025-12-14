import Card from "../component/card"
import Navbar from "../component/navbar"
import Hero from "../component/hero"
import Footer from "../component/footer"
import products from "../component/data"

const Home = () => {

 return(
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
            <Card
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              img={product.img}
            />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-black py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-6">Get the latest updates and special offers.</p>
        <div className="flex justify-center">
          <input 
            type="email"
            placeholder="Your email"
            className="px-6 py-2 rounded-l-lg border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="px-6 py-2 bg-white text-black rounded-r-lg font-semibold hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;

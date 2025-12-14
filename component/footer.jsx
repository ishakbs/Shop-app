const Footer = () => {
  return (
    <footer className="bg-black text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white">MyBrand</h2>
          <p className="mt-2 text-gray-400">Quality products, delivered worldwide.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div>
            <h3 className="font-semibold text-white mb-2">Products</h3>
            <a href="#" className="block hover:text-white">Headphones</a>
            <a href="#" className="block hover:text-white">Smart Watch</a>
            <a href="#" className="block hover:text-white">Speaker</a>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Company</h3>
            <a href="#" className="block hover:text-white">About</a>
            <a href="#" className="block hover:text-white">Careers</a>
            <a href="#" className="block hover:text-white">Contact</a>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Follow Us</h3>
            <a href="#" className="block hover:text-white">Facebook</a>
            <a href="#" className="block hover:text-white">Tiktok</a>
            <a href="#" className="block hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

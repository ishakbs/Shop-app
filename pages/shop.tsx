import Card from "../component/card";
import products from "../component/data";
import Navbar from "../component/navbar";
import type { Product } from "../src/types";

const Shop = () => {
  return (
    <div className="min-h-screen bg-black">
    <Navbar />
    <div className="min-h-screen pt-24">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="animate-slide-in-top text-3xl font-bold mb-8 pb-9 text-center text-white">
          Shop
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product: Product) => (
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
    </div>
    </div>
  );
};

export default Shop;

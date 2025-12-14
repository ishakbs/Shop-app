import type { CardProps } from "../src/types";

const Card = ({ title, description, price, img }: CardProps) => {
  return (
        <div className="m-2 mx-auto max-w-sm rounded-2xl bg-white p-6 text-black shadow-md transform transition duration-700 hover:-translate-y-1">
            <div className="flex flex-col items-center space-y-2">
                <img src={img} alt={title} className="bg-white w-full h-48" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <h4 className="text-gray-700">{description}</h4>
                <p className="text-lg font-semibold mb-4">{price}</p>
                <a href="" 
                   className="block text-center mt-2 text-white bg-blue-600 rounded-xl w-full py-2 hover:bg-blue-800 transition duration-700 active:scale-95">Learn More</a>
            </div>

        </div>
    );
};

export default Card;
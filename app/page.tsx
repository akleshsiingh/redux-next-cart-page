import Image from "next/image";
import { products } from "./testdata";
import Navbar from "./components/Navbar";
import AddTocart from "./components/AddTocart";

export default function Home() {

  return (
    <div className="container-fluid mx-auto">
      <Navbar />
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center mx-28 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image src={product.image} height={100} width={400} alt="image"
              style={{ width: 'auto', height: 'auto', objectFit: 'cover' }}>
            </Image>

            <div className="p-4">
              <AddTocart product={product} />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
              <p className="mt-4 text-sm text-gray-600">
                {product.description}
              </p>
            </div>

          </div>
        ))}
      </div>


    </div>
  );
}

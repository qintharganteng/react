// src/components/ProductGrid.jsx

import product1 from '/src/assets/baju.jpg';
import product2 from '/src/assets/baju.jpg';
import product3 from '/src/assets/baju.jpg';
import product4 from '/src/assets/baju.jpg';
import product5 from '/src/assets/baju.jpg';
import product6 from '/src/assets/baju.jpg';

const products = [
  { id: 1, image: product1, name: 'Product 1', price: 'Rp.25.000', oldPrice: '$199' },
  { id: 2, image: product2, name: 'Product 2', price: 'Rp.25.000', oldPrice: '$209' },
  { id: 3, image: product3, name: 'Product 3', price: 'Rp.25.000', oldPrice: '$219' },
  { id: 4, image: product4, name: 'Product 4', price: 'Rp.25.000', oldPrice: '$229' },
  { id: 5, image: product5, name: 'Product 5', price: 'Rp.25.000', oldPrice: '$239' },
  { id: 6, image: product6, name: 'Product 6', price: 'Rp.25.000', oldPrice: '$249' },
];

export default function ProductGrid() {
  return (
    <div className="relative w-full flex justify-center py-20">
      {/* === Dekorasi di pinggir === */}
      <div className="absolute top-8 left-8 w-32 h-1 bg-black rotate-45 opacity-40"></div>
      <div className="absolute bottom-8 right-8 w-32 h-1 bg-amber-700 -rotate-45 opacity-50"></div>
      <div className="absolute top-20 right-12 w-24 h-1 bg-black rotate-12 opacity-40"></div>
      <div className="absolute bottom-20 left-12 w-24 h-1 bg-amber-700 -rotate-12 opacity-50"></div>
      <div className="absolute top-1/3 left-4 w-12 h-12 border-[3px] border-black rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 right-4 w-16 h-16 border-[3px] border-amber-700 rounded-full opacity-50"></div>

      <section className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-xs bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover rounded-t-xl"
              />
              <div className="px-4 py-3">
                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {product.price}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      {product.oldPrice}
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path
                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

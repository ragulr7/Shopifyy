import { useEffect, useState } from "react";

export default function Mobile() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/products/category/tablet")
      .then((res) => res.json())
      .then((data) => {
        setItems(data || []);  
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const addToCart = async (product) => {
  await fetch("http://localhost:8080/api/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })
  });

  alert(`${product.name} added to cart!`);
  window.location.href = "/cart";
};

  
  if (loading) {
    return (
      <div className="min-h-screen py-6">
        <div className="mx-auto w-[92%] sm:w-11/12 md:w-5/6 lg:w-3/4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Tablets</h1>
        </div>
      </div>
    );
  }

 
  return (
    <div className="min-h-screen py-6">
      
      <div className="mx-auto w-[92%] sm:w-11/12 md:w-5/6 lg:w-3/4">
        <h1 className="text-2xl sm:text-3xl font-bold">Tablets</h1>
        <p className="text-gray-600 mt-1">Best Price!</p>
      </div>

      
      <div className="mx-auto w-[92%] sm:w-11/12 md:w-5/6 lg:w-3/4 mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

         {items.map((p) => (
  <div
    key={p.id}
    className="rounded-lg border border-gray-200 p-4 hover:shadow-md transition"
  >
  
    <div className="w-full h-40 sm:h-48 bg-white rounded-md overflow-hidden flex items-center justify-center">
      <img
        src={p.image}
        alt={p.name}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>

  
    <div className="mt-3 space-y-1">
      <h3 className="text-sm sm:text-base font-semibold line-clamp-1">
        {p.name}
      </h3>
      <p className="text-indigo-600 font-bold">₹{p.price}</p>
      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
        {p.category.toUpperCase()}
      </p>
    </div>

  
    <button
      className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-indigo-700 transition
       hover:cursor-pointer"
     onClick={() => addToCart(p)}
    >
      Buy Now
    </button>
  </div>
))}

        </div>
      </div>
    </div>
  );
}
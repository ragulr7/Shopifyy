import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    location: "",
    pincode: ""
  });


  const fetchCart = () => {
    fetch("http://localhost:8080/api/cart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = async (id) => {
    await fetch(`http://localhost:8080/api/cart/${id}`, {
      method: "DELETE",
    });
    fetchCart();
  };


  const updateQty = async (id, qty) => {
    if (qty < 1) return;
    await fetch(`http://localhost:8080/api/cart/${id}/${qty}`, {
      method: "PUT",
    });
    fetchCart();
  };

  const clearCart = async () => {
    await fetch("http://localhost:8080/api/cart/clear", {
      method: "DELETE",
    });
    fetchCart();
  };

  const placeOrder = () => {
    if (!address.name || !address.phone || !address.location || !address.pincode) {
      alert("Please fill all address fields!");
      return;
    }

    const orderData = {
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      deliveryAddress: address,
    };

    console.log("Order Placed:", orderData);

    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-500 text-xl">Your cart is empty.</p>
      )}

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border p-4 rounded-md">
            <img 
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-contain bg-white p-2 rounded"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-indigo-600 font-bold text-xl">₹{item.price}</p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  className="px-3 py-1 bg-gray-200 font-bold"
                  onClick={() => updateQty(item.id, item.quantity - 1)}
                >
                  -
                </button>

                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 font-bold"
                  onClick={() => updateQty(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      
      {cart.length > 0 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={clearCart}
            className="bg-black text-white px-6 py-2 rounded-md"
          >
            Clear Cart
          </button>
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-6">
          
          <div className="text-center mb-4">
            <p className="text-2xl font-bold">
              Total: ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
            </p>
          </div>

          
          <div className="max-w-md mx-auto border p-4 rounded-md shadow-sm bg-white">
            <h2 className="text-xl font-bold mb-3 text-center">Delivery Address</h2>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-2 rounded"
                value={address.name}
                onChange={(e) => setAddress({ ...address, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border p-2 rounded"
                value={address.phone}
                onChange={(e) => setAddress({ ...address, phone: e.target.value })}
              />

              <textarea
                placeholder="Full Address (Street, Area, City)"
                className="border p-2 rounded min-h-24"
                value={address.location}
                onChange={(e) => setAddress({ ...address, location: e.target.value })}
              />

              <input
                type="text"
                placeholder="Pincode"
                className="border p-2 rounded"
                value={address.pincode}
                onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
              />

              <button
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 mt-2"
                onClick={placeOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
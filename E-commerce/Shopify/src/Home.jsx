import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import iphone from "./assets/iphone.jpg";
import laptop from "./assets/laptop.jpg";
import tablet from "./assets/tablet.jpg";
import ps5 from "./assets/ps5.jpg";
import watch from "./assets/watch.jpg";
import speakers from "./assets/speakers.jpg";
import tv from "./assets/tv.jpg";
import camera from "./assets/camera.jpg";
import headphone from "./assets/headphones.jpg";
import powerbank from "./assets/powerbank.jpg";
import projector from "./assets/projector.jpg";

import iphonee from "./assets/iphone-17.jpg";
import iphone17 from "./assets/iphone17.jpg";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Shopify - Home";
  }, []);

  const category = [
    { img: iphone, name: "Mobile", path: "/mobile" },
    { img: laptop, name: "Laptop", path: "/laptop" },
    { img: tablet, name: "Tablet", path: "/tablet" },
    { img: ps5, name: "PS5", path: "/ps5" },
    { img: watch, name: "Smart Watch", path: "/smartwatch" },
    { img: speakers, name: "Speakers", path: "/speakers" },
    { img: tv, name: "Smart TV", path: "/tv" },
    { img: camera, name: "Camera", path: "/camera" },
    { img: headphone, name: "Headphones", path: "/headphones" },
    { img: powerbank, name: "PowerBank", path: "/powerbank" },
    { img: projector, name: "Projector", path: "/projector" }
  ];

  const images = [iphonee, iphone17];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      2000
    );

    return () => clearInterval(intervalId);
  }, []);

  const all = category; 

  return (
    <div className="w-full">

      <div className="bg-yellow-300 py-4 shadow">
        <h1 className="font-bold flex justify-center text-3xl">Shopify</h1>

        <div className="flex justify-center gap-4 flex-wrap mt-2 text-lg">
          <a href="/" className="hover:underline">Home</a>
          <a href="aboutus" className="hover:underline">About Us</a>

          
          <div className="relative group">
            <span className="cursor-pointer inline-flex items-center gap-1 hover:underline">
              Products ▾
            </span>

            <div className="
              absolute left-1/2 -translate-x-1/2 top-full mt-2 w-40
              rounded-md border border-gray-200 bg-white shadow-md z-50
              opacity-0 invisible translate-y-2
              transition-all duration-200
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
            "> 
              {all.map((item, index) => (
                <p
                  key={index}
                  className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>

          <a href="contactus" className="hover:underline">Contact Us</a>
          <a href="cart" className="hover:underline">Cart</a>
        </div>
      </div>
      <div
        className="
          flex gap-6 mt-6 px-4 
          overflow-x-auto whitespace-nowrap 
          scrollbar-hide
        "
      >
        {category.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer min-w-[90px]"
            onClick={() => navigate(item.path)}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full shadow"
            />
            <p className="mt-2 text-sm sm:text-base">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="w-full bg-black flex justify-center items-center py-10">
        <div className="w-[92%] sm:w-11/12 md:w-5/6 lg:w-3/4">
          <img
            src={images[currentIndex]}
            alt="background"
            className="
              w-full
              h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]
              object-contain rounded-xl shadow-xl
            "
          />
        </div>
      </div>
      <footer className="bg-black text-center text-white py-4">
        © Shopify.com
      </footer>
    </div>
  );
}

export default Home;
import { useNavigate } from "react-router-dom";
import iphone from "./assets/iphone.jpg";
import laptop from "./assets/laptop.jpg";
import tablet from "./assets/tablet.jpg"
import ps5 from "./assets/ps5.jpg"
import watch from "./assets/watch.jpg"
import speakers from "./assets/speakers.jpg"
import tv from "./assets/tv.jpg"
import camera from "./assets/camera.jpg"
import headphone from "./assets/headphones.jpg"
import powerbank from "./assets/powerbank.jpg"
import projector from "./assets/projector.jpg"
import samsung from "./assets/samsung.jpg"
import iphonee from "./assets/iphone-17.jpg"
import iphone17 from "./assets/iphone17.jpg"
import { use, useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();
   useEffect(() => {
    document.title = "Shopify - Home"; 
  }, []);
  const category = [
    { img: iphone, name: "Mobile" ,path : "/mobile"},
    { img: laptop, name: "laptop" , path :"/laptop"},
    {img : tablet , name: "Tablet" , path :"/tablet"},
    {img : ps5 , name:"PS5" , path: "/ps5"},
    {img : watch , name:"Smart Watch" , path :"/smartwatch"},
    {img : speakers , name :"Speakers" ,path :"/speakers"},
    {img : tv , name:"Smart TV" , path :"/tv"},
    {img: camera , name:"Camera" , path:"/camera"},
    {img: headphone , name:"Headphone", path:"/headphones"},
    {img: powerbank , name:"PowerBank", path:"/powerbank"},
    {img: projector , name:"Projector", path:"/projector"}    
  ]; 
  const images = [iphonee, iphone17]; 
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalId); 
  }, []);

  const all = [{ name: "Mobile" , path:"/mobile" }, { name: "Laptop" ,path:"/laptop" }, { name: "Tablet" ,path:"/tablet" } , {name:"PS5" ,path:"/ps5"},
    {name:"Smart Watch" , path:"/smartwatch"} ,{name:"Speakers" , path:"/speakers"} ,{name:"Smart TV" , path:"/tv"} ,{name:"Camera", path:"/camera"},{name:"Headphones", path:"/headphones"},
    {name:"PowerBank", path:"/powerbank"} , {name:"Projector", path:"/projector"}  
  ]; 
  return (
    
    <div>
      <div className="flex-row bg-yellow-300" >
        <h1 className="font-bold flex justify-center text-3xl">Shopify</h1>
        <span className="flex justify-center gap-3">
          <a href="/">Home</a>
          <a href="aboutus">About Us</a> 
          <div className="relative group">
            <a 
              href="products"
              className="cursor-pointer inline-flex items-center gap-1" 
              onClick={(e) => e.preventDefault()} 
            >
              Products <span aria-hidden>▾</span>
            </a>
            <div 
              className="
                absolute left-0 top-full mt-2 w-40
                rounded-md border border-gray-200 bg-white shadow-md z-50
                opacity-0 invisible translate-y-1
                transition-all duration-200
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              " 
            >
              {all.map((item, index) => (
                <p
                  key={index}
                  className="py-2 px-3 hover:bg-gray-100 rounded  hover:cursor-pointer"
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>

          <a href="contactus">Contact Us</a>
          <a href="cart">Cart</a>
        </span> 
      </div>
<div 
  className="
    flex gap-4 mt-6 
    overflow-x-auto            
    sm:overflow-x-auto         
    lg:overflow-x-visible      
    whitespace-nowrap          
    scrollbar-hide             
  "
>
        {category.map((item, index) => (
          <div key={index} className="flex flex-col items-start hover:cursor-pointer"
          onClick={() => navigate(item.path)}
          > 
            <img 
              src={item.img}
              alt={item.name}
              className="w-25 h-25 object-cover rounded-full"
            />
            <p>{item.name}</p>
          </div> 
        ))}
      </div>
<div className="w-full bg-black h-screen flex justify-center items-center">
  <div className="w-[92%] sm:w-11/12 md:w-5/6 lg:w-3/4">
    <img
      src={images[currentIndex]}
      alt="background"
      className="
        w-full 
        max-h-[80vh]
        object-contain
        rounded-xl
        shadow-xl
      "
    />
  </div>
</div>
    <footer className="bg-black text-center text-white" >
      @Shopify.com
    </footer>
    </div>
  );
}

export default Home;
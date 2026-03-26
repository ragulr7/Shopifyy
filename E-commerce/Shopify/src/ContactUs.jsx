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
import { use, useEffect, useState } from "react";

function ContactUs() {
  const navigate = useNavigate();
   useEffect(() => {
    document.title = "Shopify - Contact Us"; 
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
  const images = [samsung, tv ]; 
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId); 
  }, []);

  const all = [{ name: "Mobile" , path:"/mobile" }, { name: "Laptop" ,path:"/laptop" }, { name: "Tablet" ,path:"/tablet" } , {name:"PS5" ,path:"/ps5"},
    {name:"Smart Watch" , path:"/smartwatch"} ,{name:"Speakers" , path:"/speakers"} ,{name:"Smart TV" , path:"/tv"} ,{name:"Camera", path:"/camera"},{name:"Headphones", path:"/headphones"},
    {name:"PowerBank", path:"/powerbank"} , {name:"Projector", path:"/projector"}  
  ]; 
    return(
        <div>
             <div className="flex-row bg-yellow-300" >
        <h1 className="font-bold flex justify-center text-3xl">Shopify</h1>

        <span className="flex justify-center gap-3">
          <a href="/">Home</a>
          <a href="AboutUs">About Us</a>
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
          <a href="ContactUs">Contact Us</a>
          <a href="cart">Cart</a>
        </span>
        
      </div >
     <div className="w-full min-h-screen bg-gray-800 flex items-center justify-center p-6">
 
  <div className="w-full max-w-6xl bg-gray-900 rounded-md shadow-xl overflow-hidden">
    <div className="flex flex-col lg:flex-row">
      
      <div className="w-full lg:w-1/2 p-6 lg:p-8">
        <div className="grid grid-cols-2 gap-4">
          
          <div className="bg-white rounded-md shadow p-5 flex flex-col gap-2">
            <div className="text-sky-500 text-2xl">📍</div>
            <h3 className="text-gray-900 font-extrabold text-sm tracking-wide">
              OUR MAIN OFFICE
            </h3>
            <p className="text-gray-600 text-sm leading-snug">
             Broadway Mall (opp)<br />Sitra, CBE
            </p>
          </div>

          
          <div className="bg-white rounded-md shadow p-5 flex flex-col gap-2">
            <div className="text-sky-500 text-2xl">📞</div>
            <h3 className="text-gray-900 font-extrabold text-sm tracking-wide">
              PHONE NUMBER
            </h3>
            <p className="text-gray-600 text-sm leading-snug">
              9348567892<br />
            </p>
          </div>
          
          <div className="bg-white rounded-md shadow p-5 flex flex-col gap-2">
            <div className="text-sky-500 text-2xl">📠</div>
            <h3 className="text-gray-900 font-extrabold text-sm tracking-wide">
              Instagram
            </h3>
            <p className="text-gray-600 text-sm">Shopify_Shop</p>
          </div> 
          
          <div className="bg-white rounded-md shadow p-5 flex flex-col gap-2">
            <div className="text-sky-500 text-2xl">✉️</div>
            <h3 className="text-gray-900 font-extrabold text-sm tracking-wide">
              EMAIL
            </h3>
            <a
              href="mailto:hello@theme.com"
              className="text-sky-600 text-sm hover:underline"
            >
              shopify@shopify.com
            </a>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-sky-300">
        <div className="p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Contact Us
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />

            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />

            <textarea
              rows={6}
              placeholder="Enter your message here"
              className="w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />

            <button
              type="submit"
              className="mx-auto block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded border border-blue-200 shadow-sm"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        
        
    )
}
export default ContactUs;
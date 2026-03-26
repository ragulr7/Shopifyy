import './App.css'
import Home from './Home'
import Mobile from './Mobile'
import Laptop from './Laptop'
import Tablet from './Tablet'
import SmartWatch from './SmartWatch'
import Ps5 from './Ps5'
import Speakers from './Speakers'
import Tv from './Tv'
import Camera from './Camera'
import PowerBank from './PowerBank'
import AboutUs from './AboutUs'
import HeadPhones from './Headphones'
import Projector from './Projector'
import ContactUs from './ContactUs'
import CartPage from './CartPage'
import {Routes , Route} from "react-router-dom"
function App() {
 
 
  return (
   
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/laptop" element={<Laptop/>}/>
      <Route path="/tablet" element={<Tablet/>}/>
      <Route path="/smartwatch" element={<SmartWatch/>}/>
      <Route path="/ps5" element={<Ps5/>}/>
      <Route path="/speakers" element={<Speakers/>}/>
      <Route path="/tv" element={<Tv/>}/>
      <Route path="/camera" element={<Camera/>}/>
      <Route path="/powerbank" element={<PowerBank/>}/>
      <Route path="/headphones" element={<HeadPhones/>}/>
      <Route path="/projector" element={<Projector/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/contactUs" element={<ContactUs/>}/>
      <Route path="/cart" element={<CartPage/>}/>
     </Routes>
     
    
  )
}

export default App

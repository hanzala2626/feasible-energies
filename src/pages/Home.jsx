import React, { useState } from 'react';
import OurServices from '../component/OurServices';
import HomeComp from '../component/HomeComp';

const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full h-full'>
      {/* Navbar */}
    

      {/* Marquee Section */}
      <div className="bg-blue-600 text-white text-center py-2">
        <marquee>We have delivered 100+ projects worldwide!</marquee>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center py-20 bg-gray-100">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">
          Our Services
        </h1>
        <HomeComp/>
        {/* <OurServices/> */}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>Office: 1234 Solar Street, Green City</p>
        <p>Contact: +123456789 | info@company.com</p>
      </footer>
    </div>
  );
};

export default Home;

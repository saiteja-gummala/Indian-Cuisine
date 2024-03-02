import React from "react";


const App = () => {
  return (
    <>
     <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center" style={{ backgroundImage: "url('BG_Cover.jpg')" }}>

      
     
      <div className="hidden md:contents hover:font-bold">
      <a href="https://maps.app.goo.gl/riKn7AuucUBgSBCG8" target="_blank" className="absolute left-4 top-4 text-white font-semibold text-md"><i className="fa-solid fa-location-dot"></i> 188 Pacific Hwy,Hornsby, NSW 2077</a>
      </div>
      <div className="contents md:hidden">
      <a href="#" className="absolute left-4 top-4 text-white font-semibold text-md"><i className="fa-solid fa-location-dot text-md"></i></a>
      </div>

     
      <div className="absolute top-4 right-4 flex text-xs md:text-base font-semibold">
        <a href="callto:+61 426253684" className="text-white mr-4 hover:font-bold"><i class="fa-solid fa-phone"></i> +61 426253684</a>
        <a href="mailto:support@biryaniindiancuisine.com.au" className="text-white hover:font-bold"><i class="fa-solid fa-envelope"></i>&nbsp; support@biryaniindiancuisine.com.au</a>
        <hr />
      </div>

    
      <div className="text-center">
        <h1 className="text-4xl font-bold text-zinc-100 mb-4 md:text-6xl">Biryani Indian Cuisine</h1>
        <i class="fa-solid fa-star text-orange-400"></i><i class="fa-solid fa-star text-orange-400"></i><i class="fa-solid fa-star text-orange-400"></i><i class="fa-solid fa-star text-orange-400"></i><i class="fa-solid fa-star text-orange-400"></i>
        <p className="mb-4 text-balance text-zinc-200 leading-1">
        Indulge in the rich flavors of authentic Indian cuisine at Biryani Indian Cuisine. Our diverse menu features a tantalizing array of biryanis, curries, and tandoor specialties crafted with the finest spices and ingredients. Immerse yourself in the culinary heritage of India, where each dish is a symphony of taste and tradition. Join us for a culinary journey that promises to delight your senses and transport you to the heart of India. Explore our menu and experience the essence of Biryani Indian Cuisine today</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md"><a href="Menu.pdf" target="_blank">View Menu</a></button>
        <div className="text-white mt-4 text-base font-semibold">
          <p>(Friday,saturday-sunday):12pm-10pm</p>
          <p>(Mon,Tues,Wed):5pm-10pm</p>
          <p>Thursday:12pm-3pm,5pm-10pm</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;

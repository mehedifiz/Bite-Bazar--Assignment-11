import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const img1 = 'https://images.unsplash.com/photo-1636910419722-adc90644cff1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww';
const img2 ='https://images.unsplash.com/photo-1622115837997-90c89ae689f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D';
const img3 = 'https://plus.unsplash.com/premium_photo-1683892034683-b6896f6245f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D';

const Banner = () => {
    return ( 
      <div>
        <div className="carousel w-full relative">
          <div id="item1" className="carousel-item w-full relative">
            <img src={img1} className="w-full h-64 md:h-96 object-cover" alt="Image 1" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-white text-lg md:text-3xl font-bold">Delicious Food</h2>
              <p className="text-white text-sm md:text-lg mt-2">Discover our mouth-watering selection!</p>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full relative">
            <img src={img2} className="w-full h-64 md:h-96 object-cover" alt="Image 2" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-white text-lg md:text-3xl font-bold">Fresh Ingredients</h2>
              <p className="text-white text-sm md:text-lg mt-2">Quality you can taste in every bite.</p>
            </div>
          </div>
          <div id="item3" className="carousel-item w-full relative">
            <img src={img3} className="w-full h-64 md:h-96 object-cover" alt="Image 3" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-white text-lg md:text-3xl font-bold">Perfectly Crafted</h2>
              <p className="text-white text-sm md:text-lg mt-2">Curated for food lovers everywhere.</p>
            </div>
          </div>
          <div id="item4" className="carousel-item w-full relative">
            <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" className="w-full h-64 md:h-96 object-cover" alt="Image 4" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-white text-lg md:text-3xl font-bold">Seasonal Specials</h2>
              <p className="text-white text-sm md:text-lg mt-2">Enjoy the best of each season's flavors.</p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
      </div>
    );
};

export default Banner;

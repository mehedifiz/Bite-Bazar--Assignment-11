import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews data from the public folder
    const fetchReviews = async () => {
      try {
        const response = await fetch('/reviews.json'); // path to the reviews.json file
        const data = await response.json();
        setReviews(data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="review-section bg-slate-50 py-12 my-10 flex flex-col items-center">
      {/* Centered Heading */}
      <div className="w-full">
        <h2 className="text-center text-2xl font-semibold mb-6">Our Reviews</h2>
      </div>

      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        className="w-full max-w-md"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="p-6 bg-white shadow-xl rounded-xl flex justify-center items-center flex-col">
                
              <img 
                src={review.image} 
                alt={review.name} 
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <p className="text-lg font-semibold text-gray-800 mb-2">{review.name}</p>
              <p className="text-gray-600 text-center">{review.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;

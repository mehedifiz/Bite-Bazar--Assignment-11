import React from 'react';
const img = 'https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&w=600'; // Ensure the path to the image is correct

const About = () => {
    return (
        <div className="my-10 flex flex-col items-center">
            <div
                className="min-h-64 w-full bg-cover bg-center rounded-lg shadow-lg"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                <div className="flex items-center justify-center min-h-64 bg-black bg-opacity-50 rounded-lg">
                    <h1 className="text-4xl font-bold text-white">About Bite-Bazar</h1>
                </div>
            </div>
            <div className="bg-[#584f26] bg-opacity-80 p-6 rounded-md shadow-md max-w-2xl text-center mt-4">
                <p className="text-lg text-slate-50 ">
                    At Bite-Bazar, we connect food lovers with a diverse range of cuisines, ensuring quality and a delightful dining experience. 
                    Discover new flavors and enjoy your favorites with ease!
                </p>
            </div>
        </div>
    );
};

export default About;

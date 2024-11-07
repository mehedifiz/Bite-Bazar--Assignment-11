import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS for map styles

const LocationSection = () => {
  const [center, setCenter] = useState([23.8103, 90.4125]);  
  const [zoom, setZoom] = useState(13);

  return (
    <div className="container my-24 mx-auto py-10 px-4 bg-white ">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Our Location</h2>
        <p className="text-xl text-gray-600">Find us easily with the map below</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Map Section */}
        <div className="w-full min-h-[60vh] md:h-[80vh] lg:h-[60vh] rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={true}
            className="w-full h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
              <Popup>
                <span>Our location in Dhaka!</span>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md p-4">
            <img
              src="https://i.ibb.co/X83vrZG/vecteezy-restaurant-waiter-with-barcode-menu.jpg" 
              alt="Location Image"
              className="rounded-xl   w-full h-fit object-cover"
            />
            <p className="mt-4 text-center text-lg font-semibold text-gray-700">Visit our restaurant!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;

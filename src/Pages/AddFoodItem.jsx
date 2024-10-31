import React, { useContext, useState } from 'react';
import { AuthContext } from '../Auth/Authprovider';
import UseAxiosprivate from '../hooks/UseAxiosprivate';
import UseAxiospublic from '../hooks/UseAxiospublic';

const AddFoodItem = () => {
  const { user } = useContext(AuthContext);
const UseAxios = UseAxiosprivate();
  const [foodName, setFoodName] = useState('');
  const [foodImage, setFoodImage] = useState('');
  const [foodCategory, setFoodCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [foodOrigin, setFoodOrigin] = useState('');
  const [description, setDescription] = useState('');

  const postfoods = () => {
    const foodData = {
      foodName,
      foodImage,
      foodCategory,
      quantity,
      price,
      foodOrigin,
      description,
      email: user?.email,
      date: new Date().toISOString(),
    };
 UseAxios.post("/addfoods", foodData )
      .then((response) => {
        console.log('Food item added successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error adding food item:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div
        className="relative h-60 w-full bg-cover bg-center"
        style={{ backgroundImage: 'url("banner-image-url")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Add a Food Item</h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex justify-center mt-8">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            postfoods();
          }}
          className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">Food Information</h2>

          {/* Food Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Food Name</label>
            <input
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter food name"
              required
            />
          </div>

          {/* Food Image */}
          <div className="mb-4">
            <label className="block text-gray-700">Food Image URL</label>
            <input
              type="text"
              value={foodImage}
              onChange={(e) => setFoodImage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Food Category Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700">Food Category</label>
            <select
              value={foodCategory}
              onChange={(e) => setFoodCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            >
              <option value="" disabled>Select category</option>
              <option value="Noodles">Noodles</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Pizza">Pizza</option>
              <option value="Dessert">Dessert</option>
              <option value="Salad">Salad</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label className="block text-gray-700">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter quantity"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700">Price ($)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Country of Origin */}
          <div className="mb-4">
            <label className="block text-gray-700">Food Origin (Country)</label>
            <input
              type="text"
              value={foodOrigin}
              onChange={(e) => setFoodOrigin(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter country of origin"
              required
            />
          </div>

          {/* Short Description */}
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Enter ingredients, making procedure, etc."
              required
            ></textarea>
          </div>

          {/* Added By (User Email) */}
          <div className="mb-4">
            <label className="block text-gray-700">Added By (Email)</label>
            <p className="text-gray-600">
              {user?.email || 'user@example.com'}
            </p>
          </div>

          {/* Add Item Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 mt-6 text-white bg-green-600 rounded-lg hover:bg-green-500"
          >
            Add Food Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFoodItem;

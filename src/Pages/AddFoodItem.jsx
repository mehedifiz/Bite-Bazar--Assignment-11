import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaUtensils } from "react-icons/fa";
import useAuth from "../Auth/Useauth";
import { Helmet } from "react-helmet";
import UseAxiospublic from "../hooks/UseAxiospublic";

const AddFoodItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = UseAxiospublic();
  const {user} = useAuth();

  const onSubmit = async (data) => {
    console.log(data);

    // Prepare food data as per the structure
    const foodData = {
      name: data.name,
      image: data.image, // Direct image link
      category: data.category,
      quantity: parseInt(data.quantity),
      price: parseFloat(data.price),
      origin: data.origin,
      description: data.description,
      email: user?.email ,
      date: new Date().toISOString(),
    };

    try {
      // Send food data to the backend
      const response = await axiosPublic.post("/addfoods", foodData);

      if (response.data.insertedId) {
        toast.success(`${foodData.name} has been added to the menu!`);
      }
    } catch (error) {
      console.error("Error adding food item:", error);
      toast.error("Failed to add the food item.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
         <Helmet>
        <title>Add Food| Bite-Bazar  </title>
         
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-8">Add a Food Item</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 shadow-md rounded-lg max-w-lg mx-auto">
        {/* Food Name */}
        <label className="block mb-4">
          <span className="text-gray-700">Food Name*</span>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input input-bordered w-full mt-1"
            placeholder="Enter food name"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Image URL*</span>
          <input
            type="text"
            {...register("image", { required: true })}
            className="input input-bordered w-full mt-1"
            placeholder="Enter image URL"
          />
        </label>

        {/* Category */}
        <label className="block mb-4">
          <span className="text-gray-700">Category*</span>
          <select {...register("category", { required: true })} className="select select-bordered w-full mt-1">
            <option value="" disabled>Select a category</option>
            <option value="Salad">Salad</option>
            <option value="Pizza">Pizza</option>
            <option value="Soup">Soup</option>
            <option value="Drinks">Drinks</option>
            <option value="Dessert">Dessert</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Quantity*</span>
          <input
            type="number"
            {...register("quantity", { required: true })}
            className="input input-bordered w-full mt-1"
            placeholder="Enter quantity"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Price ($)*</span>
          <input
            type="number"
            {...register("price", { required: true })}
            className="input input-bordered w-full mt-1"
            placeholder="Enter price"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Origin*</span>
          <input
            type="text"
            {...register("origin", { required: true })}
            className="input input-bordered w-full mt-1"
            placeholder="Enter origin of the food"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Description*</span>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full mt-1"
            placeholder="Enter a description"
          />
        </label>

         

        <button type="submit" className="btn mt-6 w-full">
          Add Item <FaUtensils className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default AddFoodItem;

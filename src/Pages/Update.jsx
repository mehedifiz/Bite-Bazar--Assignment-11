import { useLoaderData } from "react-router-dom";
import Sectiontitle from "../Components/SectionTitle";
import useAuth from "../Auth/Useauth";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import UseAxiospublic from "../hooks/UseAxiospublic";
import UseAxiosprivate from "../hooks/UseAxiosprivate";
import { toast } from "react-toastify";

const Update = () => {
  const item = useLoaderData();
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const Axiosprivate  = UseAxiosprivate();

  console.log("Loaded item:", item);

  const onSubmit = async (data) => {
    // Prepare food data as per the structure
    const foodData = {
      name: data.name,
      image: data.image, // Direct image link
      category: data.category,
      quantity: parseInt(data.quantity),
      price: parseFloat(data.price),
      origin: data.origin,
      description: data.description,
      email: user?.email,
      date: new Date().toISOString(),
    };

    const result = await Axiosprivate.patch(`/update/${item._id}` , foodData)
    console.log(result.data)

    if(result.data.modifiedCount){
        toast.success('Item Updated ')
    }
  };

  return (
    <div>
      <Sectiontitle heading="Update the Item" />

      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Update Food Item</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 shadow-md rounded-lg max-w-lg mx-auto">
          {/* Food Name */}
          <label className="block mb-4">
            <span className="text-gray-700">Food Name*</span>
            <input
              type="text"
              defaultValue={item?.name || ""}
              {...register("name", { required: true })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter food name"
            />
          </label>

          {/* Image Link */}
          <label className="block mb-4">
            <span className="text-gray-700">Image URL*</span>
            <input
              type="text"
              defaultValue={item?.image || ""}
              {...register("image", { required: true })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter image URL"
            />
          </label>

          {/* Category */}
          <label className="block mb-4">
            <span className="text-gray-700">Category*</span>
            <select {...register("category", { required: true })} defaultValue={item?.category || ""} className="select select-bordered w-full mt-1">
              <option value="" disabled>
                Select a category
              </option>
              <option value="Salad">Salad</option>
              <option value="Pizza">Pizza</option>
              <option value="Soup">Soup</option>
              <option value="Drinks">Drinks</option>
              <option value="Dessert">Dessert</option>
            </select>
          </label>

          {/* Quantity */}
          <label className="block mb-4">
            <span className="text-gray-700">Quantity*</span>
            <input
              type="number"
              defaultValue={item?.quantity || ""}
              {...register("quantity", { required: true })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter quantity"
            />
          </label>

          {/* Price */}
          <label className="block mb-4">
            <span className="text-gray-700">Price ($)*</span>
            <input
              type="number"
              defaultValue={item?.price || ""}
              {...register("price", { required: true })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter price"
            />
          </label>

          {/* Origin */}
          <label className="block mb-4">
            <span className="text-gray-700">Origin*</span>
            <input
              type="text"
              defaultValue={item?.origin || ""}
              {...register("origin", { required: true })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter origin of the food"
            />
          </label>

          {/* Description */}
          <label className="block mb-4">
            <span className="text-gray-700">Description*</span>
            <textarea
              defaultValue={item?.description || ""}
              {...register("description", { required: true })}
              className="textarea textarea-bordered w-full mt-1"
              placeholder="Enter a description"
            />
          </label>

          {/* Submit Button */}
          <button type="submit" className="btn mt-6 w-full">
            Update Item <FaUtensils className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;

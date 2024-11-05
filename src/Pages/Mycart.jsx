import React from "react";
import useMycart from "../hooks/useMycart";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import UseAxiospublic from "../hooks/UseAxiospublic";

const Mycart = () => {
  const [refetch, cart] = useMycart();
  const axiosPublic = UseAxiospublic();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/purchase/${id}`)
          .then((res) => {
            if (res.data.deletedCount ) {
              refetch();
              toast.success("Item successfully deleted from your cart!");
            }
          })
          .catch((err) => {
            toast.error("Failed to delete the item. Please try again.");
            console.error(err);
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto min-h-[80vh]">
      <Helmet>
        <title>My Cart | Bite-Bazar</title>
      </Helmet>
      {cart.length > 0 ? (
        <table className="table-auto mx-auto w-[80vw] border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((food) => (
              <tr key={food._id}>
                <td className="px-4 py-2 border">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-4 py-2 border">{food.name}</td>
                <td className="px-4 py-2 border">${food.price}</td>
                <td className="px-4 py-2 border">
                  <FaTrash
                    onClick={() => handleDelete(food._id)}
                    className="text-orange-500 text-2xl"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10 text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Mycart;

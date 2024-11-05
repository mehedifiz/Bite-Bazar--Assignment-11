import React, { useEffect, useState, useRef, useCallback } from "react";
import UseAxiospublic from "../hooks/UseAxiospublic";
import Sectiontitle from "../Components/SectionTitle";
import useAuth from "../Auth/Useauth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import Rebanner from "../Components/Rebanner";

const Gallary = () => {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const limit = 3;
  const AxiosPublic = UseAxiospublic();

  const observerRef = useRef();

  const fetchGallery = async () => {
    setLoading(true);
    try {
      const result = await AxiosPublic.get(
        `/gallery?page=${page}&limit=${limit}`
      );
      setGallery((prev) => [...prev, ...result.data]);
      setHasMore(result.data.length > 0); // Set hasMore based on received data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, [page]);

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore]
  );

  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const feedback = e.target.feedback.value;
    const image = e.target.image.value;

    const data = {
      name,
      feedback,
      image,
    };

    try {
      const result = await AxiosPublic.post("/gallery", data);
      if (result.data.insertedId) {
        toast.success("Thanks for posting!");
        setPage(1);
        setGallery([]);
        fetchGallery();
      }
    } catch (error) {
      console.error("Error posting gallery item:", error);
      toast.error("Failed to post your feedback.");
    }
  };

  return (
    <div>
      <Rebanner
        image="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Our gallary page "
        description="What our customer said "
      />
      <Sectiontitle heading="Gallery" subheading="What our foodies said!!" />
      <Helmet>
        <title>Gallary | Bite-Bazar</title>
      </Helmet>

      <div className="flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl text-center">Share your experience !!</h2>
        <button
          className={`btn ${user ? "btn-primary" : "btn-disabled"}`}
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Share
        </button>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box h-96 w-[80vw]">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>

            <form onSubmit={handleSubmit} method="dialog" className="space-y-3">
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>

              <label className="input input-bordered flex items-center gap-2">
                Name
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  disabled
                  name="name"
                  className="grow"
                  placeholder="Write your name"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                Feedback
                <input
                  type="text"
                  name="feedback"
                  className="grow"
                  placeholder="Your feedback"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                Image
                <input
                  type="text"
                  name="image"
                  className="grow"
                  placeholder="Image URL"
                />
              </label>

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </dialog>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((item, index) => (
          <div
            key={item.id}
            ref={index === gallery.length - 1 ? lastItemRef : null}
            className="relative group w-96 h-64 overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white px-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm">{item.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center items-center p-6">
          <div className="loading-spinner  border-t-4 border-b-4 border-neutral rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Gallary;

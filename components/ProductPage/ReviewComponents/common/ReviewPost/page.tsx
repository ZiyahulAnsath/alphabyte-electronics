"use client";
import { Rate } from "antd";
import { useState } from "react";

const ReviewPost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      rating === 0 ||
      review.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    console.log("Submitted:", { name, email, rating, review });
  };

  return (
    <>
      <div className="mx-auto ">
        {/* <h2 className="text-2xl font-semibold mb-4">Post Your Review</h2> */}

        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-3 items-center">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-grey-text"
                >
                  Name
                </label>
              </div>
              <div className="md:col-span-2 col-span-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 w-full rounded-md focus:outline-none focus-blue-500 bg-transparent border text-white border-grey-text"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-3 items-center">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-grey-text"
                >
                  Email
                </label>
              </div>
              <div className="md:col-span-2 col-span-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 w-full rounded-md focus:outline-none focus-blue-500 bg-transparent border text-white border-grey-text"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-3 items-center">
              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-grey-text"
                >
                  Rating
                </label>
              </div>
              <div className="md:col-span-2 col-span-3">
                <Rate
                  onChange={(value) => setRating(value)}
                  allowHalf
                  className=" text-green-text"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 items-center">
              <div>
                <label
                  htmlFor="review"
                  className="block text-sm font-medium text-grey-text"
                >
                  Review
                </label>
              </div>
              <div className="md:col-span-2 col-span-3">
                <textarea
                  id="review"
                  name="review"
                  rows={4}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="mt-1 p-2 w-full rounded-md focus:outline-none focus-blue-500 text-grey-text bg-transparent border border-grey-text"
                  required
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="text-xl bg-grey-bg_primary font-bold hover:text-green-text hover:font-semibold ease-linear duration-300 border-none hover:bg-grey-bg_primary px-5 py-1.5 rounded-md "
              >
                Add Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewPost;

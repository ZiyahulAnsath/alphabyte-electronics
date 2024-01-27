"use client";
import { useState } from "react";
import { laptopsReviews } from "@/data/laptopsReview";
import { Rate, Spin } from "antd";

const OverallReviews = () => {
  const [visibleItems, setVisibleItems] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleItems(visibleItems + 5);
      setLoading(false);
    }, 1000); // Simulating loading delay
  };
  return (
    <>
      <div className="container mx-auto p-4">
        {/* Render visible data */}

        <div className="grid gap-3">
          {laptopsReviews.slice(0, visibleItems).map((item, index) => (
            <div
              className="grid grid-cols-8 gap-1 border-gray-text border rounded-md md:p-4 p-2 hover:bg-green-li_background-main ease-in-out duration-300"
              key={index}
            >
              <div className="col-span-6">
                <Rate
                  defaultValue={item.review}
                  allowHalf
                  className=" text-green-text"
                  disabled
                  style={{ fontSize: "small" }}
                />
              </div>
              <div className="col-span-2 mx-auto md:text-sm text-xs">
                {item.date} <span>{item.time}</span>
              </div>
              <div className=" col-span-full md:col-span-6 text-sm md:pr-12 pr-0 text-gray-text">
                {item.description}
              </div>
              <div className=" col-span-full md:col-span-2 md:mx-auto text-end text-xs">
                {item.name}
              </div>
            </div>
          ))}
        </div>
        {/* Load More Button */}
        {visibleItems < laptopsReviews.length && (
          <div className="mt-4 text-center">
            {/* <LoadMoreButton onLoadMore={handleLoadMore} loading={loading} /> */}
            <button
              className={`text-lg font-semibold hover:text-gray-bg_primary hover:ring-gray-bg_primary hover:font-bold ease-linear duration-300 ring-2 ring-green-text text-green-text hover:bg-green-text px-5 py-1.5 rounded-full  ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? (
                <Spin>Loading</Spin>
              ) : (
                "Load More"
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default OverallReviews;

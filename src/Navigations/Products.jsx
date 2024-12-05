import React from "react";

export default function Products() {
  return (
    <>
      <div className="flex flex-wrap h-auto w-full justify-center items-center p-4 space-x-4 space-y-4">
        <div className="h-72 w-60 flex flex-col rounded-lg shadow-2xl bg-gray-600 p-2">
          <div className="h-60">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS417BthgX86YCESvC4nIg66mQsP5_4-YxmQ&s"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <span>NAME</span>
            <span className="text-decoration-line : line-through">
              OLD PRICE
            </span>
            <span>NEW PRICE</span>
          </div>
          <div className="flex space-x-4 justify-center items-center text-white">
            <button className="border-2 bg-red-700 rounded-xl">
              Add to cart
            </button>
            <button className="border-2 bg-green-700 rounded-xl">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

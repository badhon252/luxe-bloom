"use client";

import { useState } from "react";

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy data handling: Log product details
    const newProduct = { productName, category, price, stock };
    console.log("Product added:", newProduct);

    // Clear form fields
    setProductName("");
    setCategory("");
    setPrice("");
    setStock("");
  };

  return (
    <div className="w-[30%] ">
      <div className="">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Add Product
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8"
        >
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Product Name
            </label>
            <input
              id="productName"
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Category
            </label>
            <input
              id="category"
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Price
            </label>
            <input
              id="price"
              type="number"
              step="0.01"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="stock"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Stock
            </label>
            <input
              id="stock"
              type="number"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

interface Category {
  id: number;
  name: string;
}

export default function Categories() {
  // Dummy categories data
  const initialCategories: Category[] = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Furniture" },
    { id: 3, name: "Clothing" },
  ];

  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [newCategory, setNewCategory] = useState("");
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [error, setError] = useState<string>("");

  // Handle adding a new category
  const addCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategory.trim()) {
      setError("Category name cannot be empty");
      return;
    }

    // Add the category to the list
    const newCategoryObj = { id: Date.now(), name: newCategory.trim() };
    setCategories([...categories, newCategoryObj]);
    setNewCategory("");
    setError(""); // Reset error message on successful addition
  };

  // Handle updating an existing category
  const updateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCategory && editingCategory.name.trim()) {
      // Update the category in the list
      setCategories(
        categories.map((cat) =>
          cat.id === editingCategory.id ? editingCategory : cat
        )
      );
      setEditingCategory(null);
    }
  };

  // Handle deleting a category
  const deleteCategory = (id: number) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="w-[500px] p-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      {/* Error message display */}
      {error && <div className="bg-red-500 text-white p-2 mb-4">{error}</div>}

      {/* Add Category Form */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <form onSubmit={addCategory} className="mb-4">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New category name"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Category
          </button>
        </form>
      </div>

      {/* List of Categories */}
      <div className="bg-white rounded-lg shadow p-6">
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="mb-2 flex items-center">
              {editingCategory && editingCategory.id === category.id ? (
                <form onSubmit={updateCategory} className="flex-grow mr-2">
                  <input
                    type="text"
                    value={editingCategory.name}
                    onChange={(e) =>
                      setEditingCategory({
                        ...editingCategory,
                        name: e.target.value,
                      })
                    }
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <button
                    type="submit"
                    className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <>
                  <span className="flex-grow">{category.name}</span>
                  <button
                    onClick={() => setEditingCategory(category)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCategory(category.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

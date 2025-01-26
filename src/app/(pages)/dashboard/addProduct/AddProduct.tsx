
'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Define types for form data and error messages
interface FormData {
  name: string;
  details: string;
  productCare: string;
  productCategory: string;
  productSubCategory: string;
  quantity: string;
  price: string;
  color: string;
  image: File | null;
}

interface Errors {
  name?: string;
  details?: string;
  productCare?: string;
  productCategory?: string;
  productSubCategory?: string;
  quantity?: string;
  price?: string;
  color?: string;
  image?: string;
}

const AddProductfrom = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    details: '',
    productCare: '',
    productCategory: '',
    productSubCategory: '',
    quantity: '',
    price: '',
    color: '',
    image: null,
  });

  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    const validationErrors: Errors = {};  // Changed from 'let' to 'const'
    if (!formData.name) validationErrors.name = "Name is required.";
    if (!formData.details) validationErrors.details = "Details are required.";
    if (!formData.productCare) validationErrors.productCare = "Product care information is required.";
    if (!formData.productCategory) validationErrors.productCategory = "Product category is required.";
    if (!formData.productSubCategory) validationErrors.productSubCategory = "Product sub-category is required.";
    if (!formData.quantity || isNaN(Number(formData.quantity)) || Number(formData.quantity) <= 0)
      validationErrors.quantity = "Quantity must be a positive number.";
    if (!formData.price || isNaN(Number(formData.price)) || Number(formData.price) <= 0)
      validationErrors.price = "Price must be a positive number.";
    if (!formData.color) validationErrors.color = "Color is required.";
    if (!formData.image) validationErrors.image = "Image is required.";
  
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };
  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ ...prevState, image: e.target.files ? e.target.files[0] : null }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const token = "your-dynamic-token"; // Replace with your dynamic token logic
      const apiUrl = "https://your-api-link.com/products"; // Replace with your API link

      // for (const key in formData) {
      //   formDataToSend.append(key, formData[key as keyof FormData] ?? '');
      // }

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // body: formDataToSend,
        });

        if (response.ok) {
          const data = await response.json();
          alert("Product added successfully!");
          console.log("Response:", data);
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message}`);
          console.error("Error response:", errorData);
        }
      } catch (error) {
        alert("An error occurred while submitting the form.");
        console.error("Error:", error);
      }
    }
  };

  return (
    <Card className="w-[70%]">
       <h1 className="text-2xl font-bold mb-4">Add product</h1>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Information Section */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  className="w-full border border-gray-300 py-3 px-4 rounded-lg"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="details">Details</Label>
                <Textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Enter product details"
                  className="w-full border"
                />
                {errors.details && <p className="text-red-500 text-sm">{errors.details}</p>}
              </div>

              <div>
                <Label htmlFor="productCare">Product Care</Label>
                <Textarea
                  id="productCare"
                  name="productCare"
                  value={formData.productCare}
                  onChange={handleChange}
                  placeholder="Enter product care instructions"
                  className="w-full"
                />
                {errors.productCare && <p className="text-red-500 text-sm">{errors.productCare}</p>}
              </div>

              <div>
                <Label htmlFor="productCategory">Product Category</Label>
                <Input
                  id="productCategory"
                  name="productCategory"
                  type="text"
                  value={formData.productCategory}
                  onChange={handleChange}
                  placeholder="Enter product category"
                  className="w-ful border border-gray-300 py-3 px-4 rounded-lg"
                />
                {errors.productCategory && <p className="text-red-500 text-sm">{errors.productCategory}</p>}
              </div>
            </div>

            {/* Pricing and Image Section */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="productSubCategory">Product Sub-Category</Label>
                <Input
                  id="productSubCategory"
                  name="productSubCategory"
                  type="text"
                  value={formData.productSubCategory}
                  onChange={handleChange}
                  placeholder="Enter product sub-category"
                  className="w-full border border-gray-300 py-3 px-4 rounded-lg"
                />
                {errors.productSubCategory && <p className="text-red-500 text-sm">{errors.productSubCategory}</p>}
              </div>

              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Enter product quantity"
                  className="w-full border border-gray-300 py-3 px-4 rounded-lg"  
                />
                {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
              </div>

              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter product price"
                  className="w-full border border-gray-300 py-3 px-4 rounded-lg"
                />
                {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
              </div>

              <div>
                <Label htmlFor="color">Color</Label>
                <Input
                  id="color"
                  name="color"
                  type="text"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="Enter product color"
                  className="w-full border border-gray-300 py-3 px-4 rounded-lg"
                />
                {errors.color && <p className="text-red-500 text-sm">{errors.color}</p>}
              </div>

              <div>
                <Label htmlFor="image">Image</Label>
                <Input
                  id="image"
                  name="image"
                  type="file"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 py-3 px-4 rounded-lg"
                />
                {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
              </div>
            </div>
          </div>

          <Button type="submit" className="w-[40%]  bg-blue-500 hover:bg-blue-600 text-white rounded-md py-5 mt-6">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddProductfrom;

import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // ShadCN Input
import { Button } from "@/components/ui/button"; // ShadCN Button
import { cn } from "@/lib/utils"; // Utility function for classnames

// Define form fields and error types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const CreateAccount: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Submitted", formData);
      // Reset form after successful submission (optional)
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
      setErrors({});
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div>
      {/* First Name Input */}
      <Input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => handleInputChange("firstName", e.target.value)}
        className={cn(
          "border-b border-[#000000] w-full py-3 px-3 text-sm placeholder:uppercase",
          errors.firstName && "border-red-500"
        )}
      />
      {errors.firstName && (
        <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
      )}

      {/* Last Name Input */}
      <Input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => handleInputChange("lastName", e.target.value)}
        className={cn(
          "border-b border-[#000000] w-full py-3 px-3 text-sm mt-5 placeholder:uppercase",
          errors.lastName && "border-red-500"
        )}
      />
      {errors.lastName && (
        <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
      )}

      {/* Email Input */}
      <Input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => handleInputChange("email", e.target.value)}
        className={cn(
          "border-b border-[#000000] w-full py-3 px-3 text-sm mt-5 placeholder:uppercase",
          errors.email && "border-red-500"
        )}
      />
      {errors.email && (
        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
      )}

      {/* Password Input */}
      <Input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => handleInputChange("password", e.target.value)}
        className={cn(
          "border-b border-[#000000] w-full py-3 px-3 text-sm mt-5 placeholder:uppercase",
          errors.password && "border-red-500"
        )}
      />
      {errors.password && (
        <p className="text-red-500 text-xs mt-1">{errors.password}</p>
      )}

      {/* Terms and Conditions */}
      <p className="text-xs text-gray-500 mt-4 text-center cursor-pointer">
        By signing up, you agree to our{" "}
        <span className="underline">Terms of Use and Privacy Policy.</span>
      </p>

      {/* Submit Button */}
      <Button
        className="w-full !py-5 bg-black text-white text-sm tracking-wide uppercase hover:bg-red-600 transition mt-10"
        onClick={handleSubmit}
      >
        Create Account
      </Button>
    </div>
  );
};

export default CreateAccount;

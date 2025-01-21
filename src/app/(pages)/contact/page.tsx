"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdAttachFile } from "react-icons/md";

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  files: FileList | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
  files?: string;
}

const Page: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    files: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubject = () => {
    setMenu(!menu);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    if (!formData.files) {
      newErrors.files = "At least one file must be attached.";
    }
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully:", formData);
      // Add API call or submission logic here
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error for this field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      files: e.target.files,
    }));

    // Clear file error
    setErrors((prevErrors) => ({
      ...prevErrors,
      files: undefined,
    }));
  };

  return (
    <div className="container py-[50px]">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[768px] border border-[#000000]/20 pb-7"
        >
          <div className="w-full">
            <h2 className="text-[40px] text-[#000000] font-normal leading-[32px] tracking-[-0.05px] uppercase pl-10 py-6 border-b">
              Contact us
            </h2>
          </div>

          {/* Full Name Input */}
          <div className="px-10 mt-10">
            <h4 className="text-base text-[#000000] font-normal leading-[14px] tracking-[1.4px] capitalize">
              full name<span className="text-red-500">*</span>
            </h4>
            <input
              name="fullName"
              className={`h-[48px] mt-3 border ${
                errors.fullName ? "border-red-500" : "border-[#000000]/20"
              } w-full rounded-sm focus:outline-none focus:ring-[0.4px] focus:ring-[#469ce2] focus:border-none pl-3`}
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="px-10 mt-7">
            <h4 className="text-base text-[#000000] font-normal leading-[14px] tracking-[1.4px] capitalize">
              Email<span className="text-red-500">*</span>
            </h4>
            <input
              name="email"
              type="email"
              className={`h-[48px] mt-3 border ${
                errors.email ? "border-red-500" : "border-[#000000]/20"
              } w-full rounded-sm focus:outline-none focus:ring-[0.4px] focus:ring-[#469ce2] focus:border-none pl-3`}
              placeholder="your@email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Subject Dropdown */}
          <div className="px-10 mt-7">
            <h4 className="text-base text-[#000000] font-normal leading-[14px] tracking-[1.4px] capitalize">
              subject<span className="text-red-500">*</span>
            </h4>
            <div
              onClick={handleSubject}
              className={`w-full flex justify-between items-center mt-3 cursor-pointer border ${
                errors.subject ? "border-red-500" : "border-[#000000]/20"
              } rounded-sm py-3 px-3`}
            >
              <span className="text-sm text-gray-300">
                {formData.subject || "Select subject"}
              </span>
              {menu ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {menu && (
              <ul className="w-full border shadow-sm rounded-sm py-5 px-5 mt-3">
                {[
                  "Order Status",
                  "Support",
                  "Feedback",
                  "Other",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-[#000000]/70 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setFormData((prevData) => ({
                        ...prevData,
                        subject: item,
                      }));
                      setMenu(false);
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        subject: undefined,
                      }));
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          {/* Message Input */}
          <div className="px-10 mt-7">
            <h4 className="text-base text-[#000000] font-normal leading-[14px] tracking-[1.4px] capitalize">
              Message<span className="text-red-500">*</span>
            </h4>
            <textarea
              name="message"
              className={`h-[160px] mt-3 border ${
                errors.message ? "border-red-500" : "border-[#000000]/20"
              } w-full rounded-sm focus:outline-none focus:ring-[0.4px] focus:ring-[#469ce2] focus:border-none pl-3 pt-2`}
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* File Upload */}
          <div className="px-10 mt-7">
            <h4 className="text-base text-[#000000] font-normal leading-[14px] tracking-[1.4px] capitalize">
              Attach Files<span className="text-red-500">*</span>
            </h4>
            <label
              htmlFor="file-input"
              className={`h-[48px] mt-3 border-2 border-dashed ${
                errors.files ? "border-red-500" : "border-gray-300"
              } w-full flex gap-3 justify-center items-center rounded-sm cursor-pointer bg-[#F9F9F9]`}
            >
              <MdAttachFile className="text-xl" />
              <span className="text-sm font-bold">Attach Files</span>
              <input
                id="file-input"
                name="files"
                type="file"
                className="hidden"
                multiple
                onChange={handleFileChange}
              />
            </label>
            {errors.files && (
              <p className="text-red-500 text-sm mt-1">{errors.files}</p>
            )}
            <p className="text-sm text-[#000000]/50 mt-2">
              Attach up to 10 files. Max file size: 20 MB.
            </p>
          </div>

          {/* Submit Button */}
         <div className="px-10">
         <button
            type="submit"
            className="border w-full py-4 text-[12px] text-white font-bold bg-black uppercase tracking-[1.4px] hover:bg-[#D6B280] duration-300 mt-7 "
          >
            send
          </button>

          <p className="text-[10px] text-[#000000]/50 mt-2">
            This site is protected by reCAPTCHA Enterprise and the Google
            Privacy Policy and Terms of Service apply.
          </p>
         </div>
        </form>
      </div>
    </div>
  );
};

export default Page;

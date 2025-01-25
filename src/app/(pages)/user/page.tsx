"use client";
import React from "react";
import { MoveRight } from "lucide-react";

const Page = () => {
  const [usermodal, setUserModal] = React.useState(true);
  const [orderModal, setOrderModal] = React.useState(false);
  const [addressModal, setAddressModal] = React.useState(false);

  const handleInformationBtn = () => {
    setUserModal(true);
    setOrderModal(false);
    setAddressModal(false);
  };

  const handleOrderBtn = () => {
    setOrderModal(true);
    setUserModal(false);
    setAddressModal(false);
  };

  const handleAddressBtn = () => {
    setAddressModal(true);
    setOrderModal(false);
    setUserModal(false);
  };

  return (
    <section>
      <div className="container mx-auto px-4 pt-24 pb-32">
        <div className="bg-[#FAF9F8] py-10 text-center">
          <h2 className="text-2xl text-[#000000]/70 font-normal uppercase tracking-widest">
            Hello, Amit
          </h2>
          <p className="text-sm text-[#000000]/70 font-normal uppercase mt-4 underline cursor-pointer">
            Logout
          </p>
        </div>

        <div className="flex justify-center  gap-[200px] mt-8 ">
          <button
            onClick={handleInformationBtn}
            className={`text-sm uppercase tracking-widest font-normal py-2 px-4 border-b-2 transition-all duration-200 ${
              usermodal ? "border-[#000000]" : "border-transparent"
            } hover:border-[#000000]`}
          >
            Information
          </button>
          <button
            onClick={handleOrderBtn}
            className={`text-sm uppercase tracking-widest font-normal py-2 px-4 border-b-2 transition-all duration-200 ${
              orderModal ? "border-[#000000]" : "border-transparent"
            } hover:border-[#000000]`}
          >
            Orders
          </button>
          <button
            onClick={handleAddressBtn}
            className={`text-sm uppercase tracking-widest font-normal py-2 px-4 border-b-2 transition-all duration-200 ${
              addressModal ? "border-[#000000]" : "border-transparent"
            } hover:border-[#000000]`}
          >
            Addresses
          </button>
        </div>

        {usermodal && (
          <div className="mt-10">
            <h4 className="text-sm text-[#000000]/70 font-normal uppercase border-b border-[#000000]/10 pb-2">
              Account Information
            </h4>
            <div className="flex gap-3 items-center mt-4">
              <p className="text-sm text-[#000000]/70 font-normal uppercase">Name:</p>
              <p className="text-sm text-[#000000]/70 font-normal capitalize">Amit Chackroboarty</p>
            </div>
            <div className="flex gap-3 items-center mt-4">
              <p className="text-sm text-[#000000]/70 font-normal uppercase">Email:</p>
              <p className="text-sm text-[#000000]/70 font-normal">amit@gmail.com</p>
            </div>
            <h4 className="text-sm text-[#000000]/70 font-normal uppercase border-b border-[#000000]/10 mt-10 pb-2">
              Reset Password
            </h4>
            <h4 className="text-sm text-[#000000]/70 font-normal uppercase mt-4">
              We will send you an email to reset your password
            </h4>
            <p className="text-sm text-[#000000]/70 font-normal uppercase mt-4">Email</p>
            <div className="w-full max-w-xs relative mt-3">
              <input
                className="w-full border-b border-[#000000]/10 py-2 pl-3 focus:outline-none"
                type="text"
                placeholder="Enter your email"
              />
              <MoveRight className="absolute right-3 top-1/2 transform -translate-y-1/2" color="#000000" />
            </div>
          </div>
        )}

        {orderModal && (
          <div className="mt-10">
            <p className="text-sm text-[#000000] font-normal">You have no orders yet.</p>
          </div>
        )}

        {addressModal && (
          <div className="w-full border border-[#000000] mt-10">
            <div className="p-5">
              <h3 className="text-sm text-[#000000]/70 font-normal uppercase">
                Default Address
              </h3>
              <p className="text-sm text-[#000000]/70 font-normal uppercase mt-3">
                Amit Chackroboarty
              </p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-[#000000] font-normal uppercase">United States</p>
                <div className="flex gap-3">
                  <p className="text-sm text-[#000000] font-normal underline cursor-pointer">
                    Edit
                  </p>
                  <p className="text-sm text-[#000000] font-normal underline cursor-pointer">
                    Delete
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;

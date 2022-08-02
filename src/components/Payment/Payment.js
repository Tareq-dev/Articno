import React from "react";
import { FiTruck } from "react-icons/fi";
import { MdKeyboardBackspace } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import paypal from "../../assets/images/paypal.png";
import mastercard from "../../assets/images/mastercard.png";
import discover from "../../assets/images/discover.png";
import iDEAL from "../../assets/images/iDEAL.png";
import maestro from "../../assets/images/maestro.png";
import inpost from "../../assets/images/inpost.png";
import dhl from "../../assets/images/dhl.png";
import fedex from "../../assets/images/fedex.png";
import dpd from "../../assets/images/dpd.png";
import visa from "../../assets/images/visa.svg";

const Payment = () => {
  const handlePayment = (e) => {
    let total = document.getElementById("total").textContent;
    const totalPayment = parseInt(total);
    var options = {
      key: "rzp_test_vFjWgKiJknvObw",
      key_secret: "fzgWLlPWMdEZMn2L6pVER3ft",
      amount: totalPayment * 100,
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Velmurugan",
        email: "tareque179@gmail.com",
        contact: "7904425033",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div>
      <div className="grid md:grid-cols-3">
        <div>
          <h2 className="text-2xl py-10 mx-4">Shipping and Payment</h2>
          <div>
            <button className="border-2 px-6 py-2 bg-green-400 text-white rounded-3xl mx-4">
              LOGIN
            </button>
            <button className="border-2 px-6 py-2 text-gray-300 rounded-3xl">
              SIGN UP
            </button>
          </div>
          <h3 className="text-xl mt-5 mx-4">Shipping Information</h3>
          <form action="" className="">
            <div className="flex mx-4 py-2">
              <input
                className="border px-4 rounded-3xl py-2"
                placeholder="Email"
                type="text"
              />
              <input
                className="border px-4 rounded-3xl py-2 mx-4"
                placeholder="Address"
                type="text"
              />
            </div>
            <div className="flex mx-4 py-2">
              <input
                className="border px-4 rounded-3xl py-2"
                placeholder="First Name"
                type="text"
              />
              <input
                className="border px-4 rounded-3xl py-2 mx-4"
                placeholder="City"
                type="text"
              />
            </div>
            <div className="flex mx-4 py-2">
              <input
                className="border px-4 rounded-3xl py-2"
                placeholder="Last Name"
                type="text"
              />
              <input
                className="border px-4 rounded-3xl py-2 mx-4"
                placeholder="Postal Code/Zip"
                type="text"
              />
            </div>
            <div className="flex mx-4 py-2">
              <input
                className="border px-4 rounded-3xl py-2"
                placeholder="Phone No"
                type="text"
              />
              <input
                className="border px-4 rounded-3xl py-2 mx-4"
                placeholder="Poland"
                type="text"
              />
            </div>
          </form>
        </div>
        <div className="px-12">
          <h2 className="text-md pt-28 py-4 mx-4 font-semibold">
            Payment Method
          </h2>
          <div className="flex mx-4">
            <button className="border px-5 w-32 rounded-2xl h-10 mr-2">
              <img src={paypal} alt="" />
            </button>
            <button className="border px-5 w-24 rounded-2xl h-10 mr-2">
              <img src={visa} alt="" />
            </button>
            <button className="border px-5 w-20 rounded-2xl h-10">
              <img src={mastercard} alt="" />
            </button>
          </div>
          <div className="flex mx-4 mt-3">
            <button className="border px-5 w-20 rounded-2xl h-10 mr-2">
              <img src={maestro} alt="" />
            </button>
            <button className="border px-5 w-32 rounded-2xl h-10 mr-2">
              <img src={discover} alt="" />
            </button>
            <button className="border px-5 w-24 rounded-2xl h-10">
              <img src={iDEAL} alt="" />
            </button>
          </div>

          <h2 className="text-md pt-6 py-4 mx-4 font-semibold">
            Delivery Method
          </h2>
          <div className="flex mx-4 items-center">
            <div className="border flex px-3 rounded-2xl h-10 mr-2">
              <img className="w-32" src={inpost} alt="" />
              <p className="mx-2 mt-2 text-sm font-semibold">$20.99</p>
            </div>
            <div className="border flex px-3 rounded-2xl h-10 mr-2">
              <img className="w-24" src={dpd} alt="" />
              <p className="mx-2 mt-2 text-sm font-semibold">$12.00</p>
            </div>
          </div>
          <div className="flex mx-4 items-center mt-4">
            <div className="border flex items-center  px-3 rounded-2xl h-10 mr-2">
              <img className="w-16 h-6" src={dhl} alt="" />
              <p className="mx-2 text-sm font-semibold">$15.00</p>
            </div>
            <div className="border flex px-3 rounded-2xl h-10 mr-2">
              <img className="w-16" src={fedex} alt="" />
              <p className="mx-2 mt-2 text-sm font-semibold">$10.00</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex pt-14 justify-end mx-20">
            <div className="py-2 rounded-full">
              <MdOutlineShoppingCart size={25} />
            </div>
            <div
              style={{ marginTop: "-2px" }}
              className="w-20 px-2 text-green-400 "
            >
              __________
            </div>
            <div className="bg-green-400 rounded-full py-2">
              <FiTruck className="mx-2 text-white" size={25} />
            </div>
          </div>
          <h4 className="text-sm pt-10">Your Cart</h4>
          <div className="flex justify-between items-center mt-2">
            <div className="flex">
              <img
                className="border-2 mt-2 rounded-full w-20"
                src="https://static.fibre2fashion.com/MemberResources/LeadResources/1/2017/9/Seller/17133153/Images/17133153_0_men-s-t-shirt.jpg?tr=w-320,h-320,cm-pad_resize,bg-F3F3F3"
                alt=""
              />
              <div className="mx-3 mt-2">
                <h5>T-Shirt</h5>
                <p>Summer Vibe</p>
                <p className="text-xs text-gray-400 mt-2">+4154185</p>
              </div>
            </div>
            <p className="mx-20 font-bold">$89.99</p>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="flex">
              <img
                className="border-2 mt-2 rounded-full w-20"
                src="https://static-01.daraz.com.bd/p/cba0c26a8660b738ed25ecd4e528c4ef.png"
                alt=""
              />
              <div className="mx-3 mt-2">
                <h5>Basic Slim</h5>
                <p>Fit T-Shirt</p>
                <p className="text-xs text-gray-400 mt-2">+4154185</p>
              </div>
            </div>
            <p className="mx-20 font-bold">$69.99</p>
          </div>
          <div className="flex mx-20 mt-5 bg-gray-200 text-gray-500 justify-between px-10 py-2 rounded-3xl">
            <p>Total cost</p>
            <p className="mx-4 font-semibold">
              $ <span id="total">159.98</span>
            </p>
          </div>
          <div className="flex mx-20 mt-5 text-gray-500 justify-center items-center px-10 py-2 rounded-3xl">
            <FiTruck size={35} />
            <p className="mx-4">You are $30.59 away from free shipping!</p>
          </div>
        </div>
      </div>
      <div className="px-12 py-8 flex justify-between">
        <div className="flex">
          <MdKeyboardBackspace size={25} />
          <p className="mx-8">Back</p>
        </div>
        <div className="flex mx-4">
          <button className="border-2 border-gray-400 px-5 w-48 rounded-2xl h-10 mr-2 text-sm uppercase">
            Continue shipping
          </button>
          <button
            onClick={handlePayment}
            className="border-2 border-gray-400 px-5 w-48 rounded-2xl h-10 text-sm bg-green-400 text-white mr-2 uppercase"
          >
            proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;

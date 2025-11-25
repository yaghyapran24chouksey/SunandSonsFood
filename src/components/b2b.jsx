import React, { useState } from "react";
import Swal from "sweetalert2";

export default function B2BEnquiryPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    city: "",
    email: "",
    mobile: "",
    enquiry: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "Required field";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      // Convert to FormData
      const formSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formSend.append(key, formData[key]);
      });

      await fetch(
        "https://script.google.com/macros/s/AKfycbzgSPYsjgBsgTOvMfFBh8BtaWfRj9nX39QGGiQky802B5t2GslEq73-X1zAFKpDngF2Zg/exec",
        {
          method: "POST",
          body: formSend,
        }
      );

      Swal.fire({
        title: "Thank You!",
        text: "Your enquiry has been submitted successfully.",
        icon: "success",
        confirmButtonColor: "#1e3a8a",
      });

      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        city: "",
        email: "",
        mobile: "",
        enquiry: ""
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error!",
        text: "There was a problem submitting your enquiry.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };



  return (
    <div className="w-full">

      {/* Page Title Section */}
      <div className="flex justify-between items-center px-8 pt-32 pb-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900">B2B Enquiry</h1>
      </div>

      {/* Intro Text */}
      <div className="max-w-6xl mx-auto px-8 text-blue-900 text-lg leading-7 mb-10">
        <p className="mb-4">
          Govind Milk and Milk Products Pvt. Ltd. is a trusted brand for its
          premium quality and authentic taste. We have built many successful
          professional relationships with various brands as a supplier of milk,
          ghee, UHTs, and other products.
        </p>
        <p>
          We are looking forward to understanding your needs and partnering with you.
          Please fill the following form. We will get in touch with you!
        </p>
      </div>

      {/* Contact Now Heading */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-4xl font-bold">Contact Now</h2>
      </div>

      {/* Success Message */}
      {success && (
        <div className="text-center my-6">
          <div className="bg-green-100 text-green-800 px-6 py-4 rounded-xl shadow-md font-semibold border border-green-300 animate-fadeIn">
            Your enquiry has been submitted successfully!
          </div>
        </div>
      )}

      {/* Form Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl p-10 rounded-xl mt-[-90px] border-t-8 border-blue-200 mb-20">

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {[
            { label: "First Name", name: "firstName", type: "text", placeholder: "Enter first name" },
            { label: "Last Name", name: "lastName", type: "text", placeholder: "Enter last name" },
            { label: "Company", name: "company", type: "text", placeholder: "Enter company name" },
            { label: "City", name: "city", type: "text", placeholder: "Enter city" },
            { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
            { label: "Mobile", name: "mobile", type: "number", placeholder: "Enter mobile number" }
          ].map((field, index) => (
            <div key={index}>
              <label className="block font-semibold text-blue-900 mb-2">
                {field.label} *
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-blue-50 text-blue-900 outline-none border ${errors[field.name] ? "border-red-500" : "border-transparent"
                  } focus:border-blue-700 transition`}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}

          {/* Enquiry Textarea */}
          <div className="md:col-span-2">
            <label className="block font-semibold text-blue-900 mb-2">
              Enquiry *
            </label>
            <textarea
              name="enquiry"
              rows="4"
              placeholder="Write your enquiry here..."
              value={formData.enquiry}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-blue-50 text-blue-900 outline-none border ${errors.enquiry ? "border-red-500" : "border-transparent"
                } focus:border-blue-700 transition`}
            ></textarea>
            {errors.enquiry && (
              <p className="text-red-500 text-sm">{errors.enquiry}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-900 text-white font-bold text-lg px-10 py-4 mt-4 rounded-xl shadow-md hover:bg-blue-800 active:scale-95 transition-transform duration-300"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-full">
      
      {/* Page Title Section */}
      <div className="flex justify-between items-center px-8 pt-32 pb-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900">
          B2B Enquiry
        </h1>
      </div>

      {/* Intro Text */}
      <div className="max-w-6xl mx-auto px-8 text-blue-900 text-lg leading-7 mb-10">
        <p className="mb-4">
          Govind Milk and Milk Products Pvt. Ltd. is a trusted brand for its
          premium quality and authentic taste. We have built many successful
          professional relationships with various brands as a supplier of
          milk, ghee, UHTs, and other products. With these brands, we work
          as their private-labelling, co-packaging, and white-labelling
          partners.
        </p>
        <p>
          We are looking forward to understanding your needs and partnering
          with you. Please fill the following form. We will get in touch with
          you!
        </p>
      </div>

      {/* Contact Now Heading Section */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-4xl font-bold">Contact Now</h2>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl p-10 rounded-xl mt-[-90px] border-t-8 border-blue-200 mb-20">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Inputs */}
          {[
            { label: "First Name", name: "firstName", type: "text", placeholder: "Enter first name" },
            { label: "Last Name", name: "lastName", type: "text", placeholder: "Enter last name" },
            { label: "Company", name: "company", type: "text", placeholder: "Enter company name" },
            { label: "City", name: "city", type: "text", placeholder: "Enter city" },
            { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
            { label: "Mobile", name: "mobile", type: "number", placeholder: "Enter mobile number" },
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
                className={`w-full p-3 rounded-lg bg-blue-50 text-blue-900 outline-none border ${
                  errors[field.name] ? "border-red-500" : "border-transparent"
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
              placeholder="Write your enquiry here..."
              rows="4"
              value={formData.enquiry}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-blue-50 text-blue-900 outline-none border ${
                errors.enquiry ? "border-red-500" : "border-transparent"
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
              className="bg-blue-900 text-white font-bold text-lg px-10 py-4 mt-4 rounded-xl shadow-md
              hover:bg-blue-800 active:scale-95 transition-transform duration-300"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

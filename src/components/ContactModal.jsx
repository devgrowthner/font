'use client';

import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import { API_END_POINTS } from "../constants/apiEndPoints";
import "react-phone-input-2/lib/style.css";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");
    setFieldErrors({});

    try {
      const payload = {
        full_name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
        subject: formData.subject,
        message: formData.details,
      };

      const response = await axios.post(API_END_POINTS.CONTACT_US, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          details: "",
        });
        setIsSubmitting(false);
        onClose();

        setToastMessage(
          response.data.message ||
            "Form submitted successfully. We will get back to you soon!"
        );
        setShowToast(true);

        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);

      if (error.response) {
        const errorData = error.response.data;

        if (errorData.errors) {
          setFieldErrors(errorData.errors);
          setErrorMessage(errorData.message || "Please fix the errors below");
        } else {
          setErrorMessage(
            errorData.message || "Failed to send message. Please try again."
          );
        }
      } else if (error.request) {
        setErrorMessage(
          "Network error. Please check your connection and try again."
        );
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }

      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-[100] max-w-md"
          >
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200/60 p-4 flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}>
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {toastMessage}
                </p>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl my-4 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group z-10"
                >
                  <svg
                    className="w-4 h-4 text-gray-600 group-hover:text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Header */}
                <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-gray-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(to right, #719334, #719334)' }}>
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">
                        Connect With Us
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-600">
                        We'll get back to you within 48 business hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="px-5 py-4 sm:px-6 sm:py-5"
                >
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="flex-1">
                          <p className="text-sm text-red-800 font-medium mb-1">
                            {errorMessage}
                          </p>
                          {Object.keys(fieldErrors).length > 0 && (
                            <ul className="text-xs text-red-700 mt-1 space-y-1">
                              {Object.entries(fieldErrors).map(
                                ([field, errors]) => (
                                  <li key={field}>
                                    <strong>{field}:</strong>{" "}
                                    {Array.isArray(errors)
                                      ? errors.join(", ")
                                      : errors}
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-3">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 rounded-lg border outline-none transition-all duration-200 text-sm text-gray-900 ${
                          fieldErrors.full_name
                            ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                            : "border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                        }`}
                        placeholder="John Doe"
                      />
                      {fieldErrors.full_name && (
                        <p className="text-xs text-red-600 mt-1">
                          {Array.isArray(fieldErrors.full_name)
                            ? fieldErrors.full_name[0]
                            : fieldErrors.full_name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 rounded-lg border outline-none transition-all duration-200 text-sm text-gray-900 ${
                          fieldErrors.email
                            ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                            : "border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                        }`}
                        placeholder="john@example.com"
                      />
                      {fieldErrors.email && (
                        <p className="text-xs text-red-600 mt-1">
                          {Array.isArray(fieldErrors.email)
                            ? fieldErrors.email[0]
                            : fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="mt-3">
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <PhoneInput
                      country={"au"}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      containerClass="phone-input-container"
                      inputClass="phone-input-field"
                      buttonClass="phone-input-button"
                      inputProps={{
                        name: "phone",
                        required: true,
                      }}
                      containerStyle={{
                        width: "100%",
                      }}
                      inputStyle={{
                        width: "100%",
                        height: "40px",
                        fontSize: "14px",
                        paddingLeft: "48px",
                        borderRadius: "8px",
                        border: fieldErrors.phone_number
                          ? "1px solid #fca5a5"
                          : "1px solid #d1d5db",
                      }}
                      buttonStyle={{
                        borderRadius: "8px 0 0 8px",
                        border: "1px solid #d1d5db",
                        backgroundColor: "#f9fafb",
                      }}
                    />
                    {fieldErrors.phone_number && (
                      <p className="text-xs text-red-600 mt-1">
                        {Array.isArray(fieldErrors.phone_number)
                          ? fieldErrors.phone_number[0]
                          : fieldErrors.phone_number}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="mt-3">
                    <label
                      htmlFor="subject"
                      className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      maxLength={200}
                      className={`w-full px-3 py-2 rounded-lg border outline-none transition-all duration-200 text-sm text-gray-900 ${
                        fieldErrors.subject
                          ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                          : "border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                      }`}
                      placeholder="How can we help you?"
                    />
                    {fieldErrors.subject && (
                      <p className="text-xs text-red-600 mt-1">
                        {Array.isArray(fieldErrors.subject)
                          ? fieldErrors.subject[0]
                          : fieldErrors.subject}
                      </p>
                    )}
                  </div>

                  {/* Details */}
                  <div className="mt-3">
                    <label
                      htmlFor="details"
                      className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                    >
                      Message Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows="3"
                      value={formData.details}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 rounded-lg border outline-none transition-all duration-200 resize-none text-sm text-gray-900 ${
                        fieldErrors.message
                          ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                          : "border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                      }`}
                      placeholder="Tell us more about your inquiry..."
                    />
                    {fieldErrors.message && (
                      <p className="text-xs text-red-600 mt-1">
                        {Array.isArray(fieldErrors.message)
                          ? fieldErrors.message[0]
                          : fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                      style={{ background: 'linear-gradient(to right, #719334, #719334)' }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="sm:w-auto px-5 py-2.5 rounded-lg text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactModal;

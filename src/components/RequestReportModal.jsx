'use client';

import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-input-2";
// import axios from "axios";
// import { API_END_POINTS } from "../constants/apiEndPoints";
import "react-phone-input-2/lib/style.css";

const RequestReportModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    // Business details
    businessName: "",
    websiteUrl: "",
    industry: "",
    location: "",
    // Competitors
    competitor1Name: "",
    competitor1Website: "",
    competitor2Name: "",
    competitor2Website: "",
    notSureCompetitors: false,
    // Goals & pain points
    primaryGoal: "",
    painPoints: [],
    notes: "",
    // Contact
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const industries = [
    "Healthcare",
    "Finance",
    "Retail",
    "Manufacturing",
    "Technology",
    "Education",
    "Real Estate",
    "Hospitality",
    "Other",
  ];

  const primaryGoals = [
    "More sales",
    "More leads",
    "Improve ROAS",
    "Grow organic traffic",
    "Brand growth",
  ];

  const painPointOptions = [
    "Not enough customers finding us",
    "Ads feel inefficient",
    "Competitors dominating search",
    "Website feels outdated/slow/confusing",
    "Reviews/reputation hurting trust",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handlePainPointChange = (painPoint) => {
    setFormData((prev) => ({
      ...prev,
      painPoints: prev.painPoints.includes(painPoint)
        ? prev.painPoints.filter((p) => p !== painPoint)
        : [...prev.painPoints, painPoint],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");
    setFieldErrors({});

    try {
      // eslint-disable-next-line no-unused-vars
      const payload = {
        business_name: formData.businessName,
        website_url: formData.websiteUrl,
        industry: formData.industry,
        location: formData.location,
        competitor1_name: formData.competitor1Name,
        competitor1_website: formData.competitor1Website,
        competitor2_name: formData.competitor2Name,
        competitor2_website: formData.competitor2Website,
        not_sure_competitors: formData.notSureCompetitors,
        primary_goal: formData.primaryGoal,
        pain_points: formData.painPoints,
        notes: formData.notes,
        full_name: formData.name,
        email: formData.email,
        phone_number: formData.phone,
      };

      // You can add API endpoint here when ready
      // const response = await axios.post(API_END_POINTS.REQUEST_REPORT, payload);

      // Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      setFormData({
        businessName: "",
        websiteUrl: "",
        industry: "",
        location: "",
        competitor1Name: "",
        competitor1Website: "",
        competitor2Name: "",
        competitor2Website: "",
        notSureCompetitors: false,
        primaryGoal: "",
        painPoints: [],
        notes: "",
        name: "",
        email: "",
        phone: "",
      });

      setIsSubmitting(false);
      onClose();

      setToastMessage(
        "Request submitted successfully! We'll confirm feasibility and next steps within 24 hours."
      );
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);

      if (error.response) {
        const errorData = error.response.data;

        if (errorData.errors) {
          setFieldErrors(errorData.errors);
          setErrorMessage(
            errorData.message || "Please fix the errors below"
          );
        } else {
          setErrorMessage(
            errorData.message || "Failed to submit request. Please try again."
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
      {/* Custom Styles for Phone Input Dropdown */}
      <style>{`
        .react-tel-input .country-list {
          z-index: 99999 !important;
          max-height: 200px !important;
          overflow-y: auto !important;
          border-radius: 8px !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
          position: absolute !important;
          bottom: 100% !important;
          top: auto !important;
        }
        .react-tel-input .flag-dropdown {
          border-radius: 8px 0 0 8px !important;
          background-color: #f9fafb !important;
          border: 1px solid #d1d5db !important;
        }
        .react-tel-input .flag-dropdown.open {
          z-index: 99999 !important;
        }
        .react-tel-input .flag-dropdown.open .country-list {
          z-index: 99999 !important;
        }
        .react-tel-input .selected-flag {
          border-radius: 8px 0 0 8px !important;
        }
      `}</style>
      
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
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto overflow-x-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl my-4 max-h-[90vh] flex flex-col overflow-hidden"
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

                {/* Header - Fixed */}
                <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50 flex-shrink-0">
                  <div className="flex items-start gap-3 pr-8">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-gray-900 leading-tight">
                        Request your Digital Health & Competitor Report
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Takes 2–3 minutes. We'll confirm feasibility and next
                        steps.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form - Scrollable */}
                <form onSubmit={handleSubmit} className="px-5 py-4 sm:px-6 sm:py-5 overflow-y-auto overflow-x-hidden flex-1 min-h-0">
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

                  {/* Section A: Business Details */}
                  <div className="mb-6">
                    <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 border border-blue-100/50 rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
                      <div className="relative">
                        <h3 className="text-base sm:text-lg font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/30">
                            A
                          </span>
                          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            Business Details
                          </span>
                        </h3>
                        <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="businessName"
                          className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                        >
                          Business Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          required
                          value={formData.businessName}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-sm text-gray-900 bg-white hover:border-gray-400"
                          placeholder="Your Company Name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="websiteUrl"
                          className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                        >
                          Website URL <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="url"
                          id="websiteUrl"
                          name="websiteUrl"
                          required
                          value={formData.websiteUrl}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-sm text-gray-900 bg-white hover:border-gray-400"
                          placeholder="https://www.example.com"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label
                            htmlFor="industry"
                            className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                          >
                            Industry <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="industry"
                            name="industry"
                            required
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-sm text-gray-900 bg-white hover:border-gray-400"
                          >
                            <option value="">Select Industry</option>
                            {industries.map((industry) => (
                              <option key={industry} value={industry}>
                                {industry}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="location"
                            className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                          >
                            Location / Target Market{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            required
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-sm text-gray-900 bg-white hover:border-gray-400"
                            placeholder="e.g., Australia-wide, VIC, NSW"
                          />
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>

                  {/* Section B: Competitors */}
                  <div className="mb-6">
                    <div className="relative bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 border border-purple-100/50 rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
                      <div className="relative">
                        <h3 className="text-base sm:text-lg font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-purple-500/30">
                            B
                          </span>
                          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Competitors
                          </span>
                        </h3>
                        <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label
                            htmlFor="competitor1Name"
                            className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                          >
                            Competitor 1 Name
                          </label>
                          <input
                            type="text"
                            id="competitor1Name"
                            name="competitor1Name"
                            value={formData.competitor1Name}
                            onChange={handleChange}
                            disabled={formData.notSureCompetitors}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-sm text-gray-900 bg-white hover:border-gray-400 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:border-gray-300"
                            placeholder="Competitor Name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="competitor1Website"
                            className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                          >
                            Competitor 1 Website
                          </label>
                          <input
                            type="url"
                            id="competitor1Website"
                            name="competitor1Website"
                            value={formData.competitor1Website}
                            onChange={handleChange}
                            disabled={formData.notSureCompetitors}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-sm text-gray-900 bg-white hover:border-gray-400 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:border-gray-300"
                            placeholder="https://www.competitor1.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label
                            htmlFor="competitor2Name"
                            className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                          >
                            Competitor 2 Name
                          </label>
                          <input
                            type="text"
                            id="competitor2Name"
                            name="competitor2Name"
                            value={formData.competitor2Name}
                            onChange={handleChange}
                            disabled={formData.notSureCompetitors}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-sm text-gray-900 bg-white hover:border-gray-400 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:border-gray-300"
                            placeholder="Competitor Name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="competitor2Website"
                            className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                          >
                            Competitor 2 Website
                          </label>
                          <input
                            type="url"
                            id="competitor2Website"
                            name="competitor2Website"
                            value={formData.competitor2Website}
                            onChange={handleChange}
                            disabled={formData.notSureCompetitors}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-sm text-gray-900 bg-white hover:border-gray-400 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:border-gray-300"
                            placeholder="https://www.competitor2.com"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="notSureCompetitors"
                          name="notSureCompetitors"
                          checked={formData.notSureCompetitors}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="notSureCompetitors"
                          className="text-xs sm:text-sm text-gray-700 cursor-pointer"
                        >
                          Not sure about competitors
                        </label>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>

                  {/* Section C: Goals & Pain Points */}
                  <div className="mb-6">
                    <div className="relative bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 border rounded-2xl p-6 sm:p-7 shadow-lg transition-all duration-300 overflow-hidden" style={{ borderColor: 'rgba(113, 147, 52, 0.5)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(113, 147, 52, 0.1), 0 8px 10px -6px rgba(113, 147, 52, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'}>
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -mr-16 -mt-16" style={{ background: 'linear-gradient(to bottom right, rgba(113, 147, 52, 0.05), rgba(113, 147, 52, 0.05))' }}></div>
                      <div className="relative">
                        <h3 className="text-base sm:text-lg font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="w-10 h-10 rounded-xl text-white flex items-center justify-center text-sm font-bold shadow-lg" style={{ background: 'linear-gradient(to right, #719334, #719334)', boxShadow: '0 10px 15px -3px rgba(113, 147, 52, 0.3), 0 4px 6px -4px rgba(113, 147, 52, 0.3)' }}>
                            C
                          </span>
                          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #719334, #719334)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Goals & Pain Points
                          </span>
                        </h3>
                        <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="primaryGoal"
                          className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                        >
                          Primary Goal <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="primaryGoal"
                          name="primaryGoal"
                          required
                          value={formData.primaryGoal}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-sm text-gray-900 bg-white hover:border-gray-400"
                        >
                          <option value="">Select Primary Goal</option>
                          {primaryGoals.map((goal) => (
                            <option key={goal} value={goal}>
                              {goal}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-3">
                          Biggest Pain Right Now (Select all that apply)
                        </label>
                        <div className="space-y-2.5 bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-5 border shadow-sm" style={{ borderColor: 'rgba(113, 147, 52, 0.5)' }}>
                          {painPointOptions.map((painPoint) => (
                            <label
                              key={painPoint}
                              className="flex items-center gap-3 cursor-pointer group p-3 rounded-lg transition-all duration-200 border border-transparent"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(113, 147, 52, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(113, 147, 52, 0.1)';
                                e.currentTarget.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '';
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.boxShadow = '';
                              }}
                            >
                              <input
                                type="checkbox"
                                checked={formData.painPoints.includes(
                                  painPoint
                                )}
                                onChange={() =>
                                  handlePainPointChange(painPoint)
                                }
                                className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-offset-1"
                                style={{ accentColor: '#719334' }}
                              />
                              <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-900 transition-colors flex-1">
                                {painPoint}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="notes"
                          className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                        >
                          Notes (Optional)
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows="3"
                          value={formData.notes}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 resize-none text-sm text-gray-900 bg-white hover:border-gray-400"
                          placeholder="Any additional information you'd like to share..."
                        />
                      </div>
                    </div>
                    </div>
                  </div>
                  </div>

                  {/* Section D: Contact */}
                  <div className="mb-6">
                    <div className="relative bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 border border-amber-100/50 rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
                      <div className="relative">
                        <h3 className="text-base sm:text-lg font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-amber-500/30">
                            D
                          </span>
                          <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                            Contact
                          </span>
                        </h3>
                        <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                        >
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-sm text-gray-900 bg-white hover:border-gray-400"
                          placeholder="Your Full Name"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                          >
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-sm text-gray-900 bg-white hover:border-gray-400"
                            placeholder="your@email.com"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5"
                          >
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <PhoneInput
                            country={"au"}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            inputProps={{
                              name: "phone",
                              required: true,
                              autoFocus: false,
                              className:
                                "w-full !pl-14 !pr-4 !py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm text-gray-900 bg-white hover:border-gray-400",
                            }}
                            containerClass="!w-full"
                            buttonClass="!border-0"
                            inputClass="!w-full"
                            specialLabel=""
                            disableDropdown={false}
                            enableSearch={true}
                          />
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
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
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get My Report
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
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
                      className="sm:w-auto px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 hover:shadow-md transition-all duration-200"
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

export default RequestReportModal;


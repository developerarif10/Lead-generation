"use client";

import type React from "react";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
}

export default function LeadCaptureForm({
  title = "Find Your Dream Property",
  subtitle = "Enter your details below to get started",
  buttonText = "Get Started",
  className = "",
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          propertyType: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className={className}>
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}

      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4">
          <p className="font-medium">Thank you for your interest!</p>
          <p>One of our agents will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
            >
              <option value="">I&apos;m interested in...</option>
              <option value="buying">Buying a property</option>
              <option value="selling">Selling my property</option>
              <option value="renting">Renting a property</option>
              <option value="investing">Real estate investment</option>
              <option value="auction">Property auctions</option>
            </select>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about what you're looking for (optional)"
              rows={3}
              className="w-full px-4 py-2 border border-gray-900 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-md transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                Processing...
              </>
            ) : (
              <>
                {buttonText} <ArrowRight size={16} />
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting this form, you agree to our{" "}
            <a href="/privacy" className="underline hover:text-slate-800">
              Privacy Policy
            </a>{" "}
            and consent to be contacted regarding real estate services.
          </p>
        </form>
      )}
    </div>
  );
}

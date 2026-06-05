"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <p className="text-lg font-medium text-gray-800">Thank you for your inquiry.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">First Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            required
            onChange={set("firstName")}
            className="border p-3 w-full rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Last Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            required
            onChange={set("lastName")}
            className="border p-3 w-full rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
        <input
          type="email"
          required
          onChange={set("email")}
          className="border p-3 w-full rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Mobile Number <span className="text-red-500">*</span></label>
        <input
          type="tel"
          required
          onChange={set("mobile")}
          className="border p-3 w-full rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">I Am A <span className="text-red-500">*</span></label>
        <select
          required
          onChange={set("role")}
          value={form.role}
          className="border p-3 w-full rounded-lg bg-white text-gray-800 appearance-none"
        >
          <option value="" disabled>Select One</option>
          <option value="Financial Advisor / Wealth Manager">Financial Advisor / Wealth Manager</option>
          <option value="CPA / Tax Professional">CPA / Tax Professional</option>
          <option value="Attorney">Attorney</option>
          <option value="Family Office">Family Office</option>
          <option value="Business Owner">Business Owner</option>
          <option value="Investor">Investor</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 w-full rounded-lg font-semibold tracking-wide transition-colors"
      >
        {loading ? "Submitting..." : "INQUIRE"}
      </button>
    </form>
  );
}

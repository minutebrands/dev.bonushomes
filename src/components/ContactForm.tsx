"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    investment: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold text-green-700 mb-2">
          ✅ Request Sent!
        </h3>
        <p className="text-gray-600">
          Please text us before calling so we can assist you faster.
        </p>
      </div>
    );
  }

  return (
    <div>

      {/* 🔥 TEXT FIRST BLOCK */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-center">
        <p className="text-sm text-gray-700 mb-3">
          Please text us first before booking a call.
        </p>

        <a
          href="sms:+13852045517?body=Hi, I’m interested in Bonus Homes."
          className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block"
        >
          Text Us First
        </a>
      </div>

      <p className="text-gray-400 text-center mb-4">Or fill the form below</p>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-3 w-full rounded-lg"
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-3 w-full rounded-lg"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="border p-3 w-full rounded-lg"
        />

        {/* 🔥 NEW FIELD */}
        <select
          required
          onChange={(e) => setForm({ ...form, investment: e.target.value })}
          className="border p-3 w-full rounded-lg"
        >
          <option value="">Investment Capacity</option>
          <option>$250K+</option>
          <option>$500K+</option>
          <option>$1M+</option>
        </select>
  <textarea
  placeholder="Message (optional)"
  onChange={(e) => setForm({ ...form, message: e.target.value })}
  className="border p-3 w-full rounded-lg h-24"
/>

        {/* 🔥 CHECKBOX */}
        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input type="checkbox" required />
          I confirm that I am an accredited investor.
        </label>

        <button
          disabled={loading}
          className="bg-orange-500 text-white px-6 py-3 w-full rounded-lg"
        >
          {loading ? "Submitting..." : "Request Call"}
        </button>
      </form>
    </div>
  );
}
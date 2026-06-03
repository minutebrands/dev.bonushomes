"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    cell: "",
    email: "",
    numRIAs: "",
    numOffices: "",
    numHNIs: "",
    aum: "",
    company: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
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
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold text-green-700 mb-2">Request Sent!</h3>
        <p className="text-gray-600">We'll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          required
          onChange={set("firstName")}
          className="border p-3 w-full rounded-lg"
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          onChange={set("lastName")}
          className="border p-3 w-full rounded-lg"
        />
      </div>

      <input
        type="tel"
        placeholder="Cell"
        required
        onChange={set("cell")}
        className="border p-3 w-full rounded-lg"
      />

      <input
        type="email"
        placeholder="Email"
        required
        onChange={set("email")}
        className="border p-3 w-full rounded-lg"
      />

      <input
        type="text"
        placeholder="Name of Company"
        required
        onChange={set("company")}
        className="border p-3 w-full rounded-lg"
      />

      <input
        type="number"
        placeholder="# of RIAs"
        min="0"
        required
        onChange={set("numRIAs")}
        className="border p-3 w-full rounded-lg"
      />

      <input
        type="number"
        placeholder="# of Offices"
        min="0"
        required
        onChange={set("numOffices")}
        className="border p-3 w-full rounded-lg"
      />

      <input
        type="number"
        placeholder="# of HNIs ($800K+ per year)"
        min="0"
        required
        onChange={set("numHNIs")}
        className="border p-3 w-full rounded-lg"
      />

      <input
        type="text"
        placeholder="AUM (Assets Under Management)"
        required
        onChange={set("aum")}
        className="border p-3 w-full rounded-lg"
      />

      <button
        disabled={loading}
        className="bg-orange-500 text-white px-6 py-3 w-full rounded-lg"
      >
        {loading ? "Submitting..." : "Request Call"}
      </button>
    </form>
  );
}

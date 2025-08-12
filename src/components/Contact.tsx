import React from "react";
import { useState } from "react";
import Field from "./Field";

interface FormData {
  name: string;
  email: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
  return (
    <form onSubmit={handleSubmit} className="px-5 py-[50px]">
      <div className="flex flex-col gap-6">
        <p className="text-2xl tablet:text-[32px] font-medium">
          Let’s Collaborate for a Healthier Future.
        </p>
        <p className="text-[32px] tablet:text-[52px] font-bold">
          <span>
            Whether you&apos;re a pharmaceutical company, wellness brand, or
            distributor,
          </span>{" "}
          <span className="bg-crystalGreen">Cannex is ready</span>{" "}
          <span>to power your product pipeline.</span>
        </p>
      </div>

      <div className="mt-10 tablet:mt-12">
        <Field value={formData.name} onChange={handleChange} />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

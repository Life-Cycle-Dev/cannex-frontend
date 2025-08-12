import React from "react";
import { useState } from "react";
import Field from "./Field";
import DropdownField from "./DropdownField";
import Button from "./Button";
import RightUpIcon from "./icons/RightUpIcon";
import CheckBox from "./CheckBox";

interface FormData {
  name: string;
  lastName: string;
  email: string;
  reason: string;
  message: string;
  isAccepted?: boolean;
}

function Policy() {
  return (
    <p className="font-medium text-black">
      I have read and accepted terms and conditions specified in the{" "}
      <a href="/privacy-policy" className="text-crystalGreen hover:underline">
        Privacy Policy
      </a>{" "}
      and do hereby consent to the collecting, processing and/or disclosing of
      the personal data provided by me to fulfil the above-said purposes.
    </p>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    email: "",
    reason: "",
    message: "",
    isAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

      <div className="mt-10 tablet:mt-12 flex flex-col gap-8 tablet:grid tablet:grid-cols-2 tablet:gap-x-16 tablet:gap-y-8">
        <Field
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <Field
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <Field
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <DropdownField
          value={formData.reason}
          placeholder="Reason for Contact"
          onChange={(option) => {
            setFormData((prev) => ({
              ...prev,
              reason: option,
            }));
          }}
          options={["1", "2"]}
        />
        <div className="tablet:col-span-2">
          <Field
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
          />
        </div>
      </div>

      <div className="mt-8">
        <CheckBox
          checked={formData.isAccepted ?? false}
          onChange={() =>
            setFormData((prev) => ({ ...prev, isAccepted: !prev.isAccepted }))
          }
          labelCustom={<Policy />}
        />
      </div>

      <div className="mt-10">
        <Button
          text="Submit"
          suffixIcon={<RightUpIcon />}
          width="w-[238px]"
          type="secondaryBlack"
        />
      </div>
    </form>
  );
}

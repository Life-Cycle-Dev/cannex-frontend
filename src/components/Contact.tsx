/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import Field from "./Field";
import DropdownField from "./DropdownField";
import Button from "./Button";
import RightUpIcon from "./icons/RightUpIcon";
import CheckBox from "./CheckBox";
import { useHelperContext } from "./providers/helper-provider";
import { ContactForm } from "@/types/contact-forms";

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
      <a
        href="/privacy-policy"
        target="_blank"
        className="text-crystalGreen hover:underline"
      >
        Privacy Policy
      </a>{" "}
      and do hereby consent to the collecting, processing and/or disclosing of
      the personal data provided by me to fulfil the above-said purposes.
    </p>
  );
}

export default function Contact() {
  const { backendClient, setLoading } = useHelperContext()();
  const [reasons, setReasons] = useState<string[]>([]);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const payload: ContactForm = {
      firstname: formData.name,
      lastname: formData.lastName,
      email: formData.email,
      reason: formData.reason,
      message: formData.message,
    };
    const isSubmittedForm = await backendClient.createContactForm(payload);
    setLoading(false);

    if (!isSubmittedForm) {
      alert("There was an error sending your message. Please try again later.");
      return;
    }
    setFormData({
      name: "",
      lastName: "",
      email: "",
      reason: "",
      message: "",
      isAccepted: false,
    });
    window.location.href = "thank-you";
  };

  const fetchData = async () => {
    const response = await backendClient.getContactFormReason();
    if (response.data) {
      setReasons(response.data[0].value.split(",").map((item) => item.trim()));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="px-5 tablet:px-20 py-[50px] tablet:border-t-[2px]"
    >
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
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          state={
            formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
              ? "error"
              : "default"
          }
          errorMessage="Please enter a valid email address."
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
          options={reasons}
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
          className="w-[238px]"
          type="secondaryBlack"
          disabled={
            !formData.isAccepted ||
            !formData.reason ||
            !formData.message ||
            !formData.email ||
            !formData.name ||
            !formData.lastName
          }
        />
      </div>
    </form>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import Field from "@/components/Field";
import DropdownField from "@/components/DropdownField";
import Button from "@/components/Button";
import RightUpIcon from "@/components/icons/RightUpIcon";
import CheckBox from "@/components/CheckBox";
import { useHelperContext } from "@/components/providers/helper-provider";
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
    <p className="font-medium text-black cursor-pointer select-none">
      <span onClick={(e) => e.preventDefault()}>
        I have read and accepted terms and conditions specified in the{" "}
      </span>
      <span>
        <a href="/privacy-policy" className="text-crystalGreen hover:underline">
          Privacy Policy
        </a>{" "}
      </span>
      <span onClick={(e) => e.preventDefault()}>
        and do hereby consent to the collecting, processing and/or disclosing of
        the personal data provided by me to fulfil the above-said purposes.
      </span>
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
  const [formError, setFormError] = useState({
    name: "",
    lastName: "",
    email: "",
    reason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof FormData,
  ) => {
    const { value } = e.target;
    setFormError((prev) => ({ ...prev, [field]: "" }));
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.lastName ||
      !formData.email ||
      !formData.reason
    ) {
      setFormError({
        name: !formData.name ? "Please enter your name." : "",
        lastName: !formData.lastName ? "Please enter your last name." : "",
        email: !formData.email ? "Please provide a valid email address." : "",
        reason: !formData.reason
          ? "Please select a reason for contacting us."
          : "",
      });
      return;
    }
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
    const response = await backendClient.getContactFormConfig();
    if (response) {
      setReasons(response.reason.split("\n"));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="px-5 tablet:pl-20 tablet:pr-[189px] py-[50px] tablet:border-t-[2px]"
    >
      <div className="flex flex-col gap-6">
        <p className="text-2xl tablet:text-[32px] font-medium">
          Let’s Collaborate for <br /> a Healthier Future.
        </p>
        <p className="text-[32px] tablet:text-[52px] font-bold">
          <span>
            Whether you&apos;re a pharmaceutical company, wellness brand, or
            distributor,
          </span>
          <br />
          <span className="bg-crystalGreen">Cannex is ready</span>{" "}
          <span>to power your product pipeline.</span>
        </p>
      </div>

      <div className="mt-10 tablet:mt-12 flex flex-col gap-8 tablet:grid tablet:grid-cols-2 tablet:gap-x-16 tablet:gap-y-8">
        <Field
          required={true}
          value={formData.name}
          onChange={(e) => handleChange(e, "name")}
          placeholder="Name"
          state={formError.name ? "error" : "default"}
          errorMessage={formError.name}
        />
        <Field
          required={true}
          value={formData.lastName}
          onChange={(e) => handleChange(e, "lastName")}
          placeholder="Last Name"
          state={formError.lastName ? "error" : "default"}
          errorMessage={formError.lastName}
        />
        <Field
          required={true}
          type="email"
          value={formData.email}
          onChange={(e) => handleChange(e, "email")}
          placeholder="Email"
          state={
            (formData.email &&
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) ||
            formError.email
              ? "error"
              : "default"
          }
          errorMessage={
            formData.email
              ? "Please provide a valid email address."
              : formError.email
              ? formError.email
              : ""
          }
        />
        <DropdownField
          value={formData.reason}
          placeholder="Reason for Contact"
          onChange={(option) => {
            setFormError((prev) => ({
              ...prev,
              reason: "",
            }));
            setFormData((prev) => ({
              ...prev,
              reason: option,
            }));
          }}
          options={reasons}
          state={formError.reason ? "error" : "default"}
          errorMessage={formError.reason}
        />
        <div className="tablet:col-span-2">
          <Field
            value={formData.message}
            onChange={(e) => handleChange(e, "message")}
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
          className="w-full tablet:w-[238px]"
          type="secondaryBlack"
        />
      </div>
    </form>
  );
}

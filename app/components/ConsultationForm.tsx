"use client";

import { FormEvent, useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  studyLevel: string;
  message: string;
};
type FormErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
  destination?: string;
  studyLevel?: string;
  message?: string;
};
const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  destination: "",
  studyLevel: "",
  message: "",
};

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [statusMessage, setStatusMessage] = useState("");
const [errors, setErrors] = useState<FormErrors>({});
  
function handleChange(
  event:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>
    | React.ChangeEvent<HTMLTextAreaElement>
) {
  const { name, value } = event.target;

  setFormData((currentData) => ({
    ...currentData,
    [name]: value,
  }));

  setErrors((currentErrors) => ({
    ...currentErrors,
    [name]: undefined,
  }));
}
function validateForm() {
  const newErrors: FormErrors = {};

  if (formData.fullName.trim().length < 3) {
    newErrors.fullName = "Please enter your full name.";
  }

  if (!formData.email.includes("@")) {
    newErrors.email = "Please enter a valid email address.";
  }

  const phoneDigits = formData.phone.replace(/\D/g, "");

  if (phoneDigits.length < 7) {
    newErrors.phone = "Please enter a valid phone number.";
  }

  if (!formData.destination) {
    newErrors.destination = "Please select a destination.";
  }

  if (!formData.studyLevel) {
    newErrors.studyLevel = "Please select a study level.";
  }

  if (formData.message.trim().length < 10) {
    newErrors.message =
      "Please provide more information about your study plans.";
  }

  return newErrors;
}
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const validationErrors = validateForm();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setStatusMessage("");
    return;
  }

  setErrors({});

  setStatusMessage(
    "Thank you. Your consultation request has been received."
  );

  setFormData(initialFormData);
}

  return (
    <form
  onSubmit={handleSubmit}
  noValidate
  className="grid grid-cols-1 md:grid-cols-2 gap-6"
>
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-slate-200 mb-2"
        >
          Full Name
        </label>

        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
        {errors.fullName && (
  <p className="mt-1 text-sm text-red-600">
    {errors.fullName}
  </p>
)}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-200 mb-2"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
        {errors.email && (
  <p className="mt-1 text-sm text-red-600">
    {errors.email}
  </p>
)}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-200 mb-2"
        >
          Phone Number
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
        {errors.phone && (
  <p className="mt-1 text-sm text-red-600">
    {errors.phone}
  </p>
)}
      </div>

      <div>
        <label
          htmlFor="destination"
          className="block text-sm font-medium text-slate-200 mb-2"
        >
          Preferred Destination
        </label>

        <select
          id="destination"
          name="destination"
          required
          value={formData.destination}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
        >
          <option value="">Select a destination</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Ireland">Ireland</option>
          <option value="Germany">Germany</option>
          <option value="Portugal">Portugal</option>
          <option value="Spain">Spain</option>
          <option value="United States">United States</option>
        </select>
        {errors.destination && (
  <p className="mt-1 text-sm text-red-600">
    {errors.destination}
  </p>
)}
      </div>

      <div className="md:col-span-2">
  <label
    htmlFor="studyLevel"
    className="block text-sm font-medium text-slate-200 mb-2"
  >
    Intended Study Level
  </label>

  <select
    id="studyLevel"
    name="studyLevel"
    required
    value={formData.studyLevel}
    onChange={handleChange}
    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
  >
    <option value="">Select a study level</option>
    <option value="Undergraduate">Undergraduate</option>
    <option value="Post-Secondary Certificate">
      Post-Secondary Certificate
    </option>
    <option value="Undergraduate Diploma">
      Undergraduate Diploma
    </option>
    <option value="Undergraduate Advanced Diploma">
      Undergraduate Advanced Diploma
    </option>
    <option value="3-Year Bachelor's Degree">
      3-Year Bachelor&apos;s Degree
    </option>
    <option value="Top-up Degree">Top-up Degree</option>
    <option value="4-Year Bachelor's Degree">
      4-Year Bachelor&apos;s Degree
    </option>
    <option value="Integrated Masters">Integrated Masters</option>
    <option value="Post-graduate">Post-graduate</option>
    <option value="Postgraduate Certificate">
      Postgraduate Certificate
    </option>
    <option value="Postgraduate Diploma">
      Postgraduate Diploma
    </option>
    <option value="Master's Degree">
      Master&apos;s Degree
    </option>
    <option value="Doctoral / PhD">Doctoral / PhD</option>
    <option value="Non-Credential">Non-Credential</option>
    <option value="Elementary and High School">
      Elementary and High School
    </option>
    <option value="Grade 12">Grade 12</option>
    <option value="Language Proficiency">
      Language Proficiency
    </option>
    <option value="English as Second Language (ESL)">
      English as Second Language (ESL)
    </option>
  </select>
  {errors.studyLevel && (
  <p className="mt-1 text-sm text-red-600">
    {errors.studyLevel}
  </p>
)}
</div>

      <div className="md:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-200 mb-2"
        >
          Tell Us About Your Study Plans
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your course interests, qualifications, and preferred intake."
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
        />
        {errors.message && (
  <p className="mt-1 text-sm text-red-600">
    {errors.message}
  </p>
)}
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Request Free Consultation
        </button>
      </div>

      {statusMessage && (
        <p
          role="status"
          className="md:col-span-2 rounded-lg border border-green-700 bg-green-950/40 px-4 py-3 text-green-300"
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}
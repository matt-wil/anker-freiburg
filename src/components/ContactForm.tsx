"use client";

import { useTranslations } from "next-intl";
import { useState, useRef, ChangeEvent, FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  name: string;
  email: string;
  confirmEmail: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    confirmEmail: "",
    subject: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const t = useTranslations("contact.form");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      alert(
        "Die E-Mail-Adressen stimmen nicht überein. Bitte überprüfen Sie Ihre Eingabe.",
      );
      return;
    }

    if (!captchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    setSubmissionStatus("submitting");

    try {
      // Exclude confirmEmail from the payload sent to the backend API
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          "g-recaptcha-response": captchaValue,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSubmissionStatus("success");
        setFormData({
          name: "",
          email: "",
          confirmEmail: "",
          subject: "",
          message: "",
        });
        recaptchaRef.current?.reset();
        setCaptchaValue(null);
      } else {
        setSubmissionStatus("error");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmissionStatus("error");
    }
  };

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center py-10">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-xl border border-gray-300 p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          {t("header")}
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t("name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Dein Name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Deine Email-Adresse"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </div>

        {/* Confirm Email */}
        <div className="mb-4">
          <label
            htmlFor="confirmEmail"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            E-Mail-Adresse bestätigen
          </label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Deine Email-Adresse wiederholen"
            value={formData.confirmEmail}
            onChange={handleFormChange}
            required
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t("subject")}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Betreff deiner Nachricht"
            value={formData.subject}
            onChange={handleFormChange}
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            placeholder="Deine Nachricht an uns"
            value={formData.message}
            onChange={handleFormChange}
            required
          ></textarea>
        </div>

        {/* reCAPTCHA */}
        <div className="mb-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
            onChange={(value: string | null) => setCaptchaValue(value)}
            className="g-recaptcha"
          />
        </div>

        {/* Submit */}
        <div className="flex items-center justify-between">
          <button
            className="bg-[#1a2c42] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={submissionStatus === "submitting"}
          >
            {submissionStatus === "submitting" ? "Senden..." : "Senden"}
          </button>
          {submissionStatus === "success" && (
            <p className="text-green-500 text-sm italic">{t("success")}</p>
          )}
          {submissionStatus === "error" && (
            <p className="text-red-500 text-sm italic">{t("error")}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

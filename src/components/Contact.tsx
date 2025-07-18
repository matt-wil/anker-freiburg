"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { MdPhoneInTalk } from "react-icons/md"
import { useTranslations } from "next-intl"
import ContactForm from "./ContactForm"

const Contact = (): React.JSX.Element => {
  const t = useTranslations()

  useGSAP(() => {
    gsap.from(".contact-section", {
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      y: 50,
    })
  })

  return (
    <>
      <h1 className="page-header text-center">{t("contact.form.header")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-6xl mx-auto contact-section">
        {/* LEFT COLUMN (4 boxes) */}
        <div className="md:col-span-1 flex flex-col gap-4">
          {/* Box 1: Animated Phone Icon */}
          <div className="bg-neutral-900 rounded-2xl p-6 flex justify-center items-center min-h-[150px]">
            <a href="tel:+4976151462878" aria-label="Call us">
              <MdPhoneInTalk className="w-24 h-24 sm:w-32 sm:h-32 text-indigo-400 animate-pulse" />
            </a>
          </div>

          {/* Box 2: Open Hours */}
          <div className="bg-neutral-900 rounded-2xl p-6 text-center flex flex-col justify-center min-h-[200px]">
            <h2 className="text-3xl sm:text-4xl mb-4 font-bold text-white">{t("contact.openHoursHeader")}</h2>
            <p className="text-gray-300 text-lg">
              <strong>{t("contact.weekdays")}</strong>{t("contact.weekdayTime")}<br />
              <strong>{t("contact.saturday")}</strong>{t("contact.saturdayTime")}<br />
              <strong>{t("contact.closedDays")}</strong>
            </p>
          </div>

          {/* Box 3: Contact Info */}
          <div className="bg-neutral-900 rounded-2xl p-6 text-center flex flex-col justify-center min-h-[150px]">
            <h2 className="text-3xl sm:text-4xl mb-4 font-bold text-white">{t("contact.contactHeader")}</h2>
            <p className="text-gray-300 text-lg">{" "}
              <a href="tel:+4976151462878" className="hover:underline text-indigo-300">0761 51 46 28 78</a>
            </p>
            <p className="text-gray-300 text-lg">{" "}
              <a href="mailto:info@anker-tattoo.de" className="hover:underline text-indigo-300">info@anker-tattoo.de</a>
            </p>
          </div>

          {/* Box 4: Address */}
          <div className="bg-neutral-900 rounded-2xl p-6 text-center flex flex-col justify-center min-h-[150px]">
            <h2 className="text-3xl sm:text-4xl mb-4 font-bold text-white">{t("contact.addressHeader")}</h2>
            <a
              href="https://www.google.de/maps/place/Anchor+Tattoo+%26+Piercing/..."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-indigo-300 text-lg"
            >
              <p>{t("contact.addressLine1")} <br />{t("contact.addressLine2")}</p>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Form Only */}
        <div className="md:col-span-1 flex flex-col justify-center items-center bg-neutral-900 rounded-2xl p-6">
          <div className="contact-form w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.075038012869!2d7.845996376530922!3d47.99293697122794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c9f3ba91f21%3A0xd7b8fd0d6016ea0e!2sAnker%20Tattoo%20%26%20Piercing!5e0!3m2!1sde!2sde!4v1744477504960!5m2!1sde!2sde" width="1000" height="600" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
  )
}

export default Contact

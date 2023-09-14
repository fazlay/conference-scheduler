import HeaderText from "@/components/HeaderText/HeaderText";
import BaseLayout from "@/layout/BaseLayout";
import React, { ReactNode, useRef } from "react";

import emailjs from "@emailjs/browser";
import Inquires from "./Inquires";
import Slider from "@/components/Slider";

const ContactForm = () => {
  const PUBLIC_KEY = "miIaHUpcyP6BA38Gc";
  const SERVICE_ID = "service_74o9si8";
  const TEMPLATE_ID = "template_lhnu2g7";
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        console.log(form.current);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <>
      <HeaderText text="Contact Us" className="text-center" />
      <div className="flex justify-center items-center">
        <form className="w-full max-w-lg" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name *
              </label>
              <input
                className="appearance-none block w-full border-2 border-black text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-[blue]"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Business Email *
              </label>
              <input
                className="appearance-none block w-full border-2 border-black text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-[blue]"
                type="email"
                placeholder="example@example.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Phone *
              </label>
              <input
                className="appearance-none block w-full border-2 border-black text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-[blue]"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Website
              </label>
              <input
                className="appearance-none block w-full border-2 border-black text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-[blue]"
                type="email"
                placeholder="example@example.com"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                I would like to contact about
              </label>
              <select
                className="appearance-none block w-full border-2 border-black text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-[blue]"
                id="grid-state"
              >
                <option>Contact List Building</option>
                <option>Find Email Address</option>
                <option>Data Appending and Enrichment</option>
                <option>Hire Dedicated Research Team</option>
              </select>
            </div>
            <div className="w-full px-3 pt-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Write Your Message *
              </label>
              <textarea
                className="appearance-none block w-full border-2 border-black text-gray-700 py-3 px-4 mb-3  leading-tight focus:outline-[blue]"
                placeholder="Write your message here"
                name="message"
                rows={4}
              />
            </div>

            <div className="w-full px-3 pt-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Would you like to receive occasional promotional
                offers/Newsletter from Clippath? *
              </label>
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Yes
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 "
                  />
                  <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    No
                  </label>
                </div>
              </div>

              <input
                type="submit"
                value="SUBMIT"
                className="submit flex justify-center items-center bg-blue-950 w-full py-1.5 mt-4 text-secondary hover:bg-blue-900"
              />
            </div>
          </div>
        </form>
      </div>
      <Inquires />
      <HeaderText text="Our Featured Reviews" className="text-center" />
      <Slider />
    </>
  );
};
ContactForm.getLayout = (page: ReactNode) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default ContactForm;

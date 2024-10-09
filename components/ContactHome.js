
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import NewsletterBox from "components/Contact/NewsletterBox.js";

export default function ContactHome() {
    const [state, handleSubmit] = useForm("mayvjonp");

    return (
        <section className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
                    <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 dark:text-gray-600 text-center lg:text-left">
                        Contact Me
                    </h1>
                </div>
            </div>
      <div id="contact" className="shadow-md bg-[#F1F1F1] -mt-10 dark:bg-gray-900 p-4 md:p-10 lg:p-20 mx-auto">
      <div className="flex justify-between relative z-10 p-8 md:bg-white dark:bg-gray-800 rounded-sm shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 md:border-r-2 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-800 sm:p-[55px] lg:p-8  xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Send a message
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
              I’d love to hear from you! Whether you have a project in mind or need some advice, contact me using the form below or reach out directly via email.              </p>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="block mb-3 text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="block mb-3 text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-gray-900 dark:border-transparent dark:bg-[#2C303B] dark:text-gray-50 dark:shadow-two dark:focus:border-gray-50 dark:focus:shadow-none"
                      />
                       <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/3">
                    <button className="py-4 text-base font-medium text-white dark:text-gray-900 duration-300 rounded-sm bg-gray-800 dark:bg-gray-200 px-9 shadow-submit hover:bg-gray-500 dark:hover:bg-gray-100 dark:shadow-submit-dark" type="submit" disabled={state.submitting}>
                      {state.succeeded == true ? 'Message sent!' : 'Submit'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsletterBox />
          </div>
        </div>
      </div>
      </div>
    </section>        
    )
}
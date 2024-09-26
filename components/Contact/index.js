'use client'
import NewsletterBox from "./NewsletterBox";
import { useForm, ValidationError } from "@formspree/react";
 
const Contact = () => {

  const [state, handleSubmit] = useForm("xovaoakv");
  if (state.succeeded) {
      return <section id="contact" className="py-16 overflow-hidden md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              We’d love to hear from you! Whether you have a project in mind or need some advice, contact us using the form below or reach out directly via email.              </p>
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
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
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
                        className="block mb-3 text-sm font-medium text-dark dark:text-white"
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
                    <div className="py-4 text-base font-medium text-white duration-300 rounded-sm bg-primary px-9 shadow-submit hover:bg-primary/90 dark:shadow-submit-dark" >
                      Message Sent!
                    </div>
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
    </section>
    ;
  }
  return (
    <section id="contact" className="py-16 overflow-hidden md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              We’d love to hear from you! Whether you have a project in mind or need some advice, contact us using the form below or reach out directly via email.              </p>
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
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
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
                        className="block mb-3 text-sm font-medium text-dark dark:text-white"
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
                    <button className="py-4 text-base font-medium text-white duration-300 rounded-sm bg-primary px-9 shadow-submit hover:bg-primary/90 dark:shadow-submit-dark" type="submit" disabled={state.submitting}>
                      Submit
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
    </section>
  );
};

export default Contact;

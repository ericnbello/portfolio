'use client'
import React from "react";
import userData from "@constants/data";
import LinkedIn from "./icons/LinkedIn";
import Github from "./icons/Github";
import ContactForm from "./ContactForm";
import NewsletterBox from "components/Contact/NewsletterBox.js";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {

  const [state, handleSubmit] = useForm("xovaoakv");
  if (state.succeeded) {
      return <><section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Contact
        </h1>
      </div>
    </section>
    <section id="contact" className="shadow-md bg-[#F1F1F1] -mt-10 dark:bg-gray-900 p-4 md:p-10 lg:p-20 mx-auto">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-900 sm:p-[55px] lg:p-8  xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Send a message
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
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
                  <div className="w-full px-4 sm:max-w-1/2">
                    <button className="py-4 text-base font-medium text-white dark:text-gray-900 duration-300 rounded-sm bg-gray-800 dark:bg-gray-200 px-9 shadow-submit hover:bg-gray-500 dark:hover:bg-gray-100 dark:shadow-submit-dark" type="submit" disabled={true}>
                      Message sent!
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
    </>
    ;
  }
  return (
    <>
    {/* <section className="">
       <div className="max-w-6xl mx-auto h-48 bg-[#F1F1F1] dark:bg-gray-800 antialiased">
         <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
           Contact
         </h1>
       </div> */}
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Contact
        </h1>
      </div>
    </section>
    <section id="contact" className="shadow-md bg-[#F1F1F1] -mt-10 dark:bg-gray-900 p-4 md:p-10 lg:p-20 mx-auto">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-800 sm:p-[55px] lg:p-8  xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Send a message
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
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
    </>
  );
};

export default Contact;


// import React from "react";
// import userData from "@constants/data";
// import LinkedIn from "./icons/LinkedIn";
// import Github from "./icons/Github";
// import ContactForm from "./ContactForm";

// export default function Contact() {
//   return (
//     <section>
//       <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
//         <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
//           Contact
//         </h1>
//       </div>
//       <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="md:ml-4">
//             <header className="">
//               <h1 className="text-gray-50 font-semibold text-2xl">
//                 Get in touch, let's talk.
//               </h1>
//               <p className="font-light text-base text-gray-200 mt-2">
//                 Fill in the details and I'll get back to you as soon as possible.
//               </p>
//             </header>
//             <div className="icons-container inline-flex flex-col my-20">
//               {/* <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   fill="currentColor"
//                   className="bi bi-telephone-fill h-4 w-4 text-blue-500"
//                   viewBox="0 0 16 16"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
//                   />
//                 </svg>
//                 <p className="text-gray-50 font-light text-sm">
//                   {userData.phone}
//                 </p>
//               </div> */}
//               <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   fill="currentColor"
//                   className="bi bi-envelope-fill h-4 w-4 text-blue-500"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
//                 </svg>
//                 <p className="text-gray-50 font-light text-sm">
//                   {userData.email}
//                 </p>
//               </div>
//               <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   fill="currentColor"
//                   className="bi bi-pin-fill h-4 w-4 text-blue-500"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
//                 </svg>
//                 <p className="text-gray-50 font-light text-sm">
//                   {userData.address}
//                 </p>
//               </div>
//             </div>
//             <div className="social-icons flex flex-row space-x-8">
//               <a
//                 // href={userData.socialLinks.facebook}
//                 href={userData.socialLinks.linkedin}
//                 className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
//               >
//                 {/* <svg
//                   width="24"
//                   height="24"
//                   className="text-gray-50"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
//                     fill="currentColor"
//                   />
//                 </svg> */}

//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   fill="white"
//                   className="bi bi-linkedin h-5 w-5"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
//               </svg>              
//             </a>
//               <a
//                 href={userData.socialLinks.twitter}
//                 className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
//               >
//                 <svg
//                   width="24"
//                   height="24"
//                   className="text-gray-50"
//                   // viewBox="0 0 24 24"
//                   viewBox="0 0 512 462.799"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >            
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     // {/* X icon */}
//                     d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" 
//                     // {/* Twitter icon */}
//                     // {/* d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z" */}
//                     fill="currentColor"
//                   />
//                 </svg>
//               </a>
//               <a
//                 // href={userData.socialLinks.instagram}
//                 href={userData.socialLinks.github}
//                 className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
//               >
//                 {/* <svg
//                   width="24"
//                   height="24"
//                   className="text-gray-50"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
//                     fill="currentColor"
//                   />
//                   <path
//                     d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
//                     fill="currentColor"
//                   />
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
//                     fill="currentColor"
//                   />
//                 </svg> */}
                
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21227 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21227 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z"
//                     // className="text-gray-50"
//                     fill="white"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <ContactForm />
//         </div>
//       </div>
//     </section>
//   );
// }

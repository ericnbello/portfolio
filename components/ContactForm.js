import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mayvjonp");

  if (state.succeeded) {
    return <p className="text-white">Thanks for your submission!</p>;
  }

  return (
    <form className="form rounded-lg bg-white p-4 flex flex-col" onSubmit={handleSubmit}>
      <label htmlFor="name" className="text-sm text-gray-600 mx-4">
      {" "}
        Your Name
      </label>
      <input
        type="text"
        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
        name="name"
        id="name"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
        Email
        </label>
      <input
        type="text"
        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
        name="email"
        id="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message" className="text-sm text-gray-600 mx-4 mt-4">
        Message
      </label>
      <textarea
        rows="4"
        type="text"
        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
        name="message"
        id="message"
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
        disabled={state.submitting}
      >
        Send Message
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
const CustomForm = ({ status, message, onValidated }) => {
    let email, fname;
    const submit = () =>
      email &&
      fname &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: fname.value
      });
  
    return (
      <div
        // style={{
        //   background: "#efefef",
        //   borderRadius: 2,
        //   padding: 10,
        //   display: "inline-block"
        // }}
        className="w-full py-3 mb-4 text-base rounded-sm outline-none text-body-color focus:border-primary dark:border-transparent dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
      >
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <input
        //   style={{ fontSize: "2em", padding: 5 }}
        className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" 
          ref={node => (fname = node)}
          type="fname"
          placeholder="First Name"
        />
        <br />
        <input
        //   style={{ fontSize: "2em", padding: 5 }}
        className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          ref={node => (email = node)}
          type="email"
          placeholder="Email address"
        />
        <br />
        <button 
        // style={{ fontSize: "2em", padding: 5 }} 
        className="flex items-center justify-center w-full py-4 mb-5 text-base font-medium text-white dark:text-black duration-300 rounded-sm cursor-pointer bg-gray-800 dark:bg-gray-200 px-9 shadow-submit hover:bg-gray-500 dark:hover:bg-gray-100 dark:shadow-submit-dark"
        onClick={submit}>
          Subscribe
        </button>
      </div>
    );
  };

export default CustomForm;
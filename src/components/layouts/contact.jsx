import React from "react";
import Nav from "./navbar";

const Contact = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 w-full pb-5 flex-col">
      <div className="w-full">
        {" "}
        <Nav />
      </div>
      <div className="mx-auto w-[620px] flex flex-col gap-3 min-h-[90vh]">
        <h2 className="h-[71px] w-[620px] text-black text-xl font-semibold flex justify-center items-center">
          Contact
        </h2>
        <div className="flex flex-col gap-6 items-center">
          <input
            type="text"
            className="h-[56px] w-[591px] pl-4 pr-2 rounded-xl outline-none caret-[#24FF00]"
            placeholder="Name"
          />
          <input
            type="email"
            className="h-[56px] w-[591px] pl-4 pr-2 rounded-xl outline-none caret-[#24FF00]"
            placeholder="Email"
          />
          <textarea
            rows={5}
            className="h-[161px] w-[591px] pl-4 pr-2 py-2 rounded-xl outline-none caret-[#24FF00]"
            placeholder="Message"
          />
          <button
            type="submit"
            className="h-[56px] w-[591px] flex justify-center items-center text-xl font-semibold text-white bg-blue-500 rounded-xl outline-none  active:text-white active:bg-blue-500 hover:text-white hover:bg-blue-600  duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
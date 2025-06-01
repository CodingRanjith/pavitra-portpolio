"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#d3a87c] text-xl uppercase">Contact Me</p>
      <div className="max-w-3xl text-[#f5e9dc] rounded-lg border border-[#a9745b] bg-[#3b2b2a] p-3 lg:p-5 shadow-md">
        <p className="text-sm">
          {"If you have any questions or would like to work together, feel free to reach out. I’m always happy to connect over a virtual coffee ☕."}
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base text-[#f5e9dc]">Your Name:</label>
            <input
              className="bg-[#5a3d31] w-full border rounded-md border-[#a9745b] focus:border-[#d3a87c] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-[#f5e9dc] placeholder:text-[#cbbeb2]"
              type="text"
              maxLength="100"
              required
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-[#f5e9dc]">Your Email:</label>
            <input
              className="bg-[#5a3d31] w-full border rounded-md border-[#a9745b] focus:border-[#d3a87c] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-[#f5e9dc] placeholder:text-[#cbbeb2]"
              type="email"
              maxLength="100"
              required
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-[#f5e9dc]">Your Message:</label>
            <textarea
              className="bg-[#5a3d31] w-full border rounded-md border-[#a9745b] focus:border-[#d3a87c] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-[#f5e9dc] placeholder:text-[#cbbeb2]"
              maxLength="500"
              name="message"
              required
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            {error.required && (
              <p className="text-sm text-red-400">All fields are required!</p>
            )}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#c49b6c] to-[#d3a87c] px-6 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-[#3b2b2a] transition-all duration-200 ease-out hover:text-[#3b2b2a]"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

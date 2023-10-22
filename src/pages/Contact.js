import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    const res = await axios.post(process.env.REACT_APP_URL, data);

    if (res.status === 200) {
      setName("");
      setEmail("");
      setMessage("");
      Swal.fire(
        'Thank You!',
        'I will try to answer as soon as possible.',
        'success'
      )
    } else {
      Swal.fire(
        'error',
        'your message not sent. please try again.',
        'error'
      )
    }
  };

  return (
    <div>
      <section className="dark:bg-gray-800 text-gray-900 dark:text-gray-200 body-font relative font-roboto_slob font-bold">
        <div className="container px-5 py-[28.5px] mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29331.06097488066!2d87.04244626113761!3d23.229159707857008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7a58c5fc2b411%3A0xfdbd0b45c0b4aa70!2sBankura%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1693398844360!5m2!1sen!2sin"
            ></iframe>

            <div className="bg-white dark:bg-gray-800 rounded-lg relative flex flex-wrap py-6 shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-bold font-serif tracking-widest">
                  ADDRESS
                </h2>
                <p className="mt-1">Bankura, West Bengal, India</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-bold font-serif tracking-widest">
                  EMAIL
                </h2>
                <a href="#" className="text-indigo-500 leading-relaxed">
                  hello@dsourav.com
                </a>
                <h2 className="title-font font-bold font-serif tracking-widest mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+91 9641804633</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h1 className="text-3xl mb-1 font-bold font-mono title-font">
              Any question
            </h1>
            <p className="leading-relaxed mb-5 ">
              Type your question here. I will try to answer as soon as possible.
            </p>
            <form onSubmit={onSubmitHandle}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sourav Dutta"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

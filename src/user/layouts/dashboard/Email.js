import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function EmailForm() {
  const form = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    if (!name.trim()) {
      alert("Enter Name");
    } else if (!phone.trim()) {
      alert("Enter Phone Number");
    } else if (!mail.trim()) {
      alert("Enter Email Address");
    } else if (!message.trim()) {
      alert("Enter Message");
    } else {
      emailjs
        .sendForm(
          "service_cih9z5r",
          "template_vd6zcgx",
          form.current,
          "MiElwnYhbXYDEzjll"
        )
        .then(
          (result) => {
            console.log(result.text);
            setName("");
            setMail("");
            setPhone("");
            setMessage("");
            alert("Email Sended!");
            setIsDisabled(false);
          },
          (error) => {
            console.log(error.text);
            setIsDisabled(false);
          }
        );
    }
    // (name.trim().length === 0) ? setErr(current => [...current,'false']) : setErr(current => [...current,'true'])
    // (phone.trim().length === 0) ? setErr(current => [...current,'false']) : setErr(current => [...current,'true'])
    // (email.trim().length === 0) ? setErr(current => [...current,'false']) : setErr(current => [...current,'true'])
    // (message.trim().length === 0) ? setErr(current => [...current,'false']) : setErr(current => [...current,'true'])
  };

  return (
    <React.Fragment>
      <section id="contact">
        <div className="p-10 text-gray-800 max-w-3xl ml-auto mr-auto justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-800 px-3 pt-10">
            Contact Us
          </h2>
          <p className="font-normal text-center p-2 text-gray-800 mb-5">
            Let we know what logo you want
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                required=""
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                required=""
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={mail}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                required=""
              ></textarea>
            </div>
            <div className="flex w-full mr-auto ml-auto justify-center">
              <button
                type="submit"
                disabled={isDisabled}
                className="text-white w-36 bg-gray-800 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default EmailForm;

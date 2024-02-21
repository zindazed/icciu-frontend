import logo from "../logo.svg";
import "../App.css";
import axios from "axios";
// import Link from "react-router-dom";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import React, { useContext, useEffect, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
// import { LayoutContext } from "../../../../layout/context/layoutcontext";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
// import { LayoutContext } from "../../layout/context/layoutcontext";
// import { NodeRef } from "@/types";

const businessNatures = [
  "Retail",
  "Technology",
  "Healthcare",
  "Finance",
  "Real Estate",
  "Manufacturing",
  "Education",
  "Professional Services",
  "Construction",
  "Transportation",
  "Fitness and Wellness",
  "Beauty and Cosmetics",
  "Food & Beverages",
];

function RegisterPage() {
  const [err, setErr] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    tin_no: "",
    address: "",
    contact_no: "",
    business_name: "",
    business_nature: "",
    urss_no: "",
    password: "",
    email: "",
    country: "",
    postal_zip: "",
  });

  const handleSubmit = (e) => {
    setSubmitting(true);
    e.preventDefault();

    if (formData.password !== password) {
      setMessage("Passwords do not match");
      setSubmitting(false);
      return; // Prevent form submission
    }
    axios
      .post("https://laravel.icciu.org.ug/laravel/public/api/members", formData)
      .then((response) => {
        console.log("Success:", response.data);
        setMessage(response.data.message);
        setSubmitting(false);
        // Handle success, maybe redirect user or show a success message
      })
      .catch((error) => {
        setErr(true);
        console.error("Error:", error);
        setMessage("An error occurred, please try again");
        setSubmitting(false);
        // Handle error, maybe show an error message to the user
      });
  };

  //   const { layoutConfig } = useContext(LayoutContext);

  //   const containerClassName = classNames(
  //     "surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden",
  //     { "p-input-filled": layoutConfig.inputStyle === "filled" }
  //   );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setMessage("");
  };

  return (
    <div>
      <div className="mt-3"></div>
      <div className="flex flex-column align-items-center mt-2 justify-content-center">
        <div
          style={{
            borderRadius: "56px",
            padding: "0.3rem",
            background:
              "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)",
          }}
        >
          <div
            className="w-full surface-card py-3 px-5 sm:px-8"
            style={{ borderRadius: "53px" }}
          >
            <div className="text-center mb-2">
              <div className="flex flex-column align-items-center justify-content-center">
                <img
                  src={`/layout/images/logo-1.png`}
                  alt="Sakai logo"
                  className="mb-5 w-6rem flex-shrink-0"
                />
              </div>
              <span className="text-600 font-medium">Join ICCIU</span>
            </div>

            <a href="/">
              <div className="text-blue-600 text-center underline font-medium mb-3">
                back to Home
              </div>
            </a>
            <form onSubmit={handleSubmit}>
              <div
                className={
                  err
                    ? "text-red-600 text-center font-light"
                    : "text-green-600 text-center font-light"
                }
              >
                {message}
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  Username
                </label>
                <InputText
                  id="name"
                  type="text"
                  value={formData.name}
                  placeholder="Username"
                  className="w-full md:w-30rem mb-5"
                  onChange={(e) => handleChange(e)}
                  style={{ padding: "1rem" }}
                  required
                />

                <label
                  htmlFor="email"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  Email
                </label>
                <InputText
                  id="email"
                  type="email"
                  value={formData.email}
                  placeholder="Email"
                  className="w-full md:w-30rem mb-5"
                  onChange={(e) => handleChange(e)}
                  style={{ padding: "1rem" }}
                  required
                />

                <label
                  htmlFor="password"
                  className="block text-900 font-medium text-xl mb-2"
                >
                  Password
                </label>
                <Password
                  inputId="password"
                  value={formData.password}
                  onChange={(e) => handleChange(e)}
                  placeholder="Password"
                  toggleMask
                  className="w-full mb-5"
                  inputClassName="w-full p-3 md:w-30rem"
                  required
                ></Password>

                <label
                  htmlFor="password2"
                  className="block text-900 font-medium text-xl mb-2"
                >
                  Confirm Password
                </label>
                <Password
                  inputId="password2"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Confirm Password"
                  className="w-full mb-5"
                  inputClassName="w-full p-3 md:w-30rem"
                  required
                ></Password>

                <label
                  htmlFor="tin_no"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  Tin Number
                </label>
                <InputText
                  id="tin_no"
                  type="text"
                  placeholder="Tin Number"
                  value={formData.tin_no}
                  className="w-full md:w-30rem mb-5"
                  onChange={(e) => handleChange(e)}
                  style={{ padding: "1rem" }}
                />

                <label
                  htmlFor="address"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  Address
                </label>
                <InputText
                  id="address"
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  className="w-full md:w-30rem mb-5"
                  onChange={(e) => handleChange(e)}
                  style={{ padding: "1rem" }}
                />

                <label
                  htmlFor="contact_no"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  Tel
                </label>
                <InputText
                  id="contact_no"
                  type="text"
                  placeholder="Tel"
                  value={formData.contact_no}
                  className="w-full md:w-30rem mb-5"
                  onChange={(e) => handleChange(e)}
                  style={{ padding: "1rem" }}
                />

                <label
                  htmlFor="business_name"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  Business Name
                </label>
                <InputText
                  id="business_name"
                  type="text"
                  placeholder="Business Name"
                  value={formData.business_name}
                  className="w-full md:w-30rem mb-5"
                  onChange={(e) => handleChange(e)}
                  style={{ padding: "1rem" }}
                />

                <label
                  htmlFor="business_nature"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  Business Nature
                </label>
                <select
                  id="business_nature"
                  value={formData.business_nature}
                  onChange={(e) => handleChange(e)}
                  className="w-full md:w-30rem mb-5"
                  style={{ padding: "1rem" }}
                >
                  {/* <option value="">Select Business Nature</option> */}
                  {businessNatures.map((nature, index) => (
                    <option key={index} value={nature}>
                      {nature}
                    </option>
                  ))}
                </select>

                <label
                  htmlFor="urss_no"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  URSS Number
                </label>
                <InputText
                  id="urss_no"
                  type="text"
                  placeholder="URSS Number"
                  value={formData.urss_no}
                  className="w-full md:w-30rem mb-5"
                  onChange={(e) => handleChange(e)}
                  style={{ padding: "1rem" }}
                />

                <label
                  htmlFor="country"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  Country
                </label>
                <InputText
                  id="country"
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  className="w-full md:w-30rem mb-5"
                  onChange={(e) => handleChange(e)}
                  style={{ padding: "1rem" }}
                />

                <label
                  htmlFor="postal_zip"
                  className="block text-900 text-xl font-medium mb-2"
                >
                  Postal zip
                </label>
                <InputText
                  id="postal_zip"
                  type="text"
                  placeholder="Postal zip"
                  value={formData.postal_zip}
                  className="w-full md:w-30rem mb-5"
                  onChange={(e) => handleChange(e)}
                  style={{ padding: "1rem" }}
                />

                {/* <div className="flex align-items-center justify-content-between mb-2 gap-5">
                  <div className="flex align-items-center">
                    <Checkbox
                      inputId="rememberme1"
                      checked={checked}
                      onChange={(e) => setChecked(e.checked ?? false)}
                      className="mr-2"
                    ></Checkbox>
                    <label htmlFor="rememberme1">Remember me</label>
                  </div>
                  <a
                    className="font-medium no-underline ml-2 text-right cursor-pointer"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Forgot password?
                  </a>
                </div> */}
                <div
                  className={
                    err
                      ? "text-red-600 text-center font-light mb-2"
                      : "text-green-600 text-center font-light mb-2"
                  }
                >
                  {message}
                </div>
                {submitting ? (
                  <div className="text-blue-900 text-center font-bold mb-2">
                    Submitting...
                  </div>
                ) : (
                  <Button
                    label="Register"
                    className="w-full p-3 text-xl"
                    type="submit"
                  ></Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

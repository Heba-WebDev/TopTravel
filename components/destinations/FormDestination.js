"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";

export default function FormDestination() {
  const formik = useFormik({
    //Formik keeps track of the state of these values
    initialValues: {
      fullName: "",
      email: "",
      numberOfPeople: "",
      arrival: new Date(),
    },

    //Yup handles form validation
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(50, "Full Name must be 50 characters or less")
        .required("Please enter your full name"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter an email"),
    }),

    //Formik handles form submission
    onSubmit: (values) => {
      //send the values to the backend later
      // console.log(values)
    },
  });
  const [startDate, setStartDate] = useState(new Date());

  return (
    <form onSubmit={formik.handleSubmit} className={``}>
      <div className={``}>
        <h2 className={``}>Plan your package!</h2>
        <p className={``}>
          For a truly unique experience, contact one of our travel advisors via
          WhatsApp or enter your details and we will contact you to help
          customise your package!
        </p>
      </div>
      {/* The company */}
      <section className={``}>
        <h2 className={``}>
          <span className={``}>1.</span>
          Your Details
        </h2>
        <div className={`grid gap-8`}>
          <label htmlFor="fullName">
            {"Full Name"} <span className={``}>*</span>
          </label>{" "}
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            placeholder="Full Name"
            className={``}
          />
        </div>
        <div className={`grid gap-8`}>
          <label htmlFor="email">
            {"Email"} <span className={``}>*</span>
          </label>{" "}
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            autoComplete="on"
            onChange={formik.handleChange}
            placeholder="Email"
            className={``}
          />
        </div>

        <div className="bg-white">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </section>

      {/* The role */}
      <section className={``}>
        <h2 className={``}>
          <span className={``}>2.</span>
          The traveling group
        </h2>
        <div className={``}>
          <label htmlFor="position">
            {formik.touched.position && formik.errors.position
              ? formik.errors.position
              : "Position Name"}{" "}
            <span className={``}>*</span>
          </label>{" "}
          <input
            type="text"
            id="position"
            name="position"
            value={formik.values.position}
            onChange={formik.handleChange}
            placeholder="Example: Senior Software Engineer"
            className={``}
          />
        </div>

        <div className={``}>
          <label htmlFor="industry">
            Industry <span className={``}>*</span>
          </label>
          <select
            component="select"
            id="industry"
            name="industry"
            value={formik.values.industry}
            onChange={formik.handleChange}
            className={` `}
          >
            <option value="business">Business</option>
            <option value="design">Design</option>
            <option value="development">Development & IT</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className={``}>
          <label htmlFor="contractType">
            Contract <span className={``}>*</span>
          </label>
          <select
            component="select"
            id="contractType"
            name="contractType"
            value={formik.values.contractType}
            onChange={formik.handleChange}
            className={``}
          >
            <option value="fulltime">Full Time</option>
            <option value="parttime">Part Time</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>

        <div className={``}>
          <label htmlFor="location">
            Location <span className={``}>*</span>
          </label>
          <select
            component="select"
            id="location"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            className={``}
          >
            <option value="remote">Remote</option>
            <option value="egypt">Egypt</option>
          </select>
        </div>

        <div className={``}>
          <label htmlFor="description">
            {formik.touched.description && formik.errors.description
              ? formik.errors.description
              : "Job Description"}{" "}
            <span className={``}>*</span>
          </label>{" "}
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            className={``}
          />
        </div>
        <div className={``}>
          <label htmlFor="salary">
            {formik.touched.salary && formik.errors.salary
              ? formik.errors.salary
              : "Salary (optional)"}{" "}
          </label>{" "}
          <input
            type="text"
            id="salary"
            name="salary"
            value={formik.values.salary}
            onChange={formik.handleChange}
            placeholder={`Example: "$100,000 - $170,000 USD"`}
            className={``}
          />
        </div>
      </section>

      {/* The payment */}
      <section className={``}>
        <h2 className={``}>
          <span className={``}>3.</span>
          Choose a mean of communcation
        </h2>

        <div className={``}>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value="checked"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={``}
          />
          <label htmlFor="terms">
            {formik.touched.terms && formik.errors.terms
              ? formik.errors.terms
              : "I agree to the terms and conditions!"}{" "}
          </label>{" "}
        </div>

        <button type="submit" className={``}>
          Pay Now - 199$
        </button>
      </section>
    </form>
  );
}

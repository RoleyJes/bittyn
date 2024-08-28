// "use client";

// import { signup } from "../login/actions";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import CallToAction from "../components/CallToAction";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function SignupPage() {
//   const router = useRouter();

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     try {
//       await signup(formData); // Ensure this calls the correct signup function
//       router.push("/login"); // Redirect to the home page after successful signup
//     } catch (error) {
//       console.error("Signup failed:", error);
//       router.push("/error"); // Redirect to the error page if signup fails
//     }
//   };

//   return (
//     <main>
//       <section className="pt-36 md:pt-44 pb-28 md:pb-36 px-4 relative bg-[url('/asset/main-banner-bg.png')] bg-no-repeat bg-cover bg-center">
//         <Navbar />

//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
//             <figure>
//               <img src="asset/login.svg" alt="" />
//             </figure>
//             <form
//               onSubmit={handleSubmit} // This triggers the signup flow
//               className="bg-white rounded-2xl shadow-2xl px-6 py-12 text-[#212529] tracking-wide">
//               <h2 className="text-[#101044] text-xl md:text-2xl mb-6 text-center font-bold">
//                 Register
//               </h2>

//               <div className="mb-12">
//                 <div className="mb-6 grid grid-cols-1">
//                   <label htmlFor="username" className="mb-2">
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     name="username"
//                     placeholder="Enter your username"
//                     className="rounded-[100px] border border-[rgba(141,141,174,0.6)] focus:outline-[#2161e0] text-sm py-3 px-6"
//                   />
//                 </div>

//                 <div className="mb-6 grid grid-cols-1">
//                   <label htmlFor="email" className="mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     className="rounded-[100px] border border-[rgba(141,141,174,0.6)] focus:outline-[#2161e0] text-sm py-3 px-6"
//                   />
//                 </div>

//                 <div className="mb-6 grid grid-cols-1">
//                   <label htmlFor="password" className="mb-2">
//                     Password
//                   </label>
//                   <input
//                     type="password" // Change input type to password
//                     name="password"
//                     placeholder="Enter password"
//                     className="rounded-[100px] border border-[rgba(141,141,174,0.6)] focus:outline-[#2161e0] text-sm py-3 px-6"
//                   />
//                 </div>

//                 <div className="mb-6 grid grid-cols-1">
//                   <label htmlFor="confirm_password" className="mb-2">
//                     Confirm Password
//                   </label>
//                   <input
//                     type="password" // Change input type to password
//                     name="confirm_password"
//                     placeholder="Re-enter password"
//                     className="rounded-[100px] border border-[rgba(141,141,174,0.6)] focus:outline-[#2161e0] text-sm py-3 px-6"
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-[#2161e0] hover:bg-[#1da1f2] text-white rounded-[50rem] text-center py-4 mb-6 transition-all">
//                 Register
//               </button>

//               <p className="text-center">
//                 Already have an account?{" "}
//                 <Link
//                   href="/login"
//                   className="text-[#17bd8d] hover:text-[#0a58ca] transition-all underline">
//                   Log in
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </section>

//       <CallToAction />

//       <Footer />
//     </main>
//   );
// }
"use client";

import { signup } from "../login/actions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { BeatLoader } from "react-spinners";
import Error from "../components/Error";
import { useEffect, useState } from "react";
import React, { ChangeEvent, FormEvent } from "react";
import * as Yup from "yup";
import { ValidationError } from "yup"; // Import ValidationError for typing
import useFetch from "../hooks/use-fetch";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Define the shape of the errors object
interface Errors {
  [key: string]: string;
}

export default function SignupPage() {
  const router = useRouter();

  const [errors, setErrors] = useState<Errors>({}); // Initialize as an object with defined types
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { data, error, loading, fn: fnSignup } = useFetch(signup, formData);

  useEffect(() => {
    if (error === null && data) {
      revalidatePath("/", "layout");
      redirect("/login");
    }
  }, [data, error]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setErrors({});

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid Email")
          .required("Email is Required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is Required"),
      });
      await schema.validate(formData, { abortEarly: false }); // Ensure this calls the correct signup function

      await fnSignup();

      router.push("/login"); // Redirect to the home page after successful signup
    } catch (e) {
      if (e instanceof ValidationError) {
        const newErrors: Errors = {}; // Initialize as an object

        e.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });

        setErrors(newErrors); // Set errors as an object
      } else {
        console.error("Unexpected error:", e);
      }
    }
  };

  return (
    <main>
      <section className="pt-36 md:pt-44 pb-28 md:pb-36 px-4 relative bg-[url('/asset/main-banner-bg.png')] bg-no-repeat bg-cover bg-center">
        <Navbar />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
            <figure>
              <img src="asset/login.svg" alt="" />
            </figure>
            <form
              onSubmit={handleSubmit} // This triggers the signup flow
              className="bg-white rounded-2xl shadow-2xl px-6 py-12 text-[#212529] tracking-wide">
              <h2 className="text-[#101044] text-xl md:text-2xl mb-6 text-center font-bold">
                Register
              </h2>

              <div className="mb-12">
                {error && <Error message={error.message} />}
                <div className="mb-6 grid grid-cols-1">
                  <label htmlFor="username" className="mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    onChange={handleInputChange}
                    className="rounded-[100px] border border-[rgba(141,141,174,0.6)] focus:outline-[#2161e0] text-sm py-3 px-6"
                  />
                  {errors.username && <Error message={errors.username} />}
                </div>
                <div className="mb-6 grid grid-cols-1">
                  <label htmlFor="email" className="mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                    className="rounded-[100px] border border-[rgba(141,141,174,0.6)] focus:outline-[#2161e0] text-sm py-3 px-6"
                  />
                  {errors.email && <Error message={errors.email} />}
                </div>
                <div className="mb-6 grid grid-cols-1">
                  <label htmlFor="password" className="mb-2">
                    Password
                  </label>
                  <input
                    type="password" // Change input type to password
                    name="password"
                    placeholder="Enter password"
                    onChange={handleInputChange}
                    className="rounded-[100px] border border-[rgba(141,141,174,0.6)] focus:outline-[#2161e0] text-sm py-3 px-6"
                  />
                  {errors.password && <Error message={errors.password} />}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full bg-[#2161e0] hover:bg-[#1da1f2] text-white rounded-[50rem] text-center py-4 mb-6 transition-all">
                {loading ? (
                  <BeatLoader size={10} color="#ffffff" />
                ) : (
                  "Register"
                )}
              </button>

              <p className="text-center">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#17bd8d] hover:text-[#0a58ca] transition-all underline">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      <CallToAction />

      <Footer />
    </main>
  );
}

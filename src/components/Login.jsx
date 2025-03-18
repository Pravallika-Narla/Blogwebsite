import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "./SignInwithGoogle";
import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      toast.success("User logged in Successfully", {
          position: "top-center",
        });
        navigate('/')
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Login
        </h3>

        <div className="mb-3">
          <label className="block text-gray-600 text-sm mb-1">Email Address</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-600 text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>

        <p className="text-sm text-gray-600 text-center mt-4">
          New user?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register Here
          </a>
        </p>

        <div className="mt-4">
          <SignInwithGoogle />
        </div>
      </form>
    </div>
  );
}

export default Login;

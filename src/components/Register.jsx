// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth, db } from "./firebase";
// import { setDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";

// function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       const user = auth.currentUser;
//       console.log(user);
//       if (user) {
//         await setDoc(doc(db, "Users", user.uid), {
//           email: user.email,
//           firstName: fname,
//           lastName: lname,
//           photo:""
//         });
//       }
//       console.log("User Registered Successfully!!");
//       toast.success("User Registered Successfully!!", {
//         position: "top-center",
//       });
//     } catch (error) {
//       console.log(error.message);
//       toast.error(error.message, {
//         position: "bottom-center",
//       });
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <h3>Sign Up</h3>

//       <div className="mb-3">
//         <label>First name</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="First name"
//           onChange={(e) => setFname(e.target.value)}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label>Last name</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Last name"
//           onChange={(e) => setLname(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label>Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Enter email"
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label>Password</label>
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Enter password"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>

//       <div className="d-grid">
//         <button type="submit" className="btn btn-primary">
//           Sign Up
//         </button>
//       </div>
//       <p className="forgot-password text-right">
//         Already registered <a href="/login">Login</a>
//       </p>
//     </form>
//   );
// }
// export default Register;
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      navigate('/login')
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
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Sign Up
        </h3>

        <div className="mb-3">
          <label className="block text-gray-600 text-sm mb-1">First Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="First name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-600 text-sm mb-1">Last Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-600 text-sm mb-1">Email Address</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-600 text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-gray-600 text-center mt-4">
          Already registered?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login Here
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;

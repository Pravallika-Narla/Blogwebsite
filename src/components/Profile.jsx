import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center">
        {userDetails ? (
          <>
            {/* <img
              src={userDetails.photo}
              alt="User"
              className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
            /> */}
            <h3 className="text-xl font-semibold mt-4">
              Welcome {userDetails.firstName} 🙏
            </h3>
            <p className="text-gray-600">Email: {userDetails.email}</p>
            <p className="text-gray-600">First Name: {userDetails.firstName}</p>

            <button
              onClick={handleLogout}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;

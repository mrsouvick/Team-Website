import { auth } from "./firebase.js";
import { signOut } from "firebase/auth";

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("Logged out successfully!");
    window.location.href = "login.html"; // Redirect to login page
  } catch (error) {
    alert("Logout failed: " + error.message);
  }
});
import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    alert("Login successful!");
    window.location.href = "admin-panel.html"; // Redirect to admin panel
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});
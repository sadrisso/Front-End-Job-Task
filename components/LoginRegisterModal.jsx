"use client";
// import { auth } from "@/app/firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import RegisterModal from "./RegisterForm";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function LoginRegisterModal({ isOpen, onClose }) {
  // Always define hooks at the top level
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  // Don't render the modal if not open
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-[50%] flex items-center justify-center px-2 z-50 font-inter"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg px-4 py-6 sm:px-6 sm:py-8 w-full max-w-sm sm:max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

      <h2 className="text-2xl font-bold text-center mb-6">{isRegister ? "Register" : "Login"}</h2>

        {isRegister ? <RegisterForm /> : <LoginForm />}
        {isRegister ? (
          <p className="mt-6 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <button
              onClick={() => {
                setIsRegister(false);
              }}
              className="text-orange-500 font-semibold hover:underline"
            >
              Sign in
            </button>
          </p>
        ) : (
          <p className="mt-6 text-center text-sm text-gray-700">
            Don't have an account?{" "}
            <button
              onClick={() => {
                setIsRegister(true);
              }}
              className="text-orange-500 font-semibold hover:underline"
            >
              Sign up
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

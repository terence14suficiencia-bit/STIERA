/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SocialBtn = ({ children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="border border-purple-500 p-3 rounded-lg hover:bg-gray-100 transition flex items-center justify-center"
  >
    {children}
  </button>
);

const EyeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M1 12s3.5-7 11-7 11 7 11 7-3.5 7-11 7-11-7-11-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-10-7-10-7a18.45 18.45 0 0 1 5.17-6.22" />
    <path d="M1 1l22 22" />
    <path d="M9.9 4.24A10.88 10.88 0 0 1 12 4c7 0 10 7 10 7a18.5 18.5 0 0 1-2.06 3.19" />
  </svg>
);

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const stats = [
    { value: "10K+", label: "Students" },
    { value: "500+", label: "Courses" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "Support" },
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password");
      return;
    }

    if (!email.toLowerCase().endsWith("@stiera.com")) {
      setError("Only Stiera email accounts are allowed");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("role", data.role);

      if (data.role === "admin") {
        window.location.href = "/adminDashboard";
      } else {
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server");
    }
  };

  return (
    <main className="min-h-screen flex relative">
      <div className="absolute top-4 left-4 z-50">
        <Link href="/">
          <img
            src="/STIERA.png"
            alt="STIERA Logo"
            className="w-30 h-20 object-contain cursor-pointer"
          />
        </Link>
      </div>
      <div className="absolute top-4 left-4 z-50">
        <Link href="/">
          <img
            src="/STIERA.png"
            alt="STIERA Logo"
            className="w-30 h-20 object-contain cursor-pointer"
          />
        </Link>
      </div>

      <div className="hidden md:flex w-1/2 flex-col justify-start pt-20 px-12 bg-gradient-to-b from-[#0a0f2c] to-[#111a3a] text-white">
        <h2 className="mt-6 text-5xl font-semibold leading-relaxed">
          Smart Training & Interactive Educational Resource Academy
        </h2>

        <p className="mt-3 text-gray-400">
          — Simple learning platform for everyone.
        </p>

        <div className="mt-30 grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/5 p-5 rounded-xl border border-white/10 hover:scale-105 hover:bg-white/10 transition"
            >
              <h3 className="text-2xl text-purple-400 font-bold">{s.value}</h3>
              <p className="text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-6 pt-12">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white p-12 rounded-lg shadow-md"
        >
          <h2 className="text-lg font-semibold text-center text-black">
            Welcome to <br />
            <span className="text-3xl text-purple-500">STIERA</span>
          </h2>

          {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-6 w-full border px-4 py-3 rounded-lg text-black border-gray-300"
          />

          <div className="relative mt-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 pr-12 rounded-lg text-black"
            />

            {password.length > 0 && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Continue
          </button>

          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link href="/sign-up" className="text-purple-600 font-semibold">
              Register now!
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

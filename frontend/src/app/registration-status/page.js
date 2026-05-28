"use client";
export default function PendingRegistration() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-purple-600">
          Registration Submitted
        </h1>

        <p className="mt-4 text-gray-600">
          Your application is now <b>PENDING</b>.
        </p>

        <p className="mt-2 text-gray-600">
          Please visit the school office for verification, payment, and account
          activation.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Once approved, the admin will provide your official LMS email and
          password.
        </p>

        <a
          href="/login"
          className="mt-6 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
}

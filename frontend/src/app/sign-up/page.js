/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Step1 = ({ form, handleChange }) => (
  <>
    <input
      name="lastName"
      onChange={handleChange}
      value={form.lastName}
      placeholder="Last Name"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />
    <input
      name="firstName"
      onChange={handleChange}
      value={form.firstName}
      placeholder="First Name"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />
    <input
      name="middleName"
      onChange={handleChange}
      value={form.middleName}
      placeholder="Middle Name"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />

    <select
      name="gender"
      value={form.gender}
      onChange={handleChange}
      className={`mt-6 w-full border px-4 py-3 rounded-lg border-black bg-white ${
        form.gender === "" ? "text-gray-400" : "text-black"
      }`}
    >
      <option value="" disabled>
        Select Gender
      </option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="prefer_not_to_say">Prefer not to say</option>
    </select>

    <input
      type={form.dateOfBirth ? "date" : "text"}
      name="dateOfBirth"
      value={form.dateOfBirth}
      onChange={handleChange}
      onFocus={(e) => (e.target.type = "date")}
      onBlur={(e) => !form.dateOfBirth && (e.target.type = "text")}
      placeholder="Date of Birth"
      className="
        mt-6 w-full border border-black px-4 py-3 rounded-lg bg-white
        text-black focus:outline-none focus:ring-2 focus:ring-black/20
      "
    />

    <input
      name="age"
      onChange={handleChange}
      value={form.age}
      placeholder="Age"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />

    <input
      name="placeOfBirth"
      onChange={handleChange}
      value={form.placeOfBirth}
      placeholder="Place of Birth"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />

    
    <select
      name="nationality"
      value={form.nationality}
      onChange={handleChange}
      className={`
        mt-6 w-full border border-black px-4 py-3 rounded-lg bg-white
        focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black
        ${form.nationality === "" ? "text-gray-400" : "text-black"}
      `}
    >
      <option value="">Select Nationality</option>

      <option value="Filipino">Filipino</option>
      <option value="Chinese">Chinese</option>
      <option value="Japanese">Japanese</option>
      <option value="Korean">Korean</option>
      <option value="Indian">Indian</option>
      <option value="Indonesian">Indonesian</option>
      <option value="Malaysian">Malaysian</option>
      <option value="Singaporean">Singaporean</option>
      <option value="Thai">Thai</option>
      <option value="Vietnamese">Vietnamese</option>

      <option value="American">American</option>
      <option value="Canadian">Canadian</option>
      <option value="British">British</option>
      <option value="Australian">Australian</option>
      <option value="German">German</option>
      <option value="French">French</option>
      <option value="Italian">Italian</option>
    </select>

    <select
      name="religion"
      value={form.religion}
      onChange={handleChange}
      className={`mt-6 w-full border px-4 py-3 rounded-lg border-black bg-white
  focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black
  ${form.religion === "" ? "text-gray-400" : "text-black"}`}
    >
      <option value="" className="text-gray-400">
        Select Religion
      </option>

      <option value="Roman Catholic">Roman Catholic</option>
      <option value="Christian">Christian</option>
      <option value="Iglesia ni Cristo">Iglesia ni Cristo</option>
      <option value="Evangelical">Evangelical</option>
      <option value="Born Again Christian">Born Again Christian</option>
      <option value="Seventh-day Adventist">Seventh-day Adventist</option>

      <option value="Islam">Islam</option>
      <option value="Buddhism">Buddhism</option>
      <option value="Hinduism">Hinduism</option>
      <option value="Atheist">Atheist</option>
      <option value="Agnostic">Agnostic</option>

      <option value="Others">Others</option>
    </select>
    <select
      name="civilStatus"
      value={form.civilStatus}
      onChange={handleChange}
      className={`mt-6 w-full border px-4 py-3 rounded-lg border-black bg-white
  focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black
  transition
  ${form.civilStatus ? "text-black" : "text-gray-400"}`}
    >
      <option value="" disabled>
        Civil Status
      </option>

      <option value="Single">Single</option>
      <option value="Married">Married</option>
      <option value="Widowed">Widowed</option>
      <option value="Separated">Separated</option>
      <option value="Divorced">Divorced</option>
    </select>
  </>
);

const Step2 = ({ form, handleChange }) => (
  <>
    <input
      name="mothersFullName"
      onChange={handleChange}
      value={form.mothersFullName}
      placeholder="Mother's Full Name"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />
    <input
      name="mothersOccupation"
      onChange={handleChange}
      value={form.mothersOccupation}
      placeholder="Mother's Occupation"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />
    <input
      name="mothersContactNumber"
      onChange={handleChange}
      value={form.mothersContactNumber}
      placeholder="Mother's Contact Number"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />
    <input
      name="mothersAddress"
      onChange={handleChange}
      value={form.mothersAddress}
      placeholder="Mother's Address"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />

    <input
      name="fathersFullName"
      onChange={handleChange}
      value={form.fathersFullName}
      placeholder="Father's Full Name"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />
    <input
      name="fathersOccupation"
      onChange={handleChange}
      value={form.fathersOccupation}
      placeholder="Father's Occupation"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />
    <input
      name="fathersContactNumber"
      onChange={handleChange}
      value={form.fathersContactNumber}
      placeholder="Father's Contact Number"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />
    <input
      name="fathersAddress"
      onChange={handleChange}
      value={form.fathersAddress}
      placeholder="Father's Address"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />
  </>
);

const Step3 = ({ form, handleChange }) => (
  <>
    <input
      name="address"
      onChange={handleChange}
      value={form.address}
      placeholder="Address"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />
    <input
      name="emailAddress"
      onChange={handleChange}
      value={form.emailAddress}
      placeholder="Email Address"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />
    <input
      name="mobileNumber"
      onChange={handleChange}
      value={form.mobileNumber}
      placeholder="Mobile Number"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />
    <select
      name="yearLevel"
      value={form.yearLevel}
      onChange={handleChange}
      className={`mt-6 w-full border px-4 py-3 rounded-lg border-black bg-white
  focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black
  transition
  ${form.yearLevel ? "text-black" : "text-gray-400"}`}
    >
      <option value="" disabled>
        Year Level
      </option>

    
      <option value="Grade 11 (Senior High)">Grade 11 (Senior High)</option>
      <option value="Grade 12 (Senior High)">Grade 12 (Senior High)</option>

     
      <option value="1st Year College">1st Year College</option>
      <option value="2nd Year College">2nd Year College</option>
      <option value="3rd Year College">3rd Year College</option>
      <option value="4th Year College">4th Year College</option>

      
      <option value="5th Year / Irregular">5th Year / Irregular</option>
      <option value="Postgraduate">Postgraduate</option>
    </select>
    <select
      name="courseProgram"
      value={form.courseProgram}
      onChange={handleChange}
      className={`mt-6 w-full border px-4 py-3 rounded-lg border-black bg-white
  focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black
  transition
  ${form.courseProgram ? "text-black" : "text-gray-400"}`}
    >
      <option value="" disabled>
        Course Program
      </option>

      
      <option value="BS Information Technology">
        BS Information Technology
      </option>
      <option value="BS Computer Science">BS Computer Science</option>
      <option value="BS Information Systems">BS Information Systems</option>
      <option value="BS Software Engineering">BS Software Engineering</option>

      
      <option value="BS Business Administration">
        BS Business Administration
      </option>
      <option value="BS Accountancy">BS Accountancy</option>
      <option value="BS Marketing Management">BS Marketing Management</option>
      <option value="BS Entrepreneurship">BS Entrepreneurship</option>

  
      <option value="Bachelor of Elementary Education">
        Bachelor of Elementary Education
      </option>
      <option value="Bachelor of Secondary Education">
        Bachelor of Secondary Education
      </option>

    
      <option value="BS Nursing">BS Nursing</option>
      <option value="BS Pharmacy">BS Pharmacy</option>
      <option value="BS Medical Technology">BS Medical Technology</option>

      {/* Engineering */}
      <option value="BS Civil Engineering">BS Civil Engineering</option>
      <option value="BS Architecture">BS Architecture</option>
      <option value="BS Electrical Engineering">
        BS Electrical Engineering
      </option>
      <option value="BS Mechanical Engineering">
        BS Mechanical Engineering
      </option>
    </select>
    <select
      name="schoolYear"
      value={form.schoolYear}
      onChange={handleChange}
      className={`mt-6 w-full border px-4 py-3 rounded-lg border-black bg-white
  focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black
  transition
  ${form.schoolYear ? "text-black" : "text-gray-400"}`}
    >
      <option value="" disabled>
        School Year
      </option>

      {Array.from({ length: 5 }, (_, i) => {
        const startYear = new Date().getFullYear() + i;
        const endYear = startYear + 1;
        const label = `${startYear} - ${endYear}`;

        return (
          <option key={label} value={label}>
            {label}
          </option>
        );
      })}
    </select>
    <select
      name="studentType"
      value={form.studentType}
      onChange={handleChange}
      className={`mt-6 w-full border px-4 py-3 rounded-lg border-black bg-white
  focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black
  transition
  ${form.studentType === "" ? "text-gray-400" : "text-black"}`}
    >
      <option value="" disabled>
        Student Type
      </option>

      <option value="New Student">New Student</option>
      <option value="Old Student">Old Student</option>
    </select>
    <input
      name="previousSchool"
      onChange={handleChange}
      value={form.previousSchool}
      placeholder="Previous School"
      className="mt-6 w-full border px-4 py-3 rounded-lg border-black text-black"
    />
  </>
);



export default function SignupPage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    gender: "",
    dateOfBirth: "",
    age: "",
    placeOfBirth: "",
    nationality: "",
    religion: "",
    civilStatus: "",
    address: "",
    emailAddress: "",
    mobileNumber: "",
    yearLevel: "",
    courseProgram: "",
    schoolYear: "",
    studentType: "",
    previousSchool: "",
    mothersFullName: "",
    mothersOccupation: "",
    mothersContactNumber: "",
    mothersAddress: "",
    fathersFullName: "",
    fathersOccupation: "",
    fathersContactNumber: "",
    fathersAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

  
    if (step !== 3) return;

    
    if (!validateStep()) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/registration-status");
    } catch (err) {
      console.error("Signup error:", err);
      setError("Cannot connect to server");
    } finally {
      setLoading(false);
    }
  };

  const validateStep = () => {
    setError("");

   
    if (step === 1) {
      const required = [
        "firstName",
        "lastName",
        "gender",
        "dateOfBirth",
        "age",
        "placeOfBirth",
        "nationality",
        "religion",
        "civilStatus",
      ];

      const missing = required.find((f) => !form[f] || form[f].trim() === "");

      if (missing) {
        setError("Please complete all Personal Information fields");
        return false;
      }
    }

  
    if (step === 2) {
      const required = [
        "mothersFullName",
        "mothersOccupation",
        "mothersContactNumber",
        "mothersAddress",
        "fathersFullName",
        "fathersOccupation",
        "fathersContactNumber",
        "fathersAddress",
      ];

      const missing = required.find((f) => !form[f] || form[f].trim() === "");

      if (missing) {
        setError("Please complete Guardian Information");
        return false;
      }
    }

    
    if (step === 3) {
      const required = [
        "address",
        "emailAddress",
        "mobileNumber",
        "yearLevel",
        "courseProgram",
        "schoolYear",
        "studentType",
      ];

      const missing = required.find((f) => !form[f] || form[f].trim() === "");

      if (missing) {
        setError("Please complete Academic & Contact Information");
        return false;
      }
    }

    return true;
  };

  const title =
    step === 1
      ? "Personal Information"
      : step === 2
        ? "Guardian Information"
        : "Academic & Contact Information";

  return (
    <main className="min-h-screen flex relative">
      {/* KEEP LOGO */}
      <div className="absolute top-4 left-4 z-50">
        <Link href="/">
          <img src="/STIERA.png" className="w-30 h-20 object-contain" />
        </Link>
      </div>

      <div className="hidden md:flex w-1/2 flex-col justify-start pt-20 px-12 bg-linear-to-b from-[#0a0f2c] to-[#111a3a] text-white">
        <h2 className="mt-6 text-5xl font-semibold leading-relaxed">
          Smart Training & Interactive Educational Resource Academy
        </h2>
        <p className="mt-3 text-gray-400">
          — Simple learning platform for everyone.
        </p>

        <div className="mt-30 grid grid-cols-2 gap-4">
          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h3 className="text-2xl text-purple-400 font-bold">10K+</h3>
            <p className="text-sm text-gray-400">Students</p>
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h3 className="text-2xl text-purple-400 font-bold">500+</h3>
            <p className="text-sm text-gray-400">Courses</p>
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h3 className="text-2xl text-purple-400 font-bold">95%</h3>
            <p className="text-sm text-gray-400">Success Rate</p>
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h3 className="text-2xl text-purple-400 font-bold">24/7</h3>
            <p className="text-sm text-gray-400">Support</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-semibold text-center text-purple-500">
            {title}
          </h2>

          {error && (
            <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
          )}

          {step === 1 && <Step1 form={form} handleChange={handleChange} />}
          {step === 2 && <Step2 form={form} handleChange={handleChange} />}
          {step === 3 && <Step3 form={form} handleChange={handleChange} />}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Back
              </button>
            )}

            {step < 3 && (
              <button
                type="button"
                onClick={() => {
                  if (validateStep()) {
                    setStep((prev) => prev + 1);
                  }
                }}
                className="ml-auto px-4 py-2 bg-purple-600 text-white rounded-lg"
              >
                Next
              </button>
            )}

            {step === 3 && (
              <button
                type="submit"
                disabled={loading}
                className="ml-auto px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                {loading ? "Creating..." : "Submit"}
              </button>
            )}
          </div>

          <p className="text-center text-gray-600 mt-6">
            Already Registered?{" "}
            <Link href="/login" className="text-purple-600 font-semibold">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

import Link from "next/link";
export default function Home() {
  const stats = [
    { value: "10+", label: "PRIORITY PAGES" },
    { value: "50+", label: "FEATURES" },
    { value: "3", label: "USER ROLES" },
    { value: "5", label: "PORTALS" },
  ];
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center text-white bg-linear-to-b from-[#0a0f2c] to-[#111a3a] px-4 relative">
      <div className="absolute top-5 right-5 flex gap-4">
        <Link
          className="bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200 transition text-sm"
          href="/login"
        >
          Login
        </Link>
        <Link
          className="bg-purple-600 px-5 py-2 rounded-md hover:bg-purple-700 transition text-sm"
          href="/sign-up"
        >
          Sign up
        </Link>
      </div>
      <p className="text-xs tracking-widest border border-blue-400 text-blue-300 px-4 py-1 rounded-full">
        Digital Learning Platform v1.0
      </p>
      <h1 className="mt-6 text-6xl md:text-8xl font-extrabold text-gray-200">
        STIERA
      </h1>
      <p className="mt-3 text-sm md:text-base text-gray-400 tracking-wide">
        SMART TRAINING & INTERACTIVE EDUCATIONAL RESOURCE ACADEMY
      </p>
      <div className="w-20 h-1 bg-purple-500 my-6 rounded" />
      <h2 className="text-2xl md:text-4xl font-semibold">
        Learning Management System
      </h2>
      <p className="text-gray-400 mt-2 text-sm">
        College Project System • Academic Year 2025–2026
      </p>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white/5 border border-white/10 rounded-xl p-6 w-full md:w-36 backdrop-blur-md"
          >
            <h3 className="text-3xl font-bold text-purple-400">{s.value}</h3>
            <p className="text-xs text-gray-400 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-xs text-gray-500">
        Milestones • Role-Based LMS Portal Wireframe System (Student, Teacher &
        Admin)
      </p>
    </main>
  );
}

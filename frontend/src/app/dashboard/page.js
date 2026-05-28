/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Home,
  BookOpen,
  ClipboardList,
  CalendarDays,
  FileText,
  Users,
  MessageCircle,
  Phone,
  Video,
  Bookmark,
  Settings,
  HelpCircle,
  Bell,
  Search,
  Plus,
  Sparkles,
  Clock3,
  Trophy,
  ChevronRight,
  MoreHorizontal,
  Heart,
  MessageSquare,
  Share2,
  Send,
  Moon,
  Sun,
} from "lucide-react";
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("news");
  const [darkMode, setDarkMode] = useState(true);
  const sidebar = [
    { key: "news", label: "News Feed", icon: Home },
    { key: "courses", label: "Courses", icon: BookOpen },
    { key: "assignments", label: "Assignments", icon: ClipboardList },
    { key: "calendar", label: "Calendar", icon: CalendarDays },
    { key: "exams", label: "Exams", icon: FileText },
    { key: "resources", label: "Resources", icon: FileText },
    { key: "groups", label: "Groups", icon: Users },
    { key: "participants", label: "Participants", icon: Users },
  ];
  const communication = [
    {
      key: "messages",
      label: "Messages",
      icon: MessageCircle,
      badge: 3,
    },
    {
      key: "calls",
      label: "Calls",
      icon: Phone,
    },
    {
      key: "meetings",
      label: "Meetings",
      icon: Video,
    },
    {
      key: "ai",
      label: "ChatSM AI",
      icon: Sparkles,
      new: true,
    },
  ];
  const stats = [
    {
      title: "Enrolled Courses",
      value: "12",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Assignments Due",
      value: "8",
      subtitle: "2 overdue",
      icon: ClipboardList,
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Upcoming Meetings",
      value: "4",
      icon: Trophy,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Overall Progress",
      value: "82%",
      icon: Clock3,
      color: "from-orange-400 to-amber-500",
    },
  ];
  const courses = [
    {
      title: "UI/UX Design Fundamentals",
      progress: 65,
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Web Development Bootcamp",
      progress: 40,
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Data Structures & Algorithms",
      progress: 75,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Digital Marketing Strategy",
      progress: 55,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  const meetings = [
    {
      title: "UI/UX Design Review",
      time: "Today, 10:00 AM",
    },
    {
      title: "Web Dev Standup",
      time: "Tomorrow, 11:00 AM",
    },
    {
      title: "Marketing Strategy",
      time: "May 18, 02:00 PM",
    },
  ];
  const contacts = [
    {
      name: "Terence B. Suficiencia",
      status: "Online",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      online: true,
    },
    {
      name: "Kevin Deala",
      status: "In a meeting",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      online: true,
    },
    {
      name: "Lennerthan Garcia",
      status: "Online",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      online: true,
    },
    {
      name: "Lyle Lorenz Milagrosa",
      status: "Offline",
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
      online: false,
    },
  ];
  return (
    <div
      className={`min-h-screen flex overflow-hidden transition-all duration-300 ${
        darkMode ? "bg-[#050816] text-white" : "bg-[#f4f7fb] text-[#111827]"
      }`}
    >
      <aside
        className={`w-[280px] hidden lg:flex flex-col justify-between border-r ${
          darkMode ? "bg-[#071120] border-white/5" : "bg-white border-slate-200"
        }`}
      >
        <div>
          <div className="flex items-center gap-3 px-3 pt-5 pb-2">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/STIERA.png"
                alt="STIERA Logo"
                className="w-30 h-auto object-contain"
              />
            </Link>
          </div>

          <div className="px-4 -mt-5">
            <div className="space-y-1">
              {sidebar.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key)}
                    className={`flex items-center gap-4 w-full px-4 py-3 rounded-2xl transition-all duration-300 ${
                      activeTab === item.key
                        ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg shadow-blue-500/20"
                        : darkMode
                          ? "hover:bg-white/5 text-slate-300"
                          : "hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div
              className={`my-6 border-t ${
                darkMode ? "border-white/5" : "border-slate-200"
              }`}
            />

            <div className="space-y-1">
              {communication.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.key}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-2xl transition-all duration-300 ${
                      darkMode
                        ? "hover:bg-white/5 text-slate-300"
                        : "hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Icon size={18} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="w-5 h-5 rounded-full bg-red-500 text-[10px] flex items-center justify-center text-white">
                        {item.badge}
                      </span>
                    )}
                    {item.new && (
                      <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div
              className={`my-6 border-t ${
                darkMode ? "border-white/5" : "border-slate-200"
              }`}
            />
            <div className="space-y-1">
              {[
                { label: "Saved", icon: Bookmark },
                { label: "Bookmarks", icon: Bookmark },
                { label: "Settings", icon: Settings },
                { label: "Help & Support", icon: HelpCircle },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={`flex items-center gap-4 w-full px-4 py-3 rounded-2xl transition-all ${
                      darkMode
                        ? "hover:bg-white/5 text-slate-300"
                        : "hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-5">
          <div
            className={`rounded-3xl p-4 ${
              darkMode
                ? "bg-white/[0.03] border border-white/5"
                : "bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <div>
                <h4 className="font-semibold text-sm">Terence Suficiencia</h4>
                <p className="text-xs text-slate-400">Student</p>
              </div>
            </div>
            <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 rounded-2xl text-sm font-medium hover:opacity-90 transition">
              Switch to Instructor
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex">
        <div className="flex-1 overflow-y-auto">
          <div
            className={`sticky top-0 z-50 px-8 py-5 backdrop-blur-xl border-b ${
              darkMode
                ? "bg-[#050816]/80 border-white/5"
                : "bg-white/80 border-slate-200"
            }`}
          >
            <div className="flex items-center justify-between gap-5">
              <div className="relative w-full max-w-xl">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  placeholder="Search STIERA..."
                  className={`w-full h-12 pl-12 pr-5 rounded-2xl border outline-none transition-all ${
                    darkMode
                      ? "bg-white/5 border-white/10 focus:border-blue-500/40"
                      : "bg-slate-100 border-slate-200 focus:border-blue-400"
                  }`}
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition ${
                    darkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-white border-slate-200"
                  }`}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  className={`relative w-11 h-11 rounded-2xl border flex items-center justify-center transition ${
                    darkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <MessageCircle size={18} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
                <button
                  className={`relative w-11 h-11 rounded-2xl border flex items-center justify-center transition ${
                    darkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <Bell size={18} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                    2
                  </span>
                </button>
                <img
                  src="TBS.jpg"
                  alt="Avatar"
                  className="w-11 h-11 rounded-full object-cover border-2 border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div>
              <h1 className="text-4xl font-bold">Good day, Terence! 👋</h1>
              <p className="text-slate-400 mt-2">
                Let’s continue learning today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`rounded-3xl p-5 border transition-all hover:scale-[1.02] ${
                      darkMode
                        ? "bg-white/[0.03] border-white/10"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                      >
                        <Icon size={20} />
                      </div>
                      <span className="text-3xl font-bold">{item.value}</span>
                    </div>
                    <div className="mt-5">
                      <p className="text-sm font-medium">{item.title}</p>
                      {item.subtitle && (
                        <p className="text-xs text-red-400 mt-1">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold">Continue Learning</h2>
                <button className="text-blue-400 text-sm flex items-center gap-1">
                  View All <ChevronRight size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {courses.map((course) => (
                  <div
                    key={course.title}
                    className={`rounded-3xl overflow-hidden border transition-all hover:-translate-y-1 ${
                      darkMode
                        ? "bg-white/[0.03] border-white/10"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-36 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-semibold text-sm leading-relaxed">
                        {course.title}
                      </h3>
                      <div className="mt-4">
                        <div
                          className={`h-2 rounded-full overflow-hidden ${
                            darkMode ? "bg-white/10" : "bg-slate-200"
                          }`}
                        >
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                            style={{
                              width: `${course.progress}%`,
                            }}
                          />
                        </div>
                        <p className="text-xs text-slate-400 mt-2">
                          {course.progress}% Complete
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside
          className={`hidden xl:flex w-[350px] border-l flex-col ${
            darkMode
              ? "border-white/5 bg-[#071120]"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="p-5">
            <div
              className={`rounded-3xl p-5 border ${
                darkMode
                  ? "bg-white/[0.03] border-white/10"
                  : "bg-slate-100 border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-blue-400" />
                  <h3 className="font-semibold">AI Assistant</h3>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                    BETA
                  </span>
                </div>
                <button className="text-slate-400">✕</button>
              </div>
              <div className="mt-5">
                <h4 className="font-medium">Hi Terence! 👋</h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  How can I help you with your learning today?
                </p>
              </div>
              <div className="space-y-3 mt-5">
                {[
                  "Explain a topic",
                  "Summarize this page",
                  "Recommend a course",
                  "Help with assignment",
                ].map((item) => (
                  <button
                    key={item}
                    className={`w-full text-left px-4 py-3 rounded-2xl text-sm transition ${
                      darkMode
                        ? "bg-white/5 hover:bg-white/10"
                        : "bg-white hover:bg-slate-200"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="relative mt-5">
                <input
                  placeholder="Ask anything..."
                  className={`w-full h-12 rounded-2xl pl-5 pr-14 outline-none ${
                    darkMode ? "bg-white/5" : "bg-white"
                  }`}
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 flex items-center justify-center">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="px-5">
            <div
              className={`rounded-3xl p-5 border ${
                darkMode
                  ? "bg-white/[0.03] border-white/10"
                  : "bg-slate-100 border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold">Upcoming Meetings</h3>
                <button className="text-blue-400 text-sm">View Calendar</button>
              </div>
              <div className="space-y-4">
                {meetings.map((meeting) => (
                  <div
                    key={meeting.title}
                    className={`p-4 rounded-2xl ${
                      darkMode ? "bg-white/5" : "bg-white"
                    }`}
                  >
                    <h4 className="font-medium text-sm">{meeting.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {meeting.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-5 flex-1">
            <div
              className={`rounded-3xl p-5 border h-full ${
                darkMode
                  ? "bg-white/[0.03] border-white/10"
                  : "bg-slate-100 border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold">Contacts</h3>
                <button className="text-blue-400 text-sm">See all</button>
              </div>
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div
                    key={contact.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={contact.avatar}
                          alt=""
                          className="w-11 h-11 rounded-full object-cover"
                        />
                        <span
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 ${
                            darkMode ? "border-[#071120]" : "border-white"
                          } ${
                            contact.online ? "bg-green-400" : "bg-slate-500"
                          }`}
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">{contact.name}</h4>
                        <p className="text-xs text-slate-400">
                          {contact.status}
                        </p>
                      </div>
                    </div>
                    <button
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        darkMode ? "hover:bg-white/5" : "hover:bg-white"
                      }`}
                    >
                      <MessageCircle size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

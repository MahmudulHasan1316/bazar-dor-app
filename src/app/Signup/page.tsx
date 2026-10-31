"use client";

import Link from "next/link";

const SignUpPage = () => {
  const handleSubmit = async (event) => {};
  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center py-12 px-4 bg-linear-to-b from-teal-50/40 via-slate-50/50 to-indigo-50/40">
      <div className="card w-full max-w-md bg-green-100 backdrop-blur-xl shadow-xl shadow-indigo-500/5 border border-slate-200/90 p-8 rounded-3xl relative overflow-hidden">
        {/* Top subtle color strip */}
        {/* <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-tr from-[#05893E] via-indigo-500 to-violet-500"></div> */}

        {/* Brand & Header */}
        <div className="text-center mb-6 pt-2">
          {/* <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-teal-500/10 to-indigo-500/10 border border-green-200/80 text-[#05893E] flex items-center justify-center text-2xl mx-auto mb-3 shadow-2xs">
            📝
          </div> */}
          {/* <span className="inline-block text-[10px] font-black uppercase tracking-wider text-[#05893E] bg-teal-50 border border-green-200/80 px-2.5 py-0.5 rounded-full mb-1">
            নতুন সদস্য নিবন্ধন
          </span> */}
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            বিনা খরচে সাইনআপ করে সব বিস্তারিত দাম দেখুন
          </p>
        </div>

        {/* Sign Up Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label className="block font-bold text-[16px] text-slate-700">
              নাম
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                👤
              </span>
              <input
                name="name"
                type="text"
                placeholder="যেমন: মাহমুদুল হাসান"
                className="input input-bordered w-full pl-10 rounded-xl text-sm border-slate-200 bg-white focus:bg-white focus:border-[#05893E] focus:outline-hidden"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block font-bold text-[16px] text-slate-700">
              ইমেইল
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                ✉️
              </span>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full pl-10 rounded-xl text-sm border-slate-200 bg-white focus:bg-white focus:border-[#05893E] focus:outline-hidden"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block font-bold text-[16px] text-slate-700">
              পাসওয়ার্ড
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                🔒
              </span>
              <input
                name="password"
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড দিন"
                className="input input-bordered w-full pl-10 rounded-xl text-sm border-slate-200 bg-white focus:bg-white focus:border-[#05893E] focus:outline-hidden"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block font-bold text-[16px] text-slate-700">
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                🔒
              </span>
              <input
                name="password"
                type="password"
                placeholder="আবার লিখুন"
                className="input input-bordered w-full pl-10 rounded-xl text-sm border-slate-200 bg-white focus:bg-white focus:border-[#05893E] focus:outline-hidden"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn bg-linear-to-r from-green-700 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white font-black w-full rounded-xl border-0 shadow-md text-[16px] mt-2 transition-all cursor-pointer"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        <div className="flex items-center gap-4 mt-3 mb-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">অথবা</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            // onClick={}
            type="submit"
            className="btn btn-outline border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-2 text-[16px]"
          >
            <span className="text-base">🌐</span>
            Google
          </button>

          <button
            type="submit"
            className="btn btn-outline border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-2 text-[16px]"
          >
            <span className="text-base">🐙</span>
            GitHub
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center text-xs text-slate-500 mt-6 border-t border-slate-100">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/Signin"
            className="text-[#05893E] hover:[#05893E] font-bold underline ml-1"
          >
            সাইন ইন করুন
          </Link>
        </p>
        <div>
          <Link
            href="/"
            className="flex items-center justify-center gap-4 text-green-400 hover:[#05893E] font-semibold pt-4"
          >
            <span>← হোম পেজে ফিরে যান</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

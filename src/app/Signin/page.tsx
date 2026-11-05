"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "http://localhost:3000/", // An optional URL to redirect to after the user signs up.
    });
    console.log(data);
    if (data) {
      router.push("/");
    }
  };
  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center py-12 px-4 bg-linear-to-b from-teal-50/40 via-slate-50/50 to-indigo-50/40">
      <div className="card w-full max-w-md">
        {/* Brand & Header */}
        <div className="text-center mb-6 pt-2">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            সাইন ইন
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            বিস্তারিত দাম, বাজার তূলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        {/* Login Form */}
        <div className="backdrop-blur-xl shadow-xl shadow-indigo-500/5 border border-slate-200/90 p-8 rounded-3xl relative overflow-hidden bg-green-100">
          <form onSubmit={handleSubmit} className=" space-y-4">
            <div className="space-y-1.5">
              <label className="block font-bold text-xs text-slate-700">
                ইমেইল
              </label>
              <div className="relative">
                {/* <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">✉️</span> */}
                <input
                  name="email"
                  type="email"
                  // defaultValue="you@example.com"
                  className="input input-bordered w-full pl-10 rounded-xl text-sm border-slate-200 bg-white focus:bg-white focus:border-teal-500 focus:outline-hidden"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block font-bold text-xs text-slate-700">
                  পাসওয়ার্ড
                </label>
              </div>
              <div className="relative">
                {/* <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔒</span> */}
                <input
                  name="password"
                  type="password"
                  // defaultValue="••••••••••••"
                  className="input input-bordered w-full pl-10 rounded-xl text-sm border-slate-200 bg-white focus:bg-white focus:border-teal-500 focus:outline-hidden"
                  placeholder="কমপক্ষে ৮ অক্ষর দিন"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn bg-[#05893E] text-white font-black w-full rounded-xl border-0 shadow-md text-sm mt-2 transition-all cursor-pointer"
            >
              অ্যাকাউন্টে প্রবেশ করুন →
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 mt-3 mb-3">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">অথবা</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              // onClick={handleGoogleSignIn}
              className="btn btn-outline border-slate-200 hover:bg-slate-50 bg-white text-slate-700 font-bold rounded-xl flex items-center justify-center gap-2 text-xs"
            >
              <span className="text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-5 h-5"
                >
                  <path
                    fill="#4285F4"
                    d="M43.6 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.7c3.9-3.6 6-8.9 6-15.3z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.7-5.1c-1.8 1.2-4 1.9-6.8 1.9-5.2 0-9.5-3.5-11.1-8.2H6v5.2A20 20 0 0 0 24 44z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M12.9 27.8a12 12 0 0 1 0-7.6V15H6a20 20 0 0 0 0 18z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 12.1c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6.1 29.5 4 24 4A20 20 0 0 0 6 15l6.9 5.2c1.6-4.7 5.9-8.1 11.1-8.1z"
                  />
                </svg>
              </span>
              Google
            </button>

            <button
              type="button"
              className="btn btn-outline border-slate-200 hover:bg-slate-50 bg-white text-slate-700 font-bold rounded-xl flex items-center justify-center gap-2 text-xs"
            >
              <span className="text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </span>
              GitHub
            </button>
          </div>

          {/* Footer Link */}
          <p className="text-center text-xs text-slate-500 mt-6 pt-4 border-t border-slate-100">
            নতুন সদস্য?{" "}
            <Link
              href="/Signup"
              className="text-teal-600 hover:text-teal-700 font-bold underline ml-1"
            >
              এখানে সাইন আপ করুন
            </Link>
          </p>
        </div>
      </div>

      <div>
        <Link
          href="/"
          className="flex items-center justify-center gap-4 text-green-400 hover:[#05893E] font-semibold pt-5"
        >
          <span>← হোম পেজে ফিরে যান</span>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;

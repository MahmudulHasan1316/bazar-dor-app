// #region Old Code
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// type TCategory = {
//   name: string;
//   slug: string;
//   emoji?: string;
// };

// export default function Navbar() {
//   const pathname = usePathname();

//   const [categories, setCategories] = useState<TCategory[]>([]);
//   const [formattedDate, setFormattedDate] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);

//   // বাংলা ডাইনামিক তারিখ
//   useEffect(() => {
//     const updateDate = () => {
//       setFormattedDate(
//         new Intl.DateTimeFormat("bn-BD", {
//           weekday: "long",
//           day: "numeric",
//           month: "long",
//           year: "numeric",
//         }).format(new Date()),
//       );
//     };

//     updateDate();
//   }, []);

//   // API থেকে ক্যাটাগরি লোড
//   useEffect(() => {
//     const controller = new AbortController();

//     async function fetchCategories() {
//       try {
//         const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//         if (!apiUrl) return;

//         const response = await fetch(`${apiUrl}/categories`, {
//           signal: controller.signal,
//         });

//         if (!response.ok) {
//           throw new Error("Failed to load categories");
//         }

//         const data = await response.json();

//         setCategories(data?.data ?? []);
//       } catch (error) {
//         if (error instanceof Error && error.name !== "AbortError") {
//           console.error("Category loading error:", error);
//         }
//       }
//     }

//     fetchCategories();

//     return () => controller.abort();
//   }, []);

//   const navItems = [
//     { name: "সকল পণ্য", href: "/", emoji: "🏠" },
//     ...categories.map((category) => ({
//       name: category.name,
//       href: `/category/${category.slug}`,
//       emoji: category.emoji || "📦",
//     })),
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
//       {/* Main Navbar */}
//       <div className="mx-auto max-w-6xl px-3 sm:px-4">
//         <div className="flex min-h-[68px] items-center justify-between gap-3 py-2 sm:min-h-[76px] sm:gap-5">
//           {/* Logo + Brand */}
//           <Link
//             href="/"
//             className="flex min-w-0 items-center gap-2 sm:gap-3"
//             aria-label="বাজার দর হোম"
//           >
//             {/* Logo */}
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 shadow-sm sm:h-12 sm:w-12">
//               <span className="text-2xl sm:text-3xl" aria-hidden="true">
//                 🥬
//               </span>
//             </div>

//             {/* Brand information */}
//             <div className="min-w-0">
//               <h1 className="truncate text-base font-extrabold leading-tight tracking-tight text-slate-900 sm:text-xl">
//                 বাজার দর
//               </h1>

//               <p className="mt-1 text-[9px] font-medium leading-relaxed text-slate-500 sm:text-[11px]">
//                 {formattedDate || "বাংলাদেশের বাজারদর"}
//               </p>
//             </div>
//           </Link>

//           {/* Authentication Buttons */}
//           <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
//             <Link
//               href="/signin"
//               className="inline-flex min-h-8 items-center justify-center rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] font-bold text-slate-700 transition hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 sm:min-h-10 sm:px-4 sm:text-sm"
//             >
//               সাইন ইন
//             </Link>

//             <Link
//               href="/signup"
//               className="inline-flex min-h-8 items-center justify-center rounded-lg bg-emerald-600 px-2.5 py-1.5 text-[11px] font-bold text-white shadow-sm transition hover:bg-emerald-700 sm:min-h-10 sm:px-4 sm:text-sm"
//             >
//               সাইন আপ
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Category Navigation */}
//       <div className="border-t border-slate-100 bg-slate-50">
//         <div className="mx-auto max-w-6xl px-2 sm:px-4">
//           <nav
//             aria-label="পণ্যের ক্যাটাগরি"
//             className="flex items-center gap-1 overflow-x-auto py-2 text-[11px] font-semibold sm:gap-2 sm:text-xs"
//           >
//             {navItems.map((item) => {
//               const isActive =
//                 item.href === "/"
//                   ? pathname === "/"
//                   : pathname === item.href ||
//                     pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setMenuOpen(false)}
//                   className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 transition sm:px-3 sm:py-2 ${
//                     isActive
//                       ? "bg-emerald-600 text-white shadow-sm"
//                       : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
//                   }`}
//                 >
//                   <span aria-hidden="true">{item.emoji}</span>
//                   <span>{item.name}</span>
//                 </Link>
//               );
//             })}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }
// #endregion

"use client";

// import { authClient } from "@/lib/auth-client";
// import { TCategory } from '@/types/category';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TCategory } from "@/Types/category";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState<TCategory[]>([]);
  const pathname = usePathname();

  const router = useRouter();
  // const { data: session } = authClient.useSession();
  //   const [formattedDate, setFormattedDate] = useState("")

  //   const user = session?.user;
  const user = false;


  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/bazardor/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Category fetch error:", error);
      });
  }, []);

  const formattedDate = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleSignOut = async () => {
    // await authClient.signOut();
    setDropdownOpen(false);
    router.push("/");
  };

  return (
    <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-xs">
      {/* Top Row: Logo + Search + Auth */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand & Live Market Indicator */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="">
            <div className="w-10 h-10 rounded-2xl bg-[#05893E] border border-[#05893E] flex items-center justify-center p-1.5 shadow-xs group-hover:scale-105 transition-all">
              <Image
                className="brightness-0 invert"
                src="/logo-icon.png"
                alt="logo image"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                বাজার <span className="text-[#05893E]">দর</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              {formattedDate}
            </p>
          </div>
        </Link>

        {/* Right Auth / Profile Menu */}
        <div className="flex items-center gap-3 shrink-0">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2.5 p-1 pr-3 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer"
                id="user-menu-button"
              >
                <div className="avatar">
                  <div className="w-8 h-8 rounded-full ring-2 ring-[#05893E] ring-offset-1 overflow-hidden bg-linear-to-tr from-bg-linear-to-tr to-[#05893E] flex items-center justify-center text-white font-black text-xs shadow-xs">
                    <Image
                      className="brightness-0 invert w-10 h-10 rounded-full object-cover"
                      src={user?.image ?? "/profile-image.png"}
                      alt="User-Profile-Image"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    {user?.name}
                  </span>
                  <span className="text-[10px] text-[#05893E] font-semibold">
                    ভেরিফাইড ইউজার ▼
                  </span>
                </div>
              </button>

              {/* Dropdown Menu (Figma Screen 7) */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white border border-slate-200 shadow-xl rounded-2xl py-2 z-50 text-xs">
                  <div className="px-4 py-2.5 border-b border-slate-100 bg-slate-50/50">
                    <p className="font-bold text-slate-900 truncate">
                      {user?.name}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate">
                      {user?.email}
                    </p>
                  </div>
                  <Link
                    href="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 hover:bg-teal-50 text-slate-700 hover:text-[#05893E] font-semibold transition-colors"
                  >
                    <span>👤</span> প্রোফাইল ড্যাশবোর্ড
                  </Link>
                  <Link
                    href="/profile/update"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 hover:bg-teal-50 text-slate-700 hover:text-[#05893E] font-semibold transition-colors"
                  >
                    <span>✏️</span> তথ্য পরিবর্তন করুন
                  </Link>
                  <div className="border-t border-slate-100 my-1"></div>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-rose-600 hover:bg-rose-50 font-semibold transition-colors cursor-pointer"
                  >
                    <span>🚪</span> সাইন আউট
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/Signin">
                <button className="btn btn-ghost btn-sm text-slate-700 hover:text-teal-700 font-bold rounded-xl px-4 py-6 text-[18px]">
                  সাইন ইন
                </button>
              </Link>
              <Link href="/Signup">
                <button className="btn btn-sm bg-[#05893E] hover:bg-[#05893E] border-0 text-white font-bold px-4 py-6 rounded-xl shadow-xs text-[18px]">
                  সাইন আপ
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* 2nd Row: Category Pills  */}
      <div className="border-t border-slate-100 bg-slate-50/50">
        <nav className="max-w-6xl mx-auto px-4 flex items-center gap-1.5 overflow-x-auto py-2 text-xs font-semibold scrollbar-none">
          {categories.map((cat) => {
            const isActive = pathname === `/category/${cat.slug}`;

            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all text-[16px] flex items-center gap-2 ${
                  isActive
                    ? "bg-[#05893E] text-white shadow-xs font-bold"
                    : "text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 font-semibold text-[16px]"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.nameBn}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

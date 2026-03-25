'use client';

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, ChevronDown } from "lucide-react";
import { getProtected, postProtected } from "../network/apiService";
import { getData, removeItem } from "../utils/localStorageHandler";
import { useLoader } from "../context/LoaderContext";

const AuthHeader = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const { showLoader, hideLoader } = useLoader();

  // Always false on first render (SSR + hydration) so HTML matches; sync from storage after mount.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const syncLoggedIn = useCallback(() => {
    setIsLoggedIn(!!getData("accessToken"));
  }, []);

  useEffect(() => {
    syncLoggedIn();
    window.addEventListener("localStorageChanged", syncLoggedIn);
    window.addEventListener("storage", syncLoggedIn);
    return () => {
      window.removeEventListener("localStorageChanged", syncLoggedIn);
      window.removeEventListener("storage", syncLoggedIn);
    };
  }, [syncLoggedIn]);

  useEffect(() => {
    syncLoggedIn();
  }, [pathname, syncLoggedIn]);

  const fetchUser = useCallback(async () => {
    try {
      const data = await getProtected("accounts/me/");
      if (data?.success && data.user) {
        setUser(data.user);
      }
    } catch {
      // silently fail — user will see header without name
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUser();
    }
  }, [isLoggedIn, fetchUser]);

  // Hide on scroll down, show on scroll up — matching main Header
  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const scrollDifference = Math.abs(currentScrollY - lastScrollY);
        const direction = currentScrollY > lastScrollY ? "down" : "up";

        if (currentScrollY <= 50) {
          setIsVisible(true);
        } else if (direction === "down" && currentScrollY > 150 && scrollDifference > 8) {
          setIsVisible(false);
          setDropdownOpen(false);
        } else if (direction === "up" && scrollDifference > 5) {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    setDropdownOpen(false);
    showLoader("Signing out…");
    
    try {
      const accessToken = getData("accessToken");
      if (accessToken) {
        await postProtected("accounts/logout/", {
          access: accessToken,
        });
      }
    } catch (error) {
      console.error("Logout API error:", error);
    } finally {
      removeItem("accessToken");
      removeItem("refreshToken");
      window.dispatchEvent(new Event("localStorageChanged"));
      setTimeout(() => {
        router.replace("/login");
        setTimeout(() => hideLoader(), 600);
      }, 1200);
    }
  };

  if (!isLoggedIn) return null;

  const initials = user
    ? `${user.first_name?.[0] || ""}${user.last_name?.[0] || ""}`.toUpperCase() || "U"
    : "U";

  const displayName = user
    ? [user.first_name, user.last_name].filter(Boolean).join(" ") || user.email
    : "Account";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:px-6 transition-all duration-300 ease-out transform ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full max-w-7xl bg-white/95 border border-gray-200/50 rounded-full px-4 sm:px-6 shadow-lg">
        <div className="flex justify-between items-center h-14 sm:h-14 md:h-16 lg:h-16">
          {/* Left — Personal Dashboard label */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-[#719334]" />
            <span className="text-sm sm:text-base font-semibold text-gray-800 whitespace-nowrap">
              Personal Dashboard
            </span>
          </div>

          {/* Right — User avatar + dropdown */}
          <div className="relative flex-shrink-0" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 sm:gap-2.5 pl-2 pr-2.5 py-1.5 rounded-full hover:bg-gray-100/70 transition-all duration-300 cursor-pointer"
            >
              {/* Avatar */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] flex items-center justify-center shadow-sm">
                <span className="text-xs font-semibold text-white leading-none">
                  {initials}
                </span>
              </div>
              {/* Name — desktop */}
              <span className="hidden sm:block text-sm font-medium text-gray-700 max-w-[160px] truncate">
                {displayName}
              </span>
              <ChevronDown
                className={`hidden sm:block w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden z-50"
                >
                  {/* User info */}
                  <div className="px-4 py-3.5 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#719334] to-[#5a7529] flex items-center justify-center shadow-sm shrink-0">
                        <span className="text-sm font-semibold text-white leading-none">
                          {initials}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {displayName}
                        </p>
                        {user?.email && (
                          <p className="text-xs text-gray-500 truncate">
                            {user.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Logout */}
                  <div className="py-1.5">
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-all duration-300 cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign out
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AuthHeader;

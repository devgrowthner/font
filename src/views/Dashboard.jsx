'use client';

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getData } from "../utils/localStorageHandler";
import { useLoader } from "../context/LoaderContext";

const Dashboard = () => {
  const router = useRouter();
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    const token = getData("accessToken");
    if (!token) {
      router.push("/login", { replace: true });
      return;
    }

    showLoader("Preparing your dashboard…");
    const timer = setTimeout(() => hideLoader(), 1800);
    return () => clearTimeout(timer);
  }, [router, showLoader, hideLoader]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f0fdf4] via-[#fefdfb] to-[#ecfdf5] pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4">
        <div className="rounded-2xl border border-gray-200/70 bg-white/95 backdrop-blur-xl shadow-2xl px-8 py-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Dashboard
          </h1>
          <p className="text-sm sm:text-base text-gray-700">
            The client dashboard is{" "}
            <span className="font-semibold text-brand-green">
              currently in development
            </span>
            . Once it&apos;s ready, you&apos;ll see your AI performance
            metrics, reports, and insights here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

"use client";
import NProgress from "nprogress";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import "nprogress/nprogress.css"; // Import CSS của NProgress

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams(); // Theo dõi params

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => NProgress.done(), 500); // Loading giả lập

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname, searchParams.toString()]); // Trigger khi pathname hoặc params thay đổi

  return null;
}

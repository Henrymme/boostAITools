"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const pathName = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 300);

  return (
    <Suspense>
      <div className="relative flex items-center border border-[#00ADB5] bg-[#1A1C2C] rounded-lg p-3 shadow-md w-full max-w-[600px] mx-auto">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full p-2 bg-transparent text-white outline-none placeholder-gray-400"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <button className="ml-2 p-2 bg-[#00ADB5] text-white rounded-lg hover:bg-[#008A90] transition">
          🔍
        </button>
      </div>
    </Suspense>
  );
}
"use client";

import { mainCategories } from "@/lib/data";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, useTransition } from "react";

export default function CategoryFilter() {
  const [isPending, startTransition] = useTransition();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (category: string) => {
    startTransition(() => {
      let updatedCategories = [...selectedCategories];

      if (updatedCategories.includes(category)) {
        updatedCategories = updatedCategories.filter((c) => c !== category);
      } else {
        updatedCategories.push(category);
      }

      const params = new URLSearchParams(searchParams.toString());
      if (updatedCategories.length > 0) {
        params.set("categories", updatedCategories.map(encodeURIComponent).join(","));
      } else {
        params.delete("categories");
      }

      router.replace(`?${params.toString()}`);
      setSelectedCategories(updatedCategories);
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4 max-w-[90%] mx-auto overflow-x-auto mt-7">
      {mainCategories?.map((category) => {
        const selectedCategories = searchParams.get("categories")?.split(",").map(decodeURIComponent) || [];
        const isSelected = selectedCategories.includes(category);
        return (
          <Suspense key={1}>
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-4 py-2 rounded-full border transition-colors duration-200 whitespace-nowrap min-w-0 
              ${isSelected ? "border-[#00ADB5] bg-[#00ADB5] text-white shadow-md" : 
              "border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:border-gray-500"}`}
              disabled={isPending}
            >
              {category}
            </button>
          </Suspense>
        );
      })}
    </div>
  );
}

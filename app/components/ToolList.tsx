// components/ToolList.tsx
import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { ToolsCard } from "@/lib/interface";
import { fetchFilterToolsData } from "@/lib/data";

export default async function ToolList({search, categories}: {search:string, categories: string[]}) {
  const tools: ToolsCard[] = await fetchFilterToolsData({search, categories})
  return (
    <div className="container mx-auto px-4 lg:px-8 mb-8">
  {tools?.length > 0 ? (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {tools.map((tool) => (
        <div
        key={tool._id}
        className="bg-[gray-800] shadow-lg rounded-2xl p-5 border border-gray-700 hover:shadow-2xl transition-all flex flex-col text-sm hover:border-[#00ADB5]"
      >
        {/* Image Section */}
        <Link href={`/tools/${tool._id}`} className="relative w-full aspect-square bg-[#111827] dark:bg-gray-800 rounded-lg overflow-hidden">
          <Image
            src={tool.imageUrl}
            alt={tool.name}
            width={225}
            height={225}
            className="w-full h-full object-contain"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[#005F63] overflow-hidden w-full h-0 group-hover:h-full transition-all duration-500 ease-in-out flex items-center justify-center">
            <span className="text-[#FFDB70] text-lg font-bold border-opacity-50">Explore</span>
          </div>
        </Link>
  
        {/* Title & External Link */}
        <div className="mt-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-[#EEEEEE] truncate">
            {tool.name}
          </h2>
          <Link href={`/tools/${tool._id}`} className="text-[#A3B3CC] hover:text-[#00ADB5] transition-colors">
            <FiExternalLink className="text-xl" />
          </Link>
        </div>
  
        {/* Description */}
        <p className="text-[#C9D1D9] text-sm mt-2 line-clamp-2 leading-relaxed">
          {tool.description}
        </p>
  
        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tool.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-sm font-medium text-white bg-[#14B8A6] border border-[#00ADB5] rounded-full shadow-md hover:bg-[#008A90] transition hover:cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </div>
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center w-full min-h-[400px] text-center">
      <Image
        src="/no-results.png"
        alt="No results"
        width={300}
        height={300}
        className="w-full max-w-[250px] object-contain"
      />
      <p className="text-gray-500 dark:text-gray-300 mt-3 text-sm font-semibold">
        No results found
      </p>
      <p className="text-[#A3B3CC] text-xs">Try searching for something else.</p>
    </div>
  )}
</div>
  );
}

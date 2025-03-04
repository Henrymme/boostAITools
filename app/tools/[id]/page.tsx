
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { ToolsCard } from "@/lib/interface";
import { fetchToolsData } from "@/lib/data";
import Image from "next/image";

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 text-blue-600">
      {[...Array(5)].map((_, index) => (
        <Star key={index} fill={index < rating ? "currentColor" : "none"} stroke="currentColor" className="w-5 h-5" />
      ))}
      <span className="ml-1 text-gray-600">{rating}</span>
    </div>
  );
};

export default async function ToolDetail(
  props: {
    params: Promise<{id: string}>
  }
) {
  const tools: ToolsCard[] = await fetchToolsData()
  const params = await props.params;
  const tool = tools?.find((t) => t._id === params.id);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#0F172A] text-[#E2E8F0] rounded-lg shadow-lg w-full h-screen">
      <Breadcrumbs toolName={tool?.name} />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img src={tool?.imageUrl} alt={tool?.title} className="w-full max-w-[250px] h-auto rounded-lg shadow-md border border-gray-700" />
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">{tool?.title}</h1>
          <p className="text-gray-400">{tool?.description}</p>
          <div className="flex items-center gap-2 mt-2 text-gray-500">
            <span>Visits: {tool?._id}</span>
            <span className="ml-4">Collection Time: 2025-02-13</span>
            <span className="ml-4">Pricing Mode: Free Trial Paid</span>
          </div>
          <div className="mt-3 text-cyan-400">
            <Rating rating={3.4} />
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-4 justify-center md:justify-start">
        <Link href={tool?.link} target="_blank">
          <Button className="bg-blue-600 text-white hover:bg-blue-500">Visit Site</Button>
        </Link>
      </div>
    </div>
  );
}

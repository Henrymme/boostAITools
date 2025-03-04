import Link from "next/link";

interface BreadcrumbsProps {
  toolName: string;
}

export function Breadcrumbs({ toolName }: BreadcrumbsProps) {
  return (
    <nav className="text-sm text-gray-500 mb-4">
      <Link href="/" className="hover:text-blue-600">Home</Link> &gt;
      <span className="mx-2">AI Tools</span> &gt;
      <span className="text-gray-700 font-semibold"> {toolName}</span>
    </nav>
  );
}

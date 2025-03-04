import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import ToolList from "./components/ToolList";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    categories?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = (await searchParams?.query) || "";
  const categories =
    searchParams?.categories?.split(",").map(decodeURIComponent) || [];
  return (
      <section className="flex flex-col items-center text-center bg-gray-900 min-h-screen">
        <div className="max-w-3xl mt-10">
          <h1 className="text-4xl font-bold text-gray-100">
            Discover AI Tools
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            Explore and find the best AI-powered tools for your needs.
          </p>
        </div>
        <CategoryFilter />
        <SearchBar placeholder="Search AI Tool..." />
        <ToolList search={search} categories={categories} />
      </section>
  );
}

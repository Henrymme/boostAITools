export interface ToolsCard {
    name:string;
    title: string;
    _id: string;
    imageUrl: string;
    description: string;
    tags: string[];
    priceMode: string;
    link: string;
}

export interface SearchBarProps {
    query: string;
    setQuery: (query: string) => void;
    handleSearch: () => void;
  }
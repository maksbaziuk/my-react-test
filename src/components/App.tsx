import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import SearchForm from "./SearchForm";
import ArticleList from "./ArticleList";
import { fetchArticles } from "../services/articleService";

export default function App() {
  const [topic, setTopic] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["articles", topic, currentPage],
    queryFn: () => fetchArticles(topic, currentPage),
    enabled: topic !== "",
    placeholderData: keepPreviousData,
  });

  const totalPages = data?.nbPages ?? 0;

  const handleSearch = async (newTopic: string) => {
    setTopic(newTopic);
    setCurrentPage(1);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      <p>
        Current page {currentPage} | Total pages {totalPages}
      </p>
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
      {isLoading && <p>Loading data, please wait...</p>}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {data && data.hits.length > 0 && <ArticleList items={data.hits} />}
    </>
  );
}

import { useState } from "react";
import SearchBox from "./SearchBox";
import SortFilter from "./SortFilter";
import type { SortOption } from "./types";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("created");

  return (
    <>
      <SearchBox value={searchText} onSearch={setSearchText} />
      <p>Searching for: {searchText}</p>

      <SortFilter value={sortBy} onSelect={setSortBy} />
      <p>Sorting by: {sortBy}</p>
    </>
  );
}

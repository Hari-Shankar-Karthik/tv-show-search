import { useState } from "react";
import TVShowSearchForm from "./TVShowSearchForm";
import fetchTVShowData from "./fetchTVShowData";
import TVShowSearchResult from "./TVShowSearchResult";

export default function TVShowSearch() {
  const [searchResult, setSearchResult] = useState({
    searchType: null,
    matches: [],
    isLoading: false,
  });
  return (
    <div className="TVShowSearch">
      <div className="display-1 text-center mb-3">TV Show Search!!!</div>
      <TVShowSearchForm
        onSubmit={async (searchData) => {
          const { searchFor, searchKeyword } = searchData;
          setSearchResult((searchResult) => ({
            searchType: searchFor === "shows" ? "show" : "person",
            matches: [],
            isLoading: true,
          }));
          const response = await fetchTVShowData(searchFor, searchKeyword);
          setSearchResult((searchResult) => ({
            ...searchResult,
            matches: response,
            isLoading: false,
          }));
        }}
      />
      <TVShowSearchResult searchResult={searchResult} />
    </div>
  );
}

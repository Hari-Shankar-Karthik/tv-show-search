import TVShowSearchForm from "./TVShowSearchForm";

export default function TVShowSearch() {
  return (
    <div className="TVShowSearch">
      <div className="display-1 text-center mb-3">TV Show Search!!!</div>
      <TVShowSearchForm
        onSubmit={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
}

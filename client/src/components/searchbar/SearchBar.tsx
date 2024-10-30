import { useState } from "react"
import "./searchBar.scss"

const types: string[] = ["buy", "rent"]

type QueryState = {
  type: string
  location: string
  minPrice: number
  maxPrice: number
}

const SearchBar = () => {
  const [query, setQuery] = useState<QueryState>({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  })

  const switchType = (val: string) => {
    setQuery((prev) => ({ ...prev, type: val }))
  }

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="location"
          placeholder="City Location"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button type="submit">
          <img src="/search.png" alt="Search" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar

import React, { useState } from "react";
import { search } from "redux/actions/plot.action";
import { store } from "redux/store";

export function SearchBar () {
    const [searchTerm, setsearchTerm] = useState("");

    const handleSearchTerm = async (e) => {
        let value = e.target.value;
        setsearchTerm(value);
        
      };
      
    const maj = async () => {
        store.dispatch(await search(searchTerm))
    }

    maj()

    return (
        <div className="searchBar">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher"
          onChange={handleSearchTerm}
        />
      </div>
    )
}
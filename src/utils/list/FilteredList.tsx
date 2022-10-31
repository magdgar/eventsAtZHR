import React from "react";
import { useEffect, useState } from "react";

let MY_LIST = [];

function FilterList() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState({});
  const [filterlist, setFilterlist] = useState(MY_LIST);

  function onKeyUpHandler(e) {
    setSearch(e.target.value.toLowerCase());
  }

  function onSelectItem(e, item) {
    setSelected(item);
    setSearch("");
    clearFilter();
  }

  function clearFilter() {
    document.getElementById("searchFilter").value = "";
  }

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        MY_LIST = data;
      });
  }

  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, [""]);

  useEffect(() => {
    const filteredList = MY_LIST.filter((item) => {
      let all_str = `${item.id} ${item.title}`.toLowerCase();
      //return all_str.indexOf(search) > -1; // View All When Search Empty
      return all_str.indexOf(search) > -1 && search;
    });
    setFilterlist(filteredList);
  }, [search]);

  return (
    <div>
      <div className="mb-3">
        <h1>Filter List Example - FreakyJolly.com</h1>
        <label className="form-label">Filter List</label>
        <input
          id="searchFilter"
          type="text"
          className="form-control"
          defaultValue={search}
          placeholder="Enter ID or Name"
          onKeyUp={onKeyUpHandler}
        />
      </div>
      <div>
        <h6>
          Selected Item : {selected.id}) {selected.title}
        </h6>
      </div>
      <ul className="list-group">
        {filterlist.map((item, key) => (
          <li
            className="list-group-item"
            key={key}
            value={item.id}
            onClick={(e) => onSelectItem(e, item)}
          >
            {item.id}) {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterList;

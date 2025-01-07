import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useGetProductsQuery } from "../../app/services/productsApi";
import { debounce } from "../../utils/debounce";
import SearchBox from "../SearchBox";
import styles from "./Search.module.css";

export default function Search() {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(value);
  const { data = [] } = useGetProductsQuery({ title: debouncedValue });

  const debouncedSearch = useCallback(
    debounce((newValue) => {
      setDebouncedValue(newValue);
    }, 300), 
    []
  );

  const handleSearch = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    setDebouncedValue(newValue)
  };

  const clearSearch = () => {
    setValue('');
    setDebouncedValue('');
  };

  return (
    <form className={styles.form}>
      <div className={styles.box}>
        <input className={styles.input}
          type="text"
          name="search"
          placeholder="Search"
          autoComplete="off"
          value={value}
          onChange={handleSearch}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      {value && (
        data.products.length ? (
          <SearchBox list={data.products} clearSearch={clearSearch} />
        ) : (
          <span>No Results...</span>
        )
      )}
    </form>
  );
}

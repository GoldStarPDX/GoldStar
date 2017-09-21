import React from 'react';

export function Search({ onSearch }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      const { search } = e.target.elements;
      onSearch(search.value);   
    }}>
      <input name="search" />
      <button type="submit"> Search </button>
    </form>
  );
}
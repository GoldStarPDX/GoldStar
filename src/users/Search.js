import React from 'react';

export default function Search({ initial, onSearch }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      const { search } = e.target.elements;
      onSearch(search.value);   
    }}>
      <input name="search" defaultValue={ initial } />
      <button type="submit"> Search </button>
    </form>
  );
}
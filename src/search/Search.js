import React from 'react';

export function Search({ onSearch }) {
  return (
    <div id="flashcardSearch">
      <h2>Looking for flash cards?</h2>
      <form onSubmit={e => {
        e.preventDefault();
        const { search } = e.target.elements;
        onSearch(search.value);   
      }}>
        <input name="search" placeholder="Search your topic here." />
        <button type="submit"><i className="fa fa-search fa-2x"></i><span className="clip">Search</span></button>
      </form>
    </div>
  );
}
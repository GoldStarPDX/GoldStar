import React from 'react';
import { Link } from 'react-router-dom';

export default function Results({ search, searchResults }) {
  return (
    <div>
      <Link to="/Teacher">Back to Profile</Link>
      <h2>Search results for {search}</h2>
      <p>{searchResults && searchResults.map(results => {
        return <li key={results.id}>{results.title}</li>;
      })}</p>
    </div>
  );
}
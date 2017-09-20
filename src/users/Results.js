import React from 'react';
import { Link } from 'react-router-dom';

export default function Results({ search }) {
  return (
    <div>
      <Link to="/Teacher">Back to Profile</Link>
      {search}
    </div>
  );
}
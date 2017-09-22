import React from 'react';

export default function AddStudent({ onAdd }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      onAdd({name: e.target.elements[0].value});   
    }}>
      <input name="student" placeholder="Add a Student" />
      <button type="submit"> Add Student </button>
    </form>
  );
}
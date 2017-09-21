import React from 'react';

export default function AddSet({ onAdd }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      const { set } = e.target.elements;
      onAdd(set.value);   
    }}>
      <input name="set" placeholder="Name your new set" />
      <button type="submit"> Add Set </button>
    </form>
  );
}
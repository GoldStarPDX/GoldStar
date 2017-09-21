import React from 'react';

function AddClass({ addClass }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      addClass({ name: e.target.elements.name.value });
    }}>
      <input required name="name"/>
      <button type="submit"> Add Class </button>
    </form>
  );
}

export default AddClass;
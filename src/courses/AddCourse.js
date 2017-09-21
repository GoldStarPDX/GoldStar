import React from 'react';

function AddCourse({ addCourse }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      addCourse({ name: e.target.elements.name.value });
    }}>
      <input required name="name"/>
      <button type="submit"> Add Course </button>
    </form>
  );
}

export default AddCourse;
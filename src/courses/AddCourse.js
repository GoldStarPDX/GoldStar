import React from 'react';

export default function AddCourse({ addCourse, teacher }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      addCourse({ 
        title: e.target.elements[0].value, 
        teacher: teacher
      });
    }}>
      <input required name="title" placeholder="Name your new course" />
      <button type="submit">Add</button>
    </form>
  );
}
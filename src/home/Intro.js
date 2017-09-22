import React from 'react';

export default function Intro() {
  return (
    <div id="intro">
      <h2>What is GoldStar?</h2>
      <p>GoldStar is a teacher-driven, flashcard-based learning app powered by the <a href="https://quizlet.com" rel="noopener noreferrer" target="_blank">Quizlet API</a>.</p>
      <h3>How can teachers use GoldStar?</h3>
      <p>After logging in, teachers can do one of three things:</p>
      <ul>
        <li><strong>Create a class,</strong> such as Biology 101 or History of Ancient Greece. Complete your class roster by inviting students to participate using their email addresses.</li>
        <li><strong>Create a Flash Card Set,</strong> such as Photosynthesis Facts or Greek Mythology Midterm. Flash Card sets can then be assigned to individual classes.</li>
        <li><strong>Search for Flash Cards.</strong> Select cards from sets created by other teachers on Quizlet, and assign those cards to your existing Flash Card Sets.</li>
      </ul>
      <h3>How can students use GoldStar?</h3>
      <p>After logging in, students can review flash cards assigned by a teacher.</p>
      <p>Students are given the ability to star flash cards they are struggling with. Teachers might then choose to spend more time reviewing those concepts in class.</p>
    </div>
  );
}
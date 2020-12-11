import React from 'react';
import Link from 'next/link';

const Note = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));
  console.log('notes = ', notes);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <ul>
          {notes.map((note, i) => (
            <li key={i}>
              <Link href='/notes/[id]' as={`/notes/${note.id}`}>
                <a>
                  <strong>{note.title}</strong>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Note;

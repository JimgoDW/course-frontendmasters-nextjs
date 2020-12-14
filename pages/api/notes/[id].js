import nc from 'next-connect';
import notes from '../../../src/data/data';

const getNote = (id) => notes.find((note) => note.id === parseInt(id));

// Handler
const handler = nc()
  .get((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    res.json({ data: note });
  })
  .patch((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    const i = notes.findIndex((note) => note.id === parseInt(req.query.id));
    const noteUpdates = { ...note, ...req.body };

    notes[i] = noteUpdates;
    res.json({ data: noteUpdates });
  })
  .delete((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    const i = notes.findIndex((note) => note.id === parseInt(req.query.id));

    notes.splice(i, 1);
    res.json({ data: note });
  });

export default handler;

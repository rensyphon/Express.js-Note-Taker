// const fs = require('fs');
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

// app.get('/api/notes', (req, res) => {
//     fs.readFile('./db/db.json', 'utf-8', (err, data) => {
//         if (err) throw err;
//         console.log(data);
//         let noteData = JSON.parse(data);
//         console.log(noteData);
//         return res.json(noteData);
//     });
// });

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
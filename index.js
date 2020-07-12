const express = require('express');
const app = express();

app.use(express.json());

const posts = [
  {id: 1, name: 'title 1'},
  {id: 2, name: 'title 2'}
]
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/posts' , (req, res) => {
  res.send(posts);
}

app.get('/api/posts/:id', (req, res) => {
  const post = posts.find( post => post.id === parseInt(req.params.id));
  if(!post) res.status(404).send('There is no posts for given id');
  res.send(post);
}

app.post('/api/posts', (req, res) => {
  const post = {
    id: posts.length + 1,
    name: req.body.name
  };
  posts.push(post);
  res.send(post);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))

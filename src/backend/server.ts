import * as express from "express";
import * as compression from "compression";

const app = express();

app.use(compression());

app.use('/bundle', express.static(__dirname + '/prodapp/src/frontend'));

app.get('/', (_req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get("/friends", (_req, res) => {
  const friends = [
    { name: "Joe Smith", id: 1 },
    { name: "Jane Doe", id: 2 }
  ];
  res.json({ friends: friends });
});

const port = 7001;
app.listen(port, () => console.log(`api listening on port ${port}`));

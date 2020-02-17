import * as express from "express";

const app = express();


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
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

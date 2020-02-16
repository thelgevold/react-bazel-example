import * as express from "express";

const app = express();

app.get("/friends", (_req, res) => {
  const friends = [
    { name: "Joe Smith", id: 1 },
    { name: "Jane Doe", id: 2 }
  ];
  res.json({ friends: friends });
});

const port = process.env.PORT || 7001;
app.listen(port, () => console.log(`api listening on port ${port}`));

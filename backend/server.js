import Express from "express";
const port = 3000;

const app = Express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello API"
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
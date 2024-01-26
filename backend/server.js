import Express from "express";
const port = 3000;
import teachers from "./routes/teachers.js"

const app = Express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello API"
  })
})

app.use('/api/teachers', teachers)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

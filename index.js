import express from "express"
import dotenv from "dotenv"
dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    success: true,
    account: "ibrahimrehmam",
    message: "Welcome to Ibrahim's Docker account route"
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
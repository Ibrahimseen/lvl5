import express from "express"
import dotenv from "dotenv"
dotenv.config();

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.json({
    success: true,
    account: "ibrahim",
    message: "Welcome to Ibrahim's Docker account route"
  })
})
app.get('/ibrahim', (req, res) => {
  res.json({
    success: true,
    account: "helloBaby",
    message: "Welcome to harry the gang"
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
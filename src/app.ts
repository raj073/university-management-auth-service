import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Routes
//app.use('',)

app.get('/', async (req: Request, res: Response) => {
  res.send(`Everything is Working Successfully`)
})

export default app

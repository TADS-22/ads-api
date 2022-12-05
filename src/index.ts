import 'express-async-errors'
import cors from 'cors'
import express from 'express'
import { errorHandler } from './modules/commons/middlewares/error'

const app = express()
app.use(cors())
app.use(express.json())

app.use(errorHandler)

app.listen(3000, () => console.log('Server is up!'))

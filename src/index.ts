import express, { Application } from 'express'

import exampleRouter from './routes/example'

const app: Application = express()

/* ROUTES */
app.use('/example', exampleRouter)

/* LISTENING */
const PORT: Number = 4000
app.listen(PORT, (): void => console.log(`running on port ${PORT}`))

export default app

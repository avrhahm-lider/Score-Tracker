import 'dotenv/config'
import express from 'express'
import { connectDB } from './db.js'
import scoresRouter from './routes/scores.js'
import leaderboardRouter from './routes/leaderboard.js'
import statsRouter from './routes/stats.js'
import gamesRouter from './routes/games.js'
import playersRouter from './routes/players.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(scoresRouter)
app.use(leaderboardRouter)
app.use(statsRouter)
app.use(gamesRouter)
app.use(playersRouter)

app.get('/', (req, res) => {
    res.json({ message: 'Score Tracker API is running' })
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({
        error: err.name || 'Error',
        message: err.message,
        ...(err.details && { details: err.details })
    })
})

async function start() {
    await connectDB()
    app.listen(PORT, () => {
        console.log(`Connected. Server listening on port ${PORT}`)
    })
}

start().catch((err) => {
    console.error('Failed to start server:', err)
    process.exit(1)
})

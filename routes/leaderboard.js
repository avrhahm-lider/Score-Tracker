import { Router } from 'express'
import * as leaderboardService from '../services/leaderboardService.js'

const router = Router()


router.get('/leaderboard/global', async (req, res) => {
    res.json(await leaderboardService.getGlobalLeaderboard())
})


router.get('/leaderboard/:game', async (req, res) => {
    res.json(await leaderboardService.getGameLeaderboard(req.params.game))
})

export default router

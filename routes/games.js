import { Router } from 'express'
import * as gamesService from '../services/gamesService.js'

const router = Router()


router.get('/games', async (req, res) => {
    res.json(await gamesService.getGamesList())
})

export default router

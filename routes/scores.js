import { Router } from 'express'
import * as scoresService from '../services/scoresService.js'

const router = Router()


router.post('/scores', async (req, res) => {
    const saved = await scoresService.createScore(req.body)
    res.status(201).json(saved)
})

export default router

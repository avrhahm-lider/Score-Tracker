import { Router } from 'express'
import * as statsService from '../services/statsService.js'

const router = Router()


router.get('/stats', async (req, res) => {
    res.json(await statsService.getStats())
})

export default router

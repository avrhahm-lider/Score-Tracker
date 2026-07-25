import { Router } from 'express'
import * as playersService from '../services/playersService.js'

const router = Router()


router.get('/player/:name', async (req, res) => {
    res.json(await playersService.getPlayerProfile(req.params.name))
})

export default router

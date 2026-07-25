import { Score } from '../models/Score.js'
import { createValidationError } from '../errors.js'
import * as scoresDal from '../dal/scoresDal.js'

export async function createScore(body) {
    const parsed = Score.safeParse(body)

    if (!parsed.success) {
        throw createValidationError('Invalid data', parsed.error.issues)
    }

    const { playerName, game, points, level, duration } = parsed.data

    const doc = {
        playerName,
        game,
        points,
        ...(level !== undefined && { level }),
        ...(duration !== undefined && { duration }),
        createdAt: new Date()
    }

    return scoresDal.insertScore(doc)
}

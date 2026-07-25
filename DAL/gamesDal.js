import { getScoresCollection } from '../db.js'

export async function distinctGames() {
    const scores = await getScoresCollection()
    return scores.distinct('game')
}

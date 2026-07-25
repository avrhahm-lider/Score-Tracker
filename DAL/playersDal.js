import { getScoresCollection } from '../db.js'

export async function getPlayerProfileFacet(name) {
    const scores = await getScoresCollection()

    const [result] = await scores.aggregate([
        { $match: { playerName: name } },
        {
            $facet: {
                allScores: [
                    { $sort: { createdAt: -1 } },
                    { $project: { _id: 1, playerName: 1, game: 1, points: 1, level: 1, duration: 1, createdAt: 1 } }
                ],
                bestPerGame: [
                    { $group: { _id: '$game', best: { $max: '$points' } } },
                    { $project: { _id: 0, game: '$_id', best: 1 } },
                    { $sort: { game: 1 } }
                ]
            }
        }
    ]).toArray()

    return result
}

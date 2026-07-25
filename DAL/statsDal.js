import { getScoresCollection } from '../db.js'

export async function getStatsFacet() {
    const scores = await getScoresCollection()

    const [result] = await scores.aggregate([
        {
            $facet: {
                topScore: [
                    { $sort: { points: -1 } },
                    { $limit: 1 },
                    { $project: { _id: 0, playerName: 1, points: 1, game: 1 } }
                ],
                totalScores: [
                    { $count: 'count' }
                ],
                popularGame: [
                    { $group: { _id: '$game', submissions: { $sum: 1 } } },
                    { $sort: { submissions: -1 } },
                    { $limit: 1 },
                    { $project: { _id: 0, game: '$_id', submissions: 1 } }
                ],
                averagePoints: [
                    { $group: { _id: null, avg: { $avg: '$points' } } },
                    { $project: { _id: 0, avg: 1 } }
                ]
            }
        }
    ]).toArray()

    return result
}

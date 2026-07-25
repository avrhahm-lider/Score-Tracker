import { getScoresCollection } from '../db.js'


function withRankStages() {
    return [
        { $group: { _id: null, docs: { $push: '$$ROOT' } } },
        { $unwind: { path: '$docs', includeArrayIndex: 'rank' } },
        { $addFields: { 'docs.rank': { $add: ['$rank', 1] } } },
        { $replaceRoot: { newRoot: '$docs' } }
    ]
}

export async function findTopByGame(game, limit) {
    const scores = await getScoresCollection()
    return scores.aggregate([
        { $match: { game } },
        { $sort: { points: -1 } },
        { $limit: limit },
        ...withRankStages(),
        { $project: { _id: 0, rank: 1, playerName: 1, points: 1, level: 1 } }
    ]).toArray()
}

export async function findGlobalTop(limit) {
    const scores = await getScoresCollection()
    return scores.aggregate([
        { $sort: { points: -1 } },
        { $limit: limit },
        { $project: { _id: 0, playerName: 1, game: 1, points: 1, createdAt: 1 } }
    ]).toArray()
}

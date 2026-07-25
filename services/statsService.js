import * as statsDal from '../dal/statsDal.js'

export async function getStats() {
    const result = await statsDal.getStatsFacet()

    return {
        topScore: result.topScore[0] || null,
        totalScores: result.totalScores[0]?.count || 0,
        popularGame: result.popularGame[0] || null,
        averagePoints: result.averagePoints[0]?.avg ?? 0
    }
}

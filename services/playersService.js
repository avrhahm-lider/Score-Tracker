import * as playersDal from '../dal/playersDal.js'

export async function getPlayerProfile(name) {
    const result = await playersDal.getPlayerProfileFacet(name)

    return {
        allScores: result.allScores,
        bestPerGame: result.bestPerGame
    }
}

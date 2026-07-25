import * as leaderboardDal from '../dal/leaderboardDal.js'

const LIMIT = 10

export async function getGameLeaderboard(game) {
    return leaderboardDal.findTopByGame(game, LIMIT)
}

export async function getGlobalLeaderboard() {
    return leaderboardDal.findGlobalTop(LIMIT)
}

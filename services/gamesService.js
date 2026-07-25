import * as gamesDal from '../dal/gamesDal.js'

export async function getGamesList() {
    return gamesDal.distinctGames()
}

import { getScoresCollection } from '../db.js'


export async function insertScore(doc) {
    const scores = await getScoresCollection()
    const result = await scores.insertOne(doc)
    return { _id: result.insertedId, ...doc }
}

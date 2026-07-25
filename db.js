import 'dotenv/config'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URI
const dbName = process.env.DB_NAME || 'score-tracker'

if (!uri) {
    throw new Error('MONGO_URI is missing in .env file')
}

const client = new MongoClient(uri)

let db = null
let connectingPromise = null

export async function connectDB() {
    if (db) return db
    if (!connectingPromise) {
        connectingPromise = client.connect().then(() => {
            db = client.db(dbName)
            console.log(`Connected to MongoDB Atlas (db: ${dbName})`)
            return db
        })
    }
    return connectingPromise
}

export async function getScoresCollection() {
    const database = await connectDB()
    return database.collection('scores')
}

export async function closeDB() {
    await client.close()
    db = null
    connectingPromise = null
}

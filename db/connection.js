import {MongoClient, ObjectId} from 'mongodb'
import dotenv from 'dotenv'
import dns from 'dns'
dns.setServers(["1.1.1.1","8.8.8.8"])

dotenv.config()
console.log(process.env.MONGO_URI);

const client = new MongoClient(process.env.MONGO_URI)

try {
    await client.connect()
    console.log("Connected");
    
}catch(e){
    console.log("Failed to connect", e);
    process.exit()
    
}
const db = await client.db("Score_Tracker")
const games = await db.createCollection("games")

export default games

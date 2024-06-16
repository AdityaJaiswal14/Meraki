import { connect, disconnect } from "mongoose"

async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL)
  } catch (error) {
    console.log(error)
    throw new Error("MongoDB Connection Failed")
  }
  
}

async function disconnectFromDatabase() {
  try {
    await disconnect()
  } catch (error) {
    console.log(error)
    throw new Error("MongoDB Disconnection Failed")
  }
  
}

export {connectToDatabase,disconnectFromDatabase}
import {MongoClient} from 'mongodb';

export const connectToDatabase = async (url)=>{
  try {
    let client = await MongoClient.connect(url)
    console.log("connected")
    let db = client.db("project5")
    return db; 

  }
  catch (error){
    console.log(error)

  }

} 
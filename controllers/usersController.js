import { connectToDatabase } from "../db.js";
import {compare, hash} from 'bcrypt'
let url = "mongodb+srv://pharsha0002_db_user:WrlKatzRyUdcv00t@cluster0.u5igkku.mongodb.net/?appName=Cluster0"

export const getUsers = async(req, res )=>{
  try {
    let db = await connectToDatabase(url);
    let usersCollection = await db.collection('users')
    let users = await usersCollection.find().toArray()
    if(!users){
      res.status(404).json({message: "no users found"})
    } 

    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({message: error.message})
  }

}

export const addUser =async (req, res )=>{
  
  const {id, name, age, email, password, mobile} = req.body;
    // const user = req.body;


  try {
    if(password.length < 6){
       res.status(400).json({message: "invalid password"})
    }
    let hashPwd = await hash(password, 12)
    let db = await connectToDatabase(url);
    let usersCollection = await db.collection('users')
    const user = {
      id: id,
      name: name,
      age: age,
      email: email,
      password: hashPwd,
      mobile: mobile
    }
    let resp = await usersCollection.insertOne(user)
    if(!resp){
      res.status(404).json({message: "no users found"})
    } 
    console.log(resp)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

export const getUserById = async(req, res )=>{
  try {
    const {id} = req.params;
    let db = await connectToDatabase(url);
    let usersCollection = await db.collection('users')
    let user = await usersCollection.findOne({id: id})
    if(!user){
      res.status(404).json({message: "no user found"})
    } 

    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

export const updateUser = (req, res )=>{
  res.status(200).json({message: "test"})
}

export const deleteUser = (req, res )=>{
  res.status(200).json({message: "test"})
}

export const loginUser = async (req, res )=>{
  try {
    const {email, password} = req.body;
    let db = await connectToDatabase(url);
    let usersCollection = await db.collection('users')
    let user = await usersCollection.findOne({email: email})
    if(!user){
      res.status(404).json({message: "no user found"})
    } 
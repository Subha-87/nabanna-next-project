const {MongoClient} = require('mongodb')

const {username,password} = process.env

// Connection URI
export const mongoURI = "mongodb+srv://subhajit87:ryan123@cluster0.qpdatrx.mongodb.net/pwd-it?retryWrites=true&w=majority&appName=Cluster0"

// Create a new MongoClient

/*const client = new MongoClient(mongoURI)..

// Connect to the MongoDB database

const DBconnect = async() =>{
    try {

        await client.connect()
        console.log('Yahoo !!!Connected successfully to MongoDB');
        
    } catch (err) {
        console.error('Oh No !!Error connecting to MongoDB:', err);
    }
}

module.exports = DBconnect*/
const mongoose = require('mongoose');
async function connectDB(){
    try{
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is undefined. Check your environment variables.");
        }

        // Set up event listeners before connecting
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("connection.on db is connected");
        });

        connection.on('error', (error) => {
            console.log("something is wrong in mongo db", error);
        });

        // Connect to the database
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB IS CONNECTED!");

        // if (!process.env.MONGODB_URI) {
        //     throw new Error("MONGODB_URI is undefined. Check your environment variables.");
        //   }
        // await mongoose.connect(process.env.MONGODB_URI)
        // console.log("DB IS CONNECTED !")

        // const connection = mongoose.connection
        // connection.on('connected', ()=>{
        //     console.log("connectION.ON db is connected ")
        // })
        // connection.on('error', ()=>{
        //     console.log("somthing is wrong in mongo db", error)
        // })
    }catch(error){
        console.log(" catch something is wrong ", error)
    }
}
module.exports = connectDB
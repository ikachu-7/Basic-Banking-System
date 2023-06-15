const { default: mongoose } = require("mongoose")
mongoose.set('strictQuery',false);

exports.connectDB = async ()=> {
   try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected at ${conn.connection.host}`);
   } catch (error) {
    console.log(error);
   }
}
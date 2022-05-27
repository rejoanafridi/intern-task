const mongoose = require("mongoose")

const connectDatabase = async () => {
     try {
          const conn = await mongoose.connect(process.env.MONGODB_URI)
          console.log(`Mongodb database connection successfully`)
     }catch(err){
          console.log(err)
          process.exit(1)
     }
}

module.exports = connectDatabase
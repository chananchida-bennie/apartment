const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        //code
        await mongoose.connect(process.env.DATABASE, {           
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log('เชื่อมต่อสำเร็จ')
    } catch (err) {
        // err
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB
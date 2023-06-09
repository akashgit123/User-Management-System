const mongoose = require('mongoose');

mongoose.set('strictQuery',false)

// const connectDb = async()=>{
//     try{
//         // mongodb connection string
//         const con = await mongoose.connect(process.env.MONGO_URI,{
//             useNewUrlParser:true,
//             useUnifiedTopology:true,
//             useFindAndModify:false,
//             useCreateIndex:true
//         })
//         console.log(`Mongodb connected : ${con.connection.host}`)

//     }catch(err){
//         console.log(err);
//         process.exit(1)
//     }
// }

const connectDb =()=>{mongoose.connect('mongodb://127.0.0.1:27017/user',{useNewUrlParser:true, useUnifiedTopology:true})
.then(() => {
    console.log("Connection Successful")
}).catch((err) => {
    console.log("Some Error",err); 
});
}

module.exports = connectDb
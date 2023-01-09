const mongoose = require('mongoose');
const DB = process.env.DB;

const dbConnect = () => { 
mongoose.set("strictQuery", true);

mongoose.connect(DB,{
    // newUrlParse: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("DB connected successfully");
}).catch((e)=>{
    console.log("Error : " + e);
});
};


module.exports = dbConnect;
require('dotenv').config();
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>
    console.log(">>>>>>>>>> MongoDB Connected successfully ✅ !!!!!!")
)
.catch((err) => console.log(">>>>>>>>> DB Error: ❎", err));

module.exports = connect;
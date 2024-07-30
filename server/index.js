const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();

//connect to mongodb
mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://prasadbhajnawale123:oe8a1mMNB4mPf2UO@cluster0.fgp8mny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MONGO Connected"))
.catch((err) => console.log("Connection Error", err));


app.use(bodyparser.json({limit:"2mb"}));
app.use(cors());

//routes
const todoRoutes = require('./routes/todo.routes');
app.use('/api', todoRoutes);

// port 
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
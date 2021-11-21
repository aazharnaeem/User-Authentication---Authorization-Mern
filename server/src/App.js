const express = require('express');
const cors = require('cors');

const conneciton = require('./config')
const { user } = require('./routes')

const app = express();


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to API')
});

app.use('/user', user)

conneciton.once('open', () => {
    console.log('database connected')
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`listening to server at ${PORT}`)
})
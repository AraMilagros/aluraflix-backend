const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const itemsRouter = require('./routes/items');
app.use(cors());
app.use(express.json());
app.use('/api', itemsRouter);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('API es running...');
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

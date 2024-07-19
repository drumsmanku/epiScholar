// /backend/server.js
const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const port = 3001;

app.use(cors());
app.use('/api', dataRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

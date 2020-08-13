const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listenign on port ${port}....`));

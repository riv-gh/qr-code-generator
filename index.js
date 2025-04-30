const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:ssid/', (req, res) => {
    const ssid = req.params.ssid;
    const password = req.query.password;
    
    res.render('qr-code-page', { ssid, password });
});

app.get('/', (req, res) => {
    const ssid = req.query.ssid;
    const password = req.query.password;
    
    res.render('index', { ssid, password });
});

app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});

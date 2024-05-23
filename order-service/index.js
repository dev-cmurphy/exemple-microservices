// order-service/index.js
const express = require('express');
const app = express();
app.use(express.json());

let orders = [];

app.post('/orders', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.status(201).json(order);
});

app.get('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (order) {
        res.json(order);
    } else {
        res.status(404).send('Order not found');
    }
});

app.listen(3002, () => {
    console.log('Order service running on port 3002');
});

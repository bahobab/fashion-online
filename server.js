const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

const path = require('path');

if (process.env.NODE_enV !== 'production') 
    require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // MUST be after the line above!!!

const app = express();
const port = process.env.PORT || 4000;

// middlewares app.use(helmet()); app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

if (process.env.NODE_enV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build/index.html'));
    });
}

app.listen(port, error => {
    if (error) 
        throw error;
    console.log(`Server running on port ${port}`);
});

app.post('/payment', (req, res) => {
    // console.log('>> req.body', req.body)

    const {token, amount} = req.body;
    const body = {
        source: token.id,
        amount,
        currency: 'USD',
        description: 'Payment for Fashion online'

    };
    // console.log('>> payment body', body)

    stripe
        .charges
        .create(body, (stripeErr, stripeRes) => {
            if (stripeErr) {
                res
                    .status(500)
                    .send({error: stripeErr});
            } else {
                res
                    .status(200)
                    .send({success: stripeRes});
            }
        });
});
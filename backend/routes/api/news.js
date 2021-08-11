//apikey = 3544f9dee45945b383830e6b1adfdd3c
const express = require('express');
const router = express.Router();
const {
    asyncHandler
} = require('../../utils')
const axios = require('axios')

//GET localhost:8080/api/news/

router.get('/', asyncHandler(async (req, res) => {
    const config = {
        method: 'get',
        url: 'https://newsapi.org/v2/everything?q=tesla&pageSize=5&apiKey=3544f9dee45945b383830e6b1adfdd3c',
        headers: {
            'Cookie': '__cfduid=de6be67825682bbc185b1f3be84ad04911614788432'
        }
    };

    const response = await axios(config)
    res.json(response.data)
}))
module.exports = router;

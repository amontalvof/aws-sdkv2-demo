const path = require('path');
const fs = require('fs');
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

console.log('Importing movies data');

const jsonPath = path.join(__dirname, 'movieData.json');
const allMovies = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

allMovies.forEach(function (movie) {
    const params = {
        TableName: 'Movies',
        Item: {
            year: movie.year,
            title: movie.title,
            info: movie.info,
        },
    };

    docClient.put(params, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(movie.title, data);
        }
    });
});

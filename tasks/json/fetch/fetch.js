/**
 * 1. You need to make a GET request for the resource: https://jsonplaceholder.typicode.com/posts using fetch method
 * 2. Save the response to response.json file
 * 3. Save only those items, where id < 20
 * DOCS: https://www.npmjs.com/package/node-fetch
 */
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'response.json');

async function getRequest() {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await result.json();
    let arr2 = data.filter(item => {
        return item.id < 20;
    });
    fs.appendFile(filePath, JSON.stringify(arr2), err => {
        if (err) {
            throw err;
        }
    })
};

getRequest();





// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => console.log(json));
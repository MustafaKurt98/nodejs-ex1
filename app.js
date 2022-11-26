const { json } = require('express')
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
const arr = []
const fs = require('fs');


for (let i = 0; i < 100; i++) {
    arr.push({ 'id': i,
     'name': 'name' + i ,
     'age': i + 10,
     'address': 'address' + i,
     'phone': 'phone' + i,
     'email': 'email' + i,
    })
}

app.get('/', (req, res) => {
    fs.readFile('data.json', (err, data) => {
        res.send(data)

        if (err) throw err;
        console.log('Data written to file');
    });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
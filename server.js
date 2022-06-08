const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let dwellers = {
    '1': {
        'age': 30,
        'birthName': 'Maria',
        'name':'Maria',
        'birthYear': '1992', 
        'birthLocation': 'Kirov, Russia',
        'talent': 'writing, talking to cats, food spotting',
        'size': 'L',
        'occupation': 'writer, hacker, cat collector',
        'suit': 'pale human',
        'hasTail': 'no',
        },
    '2':{
        'age': 31,
        'birthName': 'German',
        'name':'German',
        'birthYear': '1990', 
        'birthLocation': 'Kirov, USSR',
        'talent': 'watching others work, spider impersonation, walking fast',
        'size': 'XXL',
        'occupation': 'student, security manager',
        'suit': 'pale human',
        'hasTail': 'no',
    },
    '3':{
        'age': 7,
        'birthName': 'unknown',
        'name':'Ulyss',
        'birthYear': '2015', 
        'birthLocation': 'unknown',
        'talent': 'toilet discipline, food seeking',
        'size': 'S',
        'occupation': 'water rescue',
        'suit': 'mackerel',
        'hasTail': 'yes',
    },
    '4':{
        'age': 12,
        'birthName': 'unknown',
        'name':'Sheldon',
        'birthYear': '2010', 
        'birthLocation': 'Kirov, Russia',
        'talent': 'playing dead, killing birds',
        'size': 'XS',
        'occupation': 'hair distributor',
        'suit': 'dark chocolate',
        'hasTail': 'yes',
    },
    '5':{
        'age': 'unknown',
        'birthName': 'Mammillaria',
        'name':'Mammillaria',
        'birthYear': 'unknown', 
        'birthLocation': 'Netherlands',
        'talent': 'standing still, sprouting flowers',
        'size': 'XXXS',
        'occupation': 'house decoration',
        'suit': 'green',
        'hasTail': 'no',
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'name':'unknown',
        'birthYear': 'unknown', 
        'birthLocation': 'unknown',
        'talent': 'unknown',
        'size': 'unknown',
        'occupation': 'unknown',
        'suit': 'unknown',
        'hasTail': 'unknown',
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const dwellerName = request.params.name.toLowerCase()
    if(dwellers[dwellerName]){
        response.json(dwellers[dwellerName])
    }else{
        response.json(dwellers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
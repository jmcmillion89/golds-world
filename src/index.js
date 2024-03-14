import _ from 'lodash';


import mission from '/src/mission.js'
import applications from '/src/applications.js'
import rules from '/src/rules.js'
import server from '/src/server.js'




const missionBtn = document.querySelector('#mission')
const rulesBtn = document.querySelector('#rules')
const serverBtn = document.querySelector('#server')
const joinBtn = document.querySelector('#join')
const content = document.querySelector('#content')


missionBtn.addEventListener('click', () => {
    mission()
});

rulesBtn.addEventListener('click', () => {
    rules()
})

serverBtn.addEventListener('click', () => {
    server()
})

joinBtn.addEventListener('click', () => {
    applications()
})
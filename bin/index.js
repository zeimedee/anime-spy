#!/usr/bin/env node

const axios = require('axios');
const readline = require('readline');
var id;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter anime title 👉🏼 ', (title) => { 
 
        axios.get(`https://api.jikan.moe/v3/search/anime?q=${title}&limit=1`)
             .then((res) => { id = res.data.results[0].mal_id  
            
                 axios.get(`https://api.jikan.moe/v3/anime/${id}`)
                      .then(response => {
                          console.log('Title:',response.data.title)
                          console.log('Title:',response.data.title_english)
                          console.log('Episodes:',response.data.episodes)
                          console.log('Airing:',response.data.airing ? 'YES': 'NO')
                          console.log('Duration:',response.data.aired.string)
                          console.log('Synopsis:',response.data.synopsis)
                        })
                      .catch(err => console.log(err))}
             )
            .catch(error => console.log(error))

            rl.close(); 
        });
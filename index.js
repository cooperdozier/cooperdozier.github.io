"use strict"
const repos = [];
const ul_projects = document.querySelector(".projects"); 

const username = 'cooperdozier'; 
const url = `https://api.github.com/users/${username}/repos`;


// finally tried duckduckgo's suggestions instead of google's to base my fetch off of, which had simpler stuff and then built inside the data.then
fetch(url)
  .then(response => response.json())
  .then(data => {
    for (let i=0; i<data.length; i++) {
    let stuff = document.createElement('li');
    ul_projects.appendChild(stuff).innerHTML = `<h3>${data[i].name}</h3><p>${data[i].description}</p><a href="https://github.com/${data[i].full_name}">GitHub Repository</a>`
    }
}
    )
  .catch(error => console.error('Error:', error));


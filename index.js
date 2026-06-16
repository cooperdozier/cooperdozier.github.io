"use strict"
const repos = [];
const ul_projects = document.querySelector(".projects"); 

// I used AI from google search to write the basic fetch API code below then modified
// to use my username, add descriptions to the logged repo names, and then to 
// add the responses to arrays (name, description and full_name) to be used later instead of only console.logging them
// further discussio below

// begin modified AI sourced code
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

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(repositories => {
//     console.log('Public Repositories:', repositories);
    // repositories.forEach(repo => console.log(repo.name, repo.description));
//     repositories.forEach(repo => repos.push([repo.name,repo.description,repo.full_name]));
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
//    setTimeout(()=> {console.log(repos.length)},1000);
  // end AI sourced code
// console.log(repositories);
  // Discussion of Use of AI Code: Having gotten a relatively simple answer that I understood it seemed
  // silly to restart and try to figure it out again from scratch. I am getting the hang of 
  // how fetch API requests are supposed to be shaped. The GitHub documentation suggests using 
  // octokit to do this but there were parts, particularly about workflows with code that I didn't
  // understand how to use. It didnt appear to be javascript. The v4 GraphQL API would have allowed 
  // me to access only my pinned repositories and it seemed like it might be straightforward 
  // to implement except for the character escaping for the query. But the fetch API by itself
  // seems simpler, I just can't yet recall how to write them off the top of my head and trying
  // to adapt examples from other projects and exercises tends to turn into a morass for me.
  // The google AI returned a clean example with no project specific eatures that I could easily adjust.
  // And it doesn't look like any mysteries that could be security holes or weird bugs (and is keyless 
  // unlike the GitHub docs example; and we don't learn how to hide keys until week 4).
  // Now I can delete node_modules and package.json since I don't need node or npm or octokit,
  // leavig a much less bloated and more simplified project with just a bit of javascript code.
  // And using Octokit per the documentation wouldn't have involved directly calling the Fetch API
  // per the instructions.


  // I used Google Search AI to look up if I could just put the HTML in quote marks
  // and used innerHTML per the example instead of appendChild which I think would have been 
  // more complicated
  //start AI code
//   repos.forEach(repo => { ul_projects.innerHTML += `
//     <li>
//       <h3>${repo.name}</h3>
//       <p>${repo.description}</p>
//       <a href="${repo.full_name}">GitHub Repository</a>
//     </li>
//   `;});
    // end AI code
// decided not to use the above AI code as it was incomplete and I figured it out
// setTimeout(() => {
// for (let i=0; i<repos.length; i++) {
//     ul_projects.appendChild(`
//     <li>
//       <h3>${repos[i][0]}</h3>
//       <p>${repos[i][1]}</p>
//       <a href="${repos[i][2]}">GitHub Repository</a>
//     </li>)`)}
//   }},5000);

//     repos.forEach(repo => { 
//         const new_li = document.createElement("li");
//         ul_projects.appendChild(new_li);
//         new_li.innerHTML = `<h3>${repo.name}</h3><p>${repo.description}</p><a href="https://github.com/${repo.full_name}">GitHub Reposistory</a>`
//     })
//   console.log(repos[0][0]);
// let li = document.createElement("li");
// ul_projects.appendChild(li);
// li.innerHTML= `<h3>${repos[0][0]}</h3>
//        <p>${repos[0][1]}</p>
//        <a href="${repos[0][2]}">GitHub Repository</a>`
//     console.log(ul_projects);

// tried and deleted several other things; repos was never filled in time even when trying setTimeouts (apparently in the wrong places)

// async function getGitHub(url) {
//     // const client_id = "YOUR_KEY_HERE";
//     const endpoint = url;
//     try {
//         const response = await fetch(endpoint);
//         const returnedData = await response.json();
//         const processedData = await repos.push[returnedData.name,returnedData.description,returnedData.full_name];
//         console.log(processedData)
//         return returnedData;
//         // const imgDiv = document.querySelector(".background-img");
//         // imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
//         console.log(returnedData)
//     } catch (error) {
//         console.error(error)
//     }
// }

// let data = getGitHub(url);
// // setTimeout(() => {

// // }, 3000);
// data.then(onfulfilled(() => {
//  console.log(1)
// }))
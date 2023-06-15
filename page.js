//Esercizio 1.
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/albums")
// xhr.send();
// xhr.onload = function () {
//     const albumsJSON = xhr.response;
//     const albums = JSON.parse(albumsJSON);
//     if (xhr.status === 200) {
//         console.log(albums);
//     } else {
//         console.log("Risorsa non trovata");
//     }

// };

//Esercizio 2.
// const xhr = new XMLHttpRequest();
// function httpRequest(type, url, callback){
// xhr.open(type, url);
// xhr.send();
// xhr.onload = function() {
//     callback(xhr.responseText);
// }};
// //Callback
// httpRequest("GET", "https://jsonplaceholder.typicode.com/albums", function(params){
//     const param = JSON.parse(params);
//     if (xhr.status === 200){
//         console.log(param);
//     } else {
// console.log("Risorsa non trovata");
//     }
// });

//Esercizio 3.
// const xhr = new XMLHttpRequest();
// function httpRequest(type, url, callback){
// xhr.open(type, url);
// xhr.send();
// xhr.onload = function() {
//     callback(xhr.responseText);
// }};

//Callback todos
// httpRequest("GET", "https://jsonplaceholder.typicode.com/todos", function(params){
//     const param = JSON.parse(params);
//     if (xhr.status === 200){
//         console.log(param);
//     } else {
//         console.log("Risorsa todos non trovata");
//     }
// });

//Callback users
// httpRequest("GET", "https://jsonplaceholder.typicode.com/users", function(params){
//     const param = JSON.parse(params);
//     if (xhr.status === 200){
//         console.log(param);
//     } else {
//         console.log("Risorsa users non trovata");
//     }
// });

//Esercizio 4.
// const urlBase = `https://jsonplaceholder.typicode.com/`
// const xhr = new XMLHttpRequest();
// function httpRequest(type, url, callback){
// xhr.open(type, url);
// xhr.send();
// xhr.onload = function() {
//     callback(xhr.responseText);
// }};
// //Funzione per gestire la risposta xhr
// function getResponse(responseXhr) {
// const todo = JSON.parse(responseXhr);
// if (xhr.status === 200) {
//     console.log(todo);
// } else {
//     console.log("Risorsa non trovata");
// }
// };
// //Rotte dalla funzione getResponse
// const todos = httpRequest("GET", `${urlBase}todos`, getResponse);
// const users = httpRequest("GET", `${urlBase}users`, getResponse);
// var url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=9cdf8398fce1488b85e2d327535c2f31'
// console.log(url)

// var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })
var url = 'https://pokeapi.co/api/v2/pokemon'
function fetchUser(){
    fetch(url)
    .then((data) => console.log(data.json())
    // .then((data) => {}));
}
fetchUser();
      
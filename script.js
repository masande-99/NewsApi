function getProducts() {
    fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=9cdf8398fce1488b85e2d327535c2f31")
      .then((res) => res.json())
      .then((data) => {
        let list = document.getElementById("output");
        console.log(data.articles);
  
        data.articles.forEach(articles => {
          let article = `
              <div class="container" >
                <div class="column3">
                  <img class="image" src=${articles.urlToImage} />
                  <h4 class="c3">${articles.title}</h4>
                  <h4>${articles.description}</h4>
                  <a href=${articles.url}><h4>${articles.url}</h4></a>
                </div>
              </div>
            `;
          list.innerHTML += article;
        });
      });
    try {
    } catch (error) {
      console.log(error);
    }
  }
  getProducts();
  


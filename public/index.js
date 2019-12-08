
(function(l, r) { 
    if (l.getElementById('livereloadscript')) 
    return; r = l.createElement('script');
     r.async = 1;
      r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1';
       r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
'use strict';

var MovieBaseClass = function MovieBaseClass(movieObj){
    this.movieData = movieObj;
};

MovieBaseClass.prototype.renderMovie = function renderMovie (){
    return ("\n        <div class=\"card col-md-4\">\n<div>\n                <h5>" + 
    (this.movieData.name) + 
    "</h5>\n<p>" +
     (this.movieData.description) +
      "</p>\n</div>\n<button id=\"contributor\" type=\"button\" class=\"btn btn-info\" onclick=\"movieInstance.contributerListing(" +   (this.movieData.id) + ")\"> Contributors </button>  \n        </div>");
};

var Movie = /*@__PURE__*/(function (MovieBaseClass) {
    function Movie(movieObj){
MovieBaseClass.call(this, movieObj);
    }

    if ( MovieBaseClass ) Movie.__proto__ = MovieBaseClass;
    Movie.prototype = Object.create( MovieBaseClass && MovieBaseClass.prototype );
    Movie.prototype.constructor = Movie;

    return Movie;
}(MovieBaseClass));

var MovieApp = function MovieApp(){
     // var contributors = document.getElementById('contributor');
     // searchInput.addEventListener('click',function(event) {
     //  //console.log("search key pressed")
            
     //  //console.log(availableMovies)
     //  if (availableMoviesRaw) {
     //      var availableMovies = JSON.parse(availableMoviesRaw).results;
     //      var filteredMovies = availableMovies.filter(function(_movie){
     //          return(_movie.title.toLowerCase().indexOf(searchText.toLowerCase()) >-1);
     //      });
     //      if (filteredMovies.length > 0) {
     //          var searchResults=JSON.stringify(filteredMovies);
     //          localStorage.setItem('filtered-movies', searchResults);
     //      }
     //  }
     // }.bind(this))
 };

 MovieApp.prototype.contributerListing = function contributerListing (val){
     console.log("MOVED TO INDEx")
     var renderArea = document.getElementById('renderArea');
     renderArea.innerHTML="Contributers id  :   ";
     console.log(val);
     renderArea.innerHTML+=val
 };

  MovieApp.prototype.loadPopularMovies = async function loadPopularMovies () {
     // const xhr = new XMLHttpRequest(),
     //  method = "GET",
      url = "https://api.github.com/repositories?since=0";
            

     // xhr.open(method, url, true);
     // xhr.onreadystatechange = function () {
     //  // debugger;
     //  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
     //       console.log(xhr.responseText);
     //      var rawResponseData = xhr.responseText;
     //      console.log(rawResponseData);
     //      localStorage.clear();
     //      localStorage.setItem('popular-movies',rawResponseData);
     //     // console.log(xhr.responseText);
     //      var jsonData = JSON.parse(rawResponseData);
     //      this.movieListing(jsonData.results);
     //  }
     // }.bind(this);
     // xhr.send();
     //console.log(fetch(url));
     var response = await fetch(url);
     console.log(("response: " + response));
     if(response.ok){
         localStorage.clear();
           
         var jsonResponse = await response.json();
         localStorage.setItem('popular-movies',JSON.stringify(jsonResponse));
         console.log(jsonResponse);
         this.movieListing(jsonResponse);
     }
     else{
         console.log("ERROR");
     }
 };

 MovieApp.prototype.movieListing = function movieListing (repos){
     console.log("MOVED TO MOVIELISTING");
     var totalRepos = repos.length;
     var renderArea = document.getElementById('renderArea');
     var row = document.createElement('div');
     row.className = "row";

     for(var i=0; i<totalRepos; i++){
         // console.log('movies --> ', movies);
     //  renderArea.innerHTML = "";
     //  var movieContainer = document.createElement('div');
     //  movieContainer.className = "card col-md-4";
     //  movieContainer.style.width = "18rem";

     //  var cardBody = document.createElement('div');

     //  var cardTitle = document.createElement('h5');
     //  cardTitle.innerText = movies[i]["title"];

     //  var cardText = document.createElement('p');
     //  cardText.innerText = movies[i]["overview"];

     //  var imgTag = document.createElement('img')
     //  imgTag.src = "https://image.tmdb.org/t/p/w500/" + movies[i]["poster_path"];
     //  imgTag.width = '100';
     //  imgTag.height = '100';

            
     //  cardBody.appendChild(cardTitle);
     //  cardBody.appendChild(imgTag);
     //  cardBody.appendChild(cardText);

     //  movieContainer.appendChild(cardBody)
     //  row.appendChild(movieContainer);
     //  // movieContainer.innerText = movies[i]["title"];
     //  renderArea.appendChild(row);
     // }

     var movieObj = new Movie(repos[i]);
    renderArea.innerHTML+= movieObj.renderMovie();
 }

   
 };
var movieInstance = new MovieApp();
movieInstance.loadPopularMovies();

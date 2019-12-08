import Movie from './movie';

class MovieApp{
    constructor(){
        // var contributors = document.getElementById('contributor');
        // searchInput.addEventListener('click',function(event) {
        //     //console.log("search key pressed")
            
        //     //console.log(availableMovies)
        //     if (availableMoviesRaw) {
        //         var availableMovies = JSON.parse(availableMoviesRaw).results;
        //         var filteredMovies = availableMovies.filter(function(_movie){
        //             return(_movie.title.toLowerCase().indexOf(searchText.toLowerCase()) >-1);
        //         });
        //         if (filteredMovies.length > 0) {
        //             var searchResults=JSON.stringify(filteredMovies);
        //             localStorage.setItem('filtered-movies', searchResults);
        //         }
        //     }
        // }.bind(this))
    }

    contributerListing(val){
        var renderArea = document.getElementById('renderArea');
        renderArea.innerHTML=""
        console.log(val);
        let response = await fetch(url);
        console.log(`response: ${response}`);
        if(response.ok){
            localStorage.clear();
           
            var jsonResponse = await response.json();
            localStorage.setItem('popular-movies',JSON.stringify(jsonResponse));
            console.log(jsonResponse)
            this.movieListing(jsonResponse)
        }
        else{
            console.log("ERROR");
        }


        renderArea.innerHTML+=val;
    }

     async loadPopularMovies() {
        // const xhr = new XMLHttpRequest(),
        //     method = "GET",
         url = "https://api.github.com/repositories?since=0";
            

        // xhr.open(method, url, true);
        // xhr.onreadystatechange = function () {
        //     // debugger;
        //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        //          console.log(xhr.responseText);
        //         var rawResponseData = xhr.responseText;
        //         console.log(rawResponseData);
        //         localStorage.clear();
        //         localStorage.setItem('popular-movies',rawResponseData);
        //        // console.log(xhr.responseText);
        //         var jsonData = JSON.parse(rawResponseData);
        //         this.movieListing(jsonData.results);
        //     }
        // }.bind(this);
        // xhr.send();
        //console.log(fetch(url));
        let response = await fetch(url);
        console.log(`response: ${response}`);
        if(response.ok){
            localStorage.clear();
           
            var jsonResponse = await response.json();
            localStorage.setItem('popular-movies',JSON.stringify(jsonResponse));
            console.log(jsonResponse)
            this.movieListing(jsonResponse)
        }
        else{
            console.log("ERROR");
        }
    }

    movieListing(repos){
        console.log("MOVED TO MOVIELISTING");
        var totalRepos = repos.length;
        var renderArea = document.getElementById('renderArea');
        var row = document.createElement('div');
        row.className = "row";
        var mytest =  `<h2>${totalRepos}</h2>`;

        for(var i=0; i<totalRepos; i++){
            // console.log('movies --> ', movies);
        //     renderArea.innerHTML = "";
        //     var movieContainer = document.createElement('div');
        //     movieContainer.className = "card col-md-4";
        //     movieContainer.style.width = "18rem";

        //     var cardBody = document.createElement('div');

        //     var cardTitle = document.createElement('h5');
        //     cardTitle.innerText = movies[i]["title"];

        //     var cardText = document.createElement('p');
        //     cardText.innerText = movies[i]["overview"];

        //     var imgTag = document.createElement('img')
        //     imgTag.src = "https://image.tmdb.org/t/p/w500/" + movies[i]["poster_path"];
        //     imgTag.width = '100';
        //     imgTag.height = '100';

            
        //     cardBody.appendChild(cardTitle);
        //     cardBody.appendChild(imgTag);
        //     cardBody.appendChild(cardText);

        //     movieContainer.appendChild(cardBody)
        //     row.appendChild(movieContainer);
        //     // movieContainer.innerText = movies[i]["title"];
        //     renderArea.appendChild(row);
        // }

        let movieObj = new Movie(repos[i]);
       renderArea.innerHTML+= movieObj.renderMovie();
    }

   
 }
}
let movieInstance = new MovieApp();
movieInstance.loadPopularMovies();
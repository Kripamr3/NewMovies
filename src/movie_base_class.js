class MovieBaseClass{
    constructor(movieObj){
        this.movieData = movieObj;
    }

    renderMovie(){
        return `
        <div class="card col-md-4">
            <div>
                <h5>${this.movieData.name}</h5>
                <p>${this.movieData.description}</p>
            </div>   
            <button id="contributor" type="button" class="btn btn-info" onclick="movieInstance.contributerListing(${this.movieData.name})">Contributors</button>  
        </div>`;
    }
}

// class Movie extends MovieBaseClass{

// }
export default MovieBaseClass;
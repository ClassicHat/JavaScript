
$(document).ready(() => {
    $.ajax({url: "https://api.themoviedb.org/3/movie/now_playing?api_key=2dc8b3afe9ba013bcb6cee9519e7cdf6&language=en-US&page=1", success: function(valReturned){
        //variable to hold the movie array returned from the api
        //splice the returned results so that there is only the top three
        var movieArray = valReturned.results.splice(0,3);
        console.log(movieArray);
        
        //Create a Vue Component
        Vue.component("moviecards", {
            props:["themovies"],
            template: `
                <section>
                    <div v-for="movie in themovies" class="card mb-3" style="max-width: 540px;">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img v-bind:src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" class="card-img" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{movie.title}}</h5>
                                    <p class="card-text">{{movie.overview}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `
        })

        //Create a Vue instance
        new Vue({
            el: "#app",
            data:{
                movies: movieArray,
            }
        })
    }})//End api call
})





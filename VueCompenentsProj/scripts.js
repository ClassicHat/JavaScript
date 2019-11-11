
$(document).ready(() => {
    $.ajax({url: "https://api.themoviedb.org/3/movie/now_playing?api_key=2dc8b3afe9ba013bcb6cee9519e7cdf6&language=en-US&page=1", success: function(valReturned){
        //variable to hold the movie array returned from the api
        //splice the returned results so that there is only the top three
        var movieArray = valReturned.results.splice(0,3);
        //console.log(movieArray);
        
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
                                <div class="card-body" v-bind:id=movie.id>
                                    <h5 class="card-title">{{movie.title}}</h5>
                                    <p class="card-text">{{movie.overview}}</p>
                                    <button v-on:click="viewreviews(movie)">View Reviews</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `,
            data: function(){
                return{
                    viewreviewpressed: 0,
                }
                
            },
            methods:{
                viewreviews(movie){
                    $.ajax({url: `https://api.themoviedb.org/3/movie/${movie.id}/reviews?api_key=2dc8b3afe9ba013bcb6cee9519e7cdf6&language=en-US&page=1`, success: function(valReturned){
                        //console.log(valReturned.results);

                        for(i=0; i < valReturned.results.length; i++){
                            //create an element to hold the review
                            var theAuthor = document.createElement('p');
                            var theReview = document.createElement('p');

                            //add the data
                            theAuthor.innerHTML = "Author: " + valReturned.results[i].author;
                            theReview.innerHTML = valReturned.results[i].content;

                            //Append the p tags
                            $('#' + movie.id).append(theAuthor);
                            $('#' + movie.id).append(theReview);

                        }

                    }})
                }
            }
        })

        //Create a Vue instance
        new Vue({
            el: "#app",
            data:{
                movies: movieArray,
            },
            methods:{
                
            }
        })
    }})//End api call
})





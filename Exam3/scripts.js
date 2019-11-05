

//jQuery api call for simplicity
$(document).ready(() => {
    $.ajax({url: "https://api.themoviedb.org/3/tv/popular?api_key=2dc8b3afe9ba013bcb6cee9519e7cdf6&language=en-US&page=1", success: function(theTvShows){
        console.log(theTvShows);

        var app = new Vue({
            el: "#tvshows",
            data:{
                tvShowArray: theTvShows.results,
            }//End Data
        })//End Vue
    }})
})//End jQuery api call


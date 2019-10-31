var aryMovies = ["Matrix", "Mulan", "Don't Ask Me"];

Vue.component("sectionlist",{
    props:["themovies"],
    template: `
        <section>
            <h1><slot></slot></h1>
            <img v-bind:src = "imgSrc">
            <list-item v-for="movie in themovies">{{movie}}</list-item>
        </section>
    `,
    data: function(){
        return{
            imgSrc: "interstellar.jpeg"
        }
    }
})

Vue.component("list-item", {
    template: `<p><slot></slot></p>`
})

new Vue({
    el: "#app",
    data:{
        mess: "Hello World",
        movies: aryMovies,
        aryTvShows: ["Sirens", "New Amsterdam", "The Dragon Prince"]
    }
})
class MovieItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">`;
        this.shadowDOM.innerHTML += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`;
        this.classList.add('col-lg-3')
        this.classList.add('col-md-4')
        this.classList.add('col-sm-6')
        this.classList.add('p-1')
        this.shadowDOM.innerHTML += `
               <div class="card" style="background: #A5D7E8">
                    <img class="card-img-top" alt="poster not found" src="https://image.tmdb.org/t/p/w400/${this._movie.poster_path}">
                    <div class="card-body">
                        <h3 class="card-title">${this._movie.title}</h3>
                        <div class="card-text">${this._movie.release_date} <br> <span class="fa fa-star checked" style="color: goldenrod"></span> ${this._movie.vote_average} / 10 <br>${this._movie.overview.slice(0, 300) + (this._movie.overview.length > 300 ? " ..." : "")}</div>
                    </div>
                </div>
            `;
    }
}

customElements.define("movie-item", MovieItem);
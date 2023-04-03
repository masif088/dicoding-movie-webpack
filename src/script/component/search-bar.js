class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">`;
        this.shadowDOM.innerHTML += `
            <style>
                ::placeholder {
                      color: #A5D7E8 !important;
                      opacity: 1; /* Firefox */
                }
                
                :-ms-input-placeholder { 
                    color: #A5D7E8 !important;;
                }
                
                ::-ms-input-placeholder { 
                    color: #A5D7E8 !important;;
                }
            </style>
            <div style="color: #A5D7E8">
                <h1>Movie Site</h1>
                <p >Explore your movies reach your imagination</p>
                <div class="form-group row">
                    <div class="col-lg-9 col-md-8 col-sm-12 p-1">
                        <input placeholder="Search Your Favorite Movie " class="form-control " id="searchElement" type="search" style="background: #19376D;color: #A5D7E8 !important; ">
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-12 p-1">
                        <button id="searchButtonElement" type="submit" class="btn" style="background: #A5D7E8;width: 100%">Search</button>
                    </div>
                </div>
            </div>`;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
class DataSource {
    static listMovie() {
        return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a6a3536e87b1b0c1082e144f4885ddfe&language=en-US&page=1`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results)
                } else {
                    return Promise.reject(`An error occurred in displaying`)
                }
            });
    }

    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=a6a3536e87b1b0c1082e144f4885ddfe&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results)
                } else {return Promise.reject(`film with keyword ${keyword} is not found`)}
            });
    }
}

export default DataSource;
import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    // document.addEventListener("DOMContentLoaded", inita);


   const searchElement = document.querySelector("search-bar");
   const movieListElement = document.querySelector("movie-list");


   const onButtonSearchClicked = async () => {
       if (searchElement.value===""){
           initial()
       }else{
           try {
               const result = await DataSource.searchMovie(searchElement.value);
               renderResult(result);
           } catch (message) {
               fallbackResult(message)
           }
       }

   };
    const initial = async () => {
        try {
            const result = await DataSource.listMovie();
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };
    initial();
   const renderResult = results => {
       movieListElement.movies = results;
   };

   const fallbackResult = message => {
       movieListElement.renderError(message);
   };

   searchElement.clickEvent = onButtonSearchClicked;

};
 
export default main;

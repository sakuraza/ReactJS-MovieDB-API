import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    /* const movies= [
      {id: 0, poster_src:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/hSfuKPtyEryeFzapZ8UgZd4aESu.jpg", title:"Avengers: Infinity War", overview: "Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction…"},
      {id: 1, poster_src:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/s9UPgyelWtEqjS3HT3TUuHU9BHU.jpg", title:"The Avengers", overview: "This is my second overview"}
    ]
    
    var movieRows= [];
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <MovieRow movie={movie}/>
      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows} */

    this.performSearch("avengers")
  }

  performSearch(searchTerm){
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=c019d0e1ae3b02b8d1ed496707a71b16&query=" + searchTerm
    $.ajax({
      url:urlString,
      success: (searchResults) =>{
        console.log("Fetched data successfully")
        //console.log(searchResults)
        const results = searchResults.results
        console.log(results[0])

        var movieRows= []

        results.forEach((movie) => {
          movie.poster_src="https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.poster_path
          //console.log(movie.poster_pathv)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) =>{
        console.error("Failed to fetch data")
      }
    })
  }
  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
              <img width="50" src={logo} className="App-logo" alt="twitter logo" />
          
              </td>
              <td width="8"></td>
              <td>
                <h1>Movies DB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "100%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }}
        onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

        {this.state.rows}
      </div>
    );
  } 
}

export default App;

import React, { Component } from 'react';
import { directive } from '@babel/types';

class MovieRow extends Component {
    state = {  }

    viewMovie(){
        // console.log("Trying to view movie")
        // console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() { 
        return ( 
            <div>
                <table key={this.props.movie.id}>
                <tbody>
                <tr>
                    <td>
                    <img width="120" src={this.props.movie.poster_src} alt="poster"/>
                    </td>
                    <td>
                    <h3>{this.props.movie.title}</h3>  
                    <p>{this.props.movie.overview}</p>
                    <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
         );
    }
}
 
export default MovieRow;
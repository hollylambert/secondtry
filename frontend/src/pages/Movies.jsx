import { useState } from 'react';
import data from '../MovieData.json';

const md = data.MovieData;

function Movies() {
  const [listOfMovies] = useState(md);

  // eslint-disable-next-line no-lone-blocks
  {
    /*
  const addMovie = () => {
    setListOfMovies([
      ...md,
      {
        Category: 'Comedy',
        Title: 'The Proposal',
        Year: 2009,
        Director: 'Anne Fletcher',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };
*/
  }
  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*
      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
            */}
    </>
  );
}

export default Movies;

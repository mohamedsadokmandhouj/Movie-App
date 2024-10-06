import React from 'react';
import Moviecard from '../components/Moviecard'; // Adjust path if needed

function Movislist({ data }) {
  return (
    <div className="row">
      {data.map((movie, i) => (
        <div key={i} className="col">
          <Moviecard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default Movislist;


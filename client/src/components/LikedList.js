import React from "react";

const LikedList = ( likedMovies ) => {
  return (
    <div>
      <section>
      <h1>Action</h1>
      <div>
        {likedMovies.filter(el => {
          return el.id === 18;
        })}
      </div>
      </section>
    </div>
  );
};

export default LikedList;
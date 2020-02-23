import React from "react";

function ListContainer({ articles }) {
  console.log("articles in listContainer:", articles);
  return (
    <ul>
      {articles.map(el => (
        <li key={el.payload.id}>{el.payload.title}</li>
      ))}
    </ul>
  );
}

export default ListContainer;

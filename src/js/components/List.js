import React from "react";
import ListContainer from "./ListContainer";
import { useSelector } from "react-redux";

const List = () => {
  const articles = useSelector(state => state.articles);
  console.log("articles redux:", articles);
  return (
    <div>
      <h2>Articles</h2>
      <ListContainer articles={articles} />
    </div>
  );
};

export default List;

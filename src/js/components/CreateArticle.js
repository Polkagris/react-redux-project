import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_ARTICLE } from "../actionTypes/addArticleActionType";

function CreateArticle() {
  const [articleTitle, setArticleTitle] = useState("");
  const dispatch = useDispatch();

  const addArticle = () => ({ type: ADD_ARTICLE });

  const handleOnInputChange = e => {
    setArticleTitle(e.target.value);
  };

  /* const handleAddArticleClick = () => {
    dispatch({
      type: ADD_ARTICLE,
      payload: { title: articleTitle, id: "temp_id" }
    });
  }; */

  return (
    <div>
      <h2>Create a new article</h2>
      <input type="text" value={articleTitle} onChange={handleOnInputChange} />
      <button onClick={() => dispatch(addArticle())}>Add</button>
    </div>
  );
}

export default CreateArticle;

import { ADD_ARTICLE } from "../actionTypes/addArticleActionType";

const initalState = {
  articles: [
    {
      type: ADD_ARTICLE,
      payload: { title: "First article, huzza!", id: 1 }
    }
  ]
};

function rootReducer(state = initalState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;

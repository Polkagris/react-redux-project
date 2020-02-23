import { ADD_ARTICLE } from "../actionTypes/addArticleActionType";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}
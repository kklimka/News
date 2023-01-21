import ArticlesTypes from "./ArticlesTypes";
export default interface ResType {
  results: Array<ArticlesTypes>;
  totalResults?: number;
  userInput?: string;
}

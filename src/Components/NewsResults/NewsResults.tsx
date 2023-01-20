import { useState } from "react";
import { Button } from "@mui/material";
import "./NewsResults.scss";
import DataTypes from "../../types/DataTypes";
import NewsCard from "../NewsCard/NewsCard";
import Loader from "../Loader/Loader";
import ArticlesTypes from "../../types/ArticlesTypes";
type Props = {
  news: DataTypes;
  setDetailedNews: React.Dispatch<React.SetStateAction<object>>;
};
function NewsResults({ news, setDetailedNews }: Props) {
  const showNewsOnPage = 8;
  const [newsOnPage, setNewsOnPage] = useState<number>(showNewsOnPage);

  const filteredArticles: Array<ArticlesTypes> = [];
  const filterArray = news.res?.articles?.map((arr) => {
    const title = arr.title?.toLowerCase().split(" ");
    const description = arr.description?.toLowerCase().split(" ");
    const findTitle = title?.some(
      (word) => word === news.userInput?.toLowerCase()
    );
    const findDescription = description?.some(
      (word) => word === news.userInput?.toLowerCase()
    );
    if (findTitle || findDescription) {
      filteredArticles.push(arr);
    }
  });
  console.log(filteredArticles);
  const newArticles =
    typeof news.userInput === "string"
      ? filteredArticles.slice(0, newsOnPage)
      : news.res?.articles?.slice(0, newsOnPage);
  const totalNews = Number(newArticles?.length);
  if (Object.keys(news).length !== 0) {
    return (
      <div>
        <section className="searchResults">
          <div className="numberOfResults">
            Results: {totalNews}
          </div>
          <div className="searchNews">
            {newArticles?.map((articles) => {
              return (
                <NewsCard
                  articles={articles}
                  key={Math.random()}
                  setDetailedNews={setDetailedNews}
                  userInput={news.userInput}
                />
              );
            })}
          </div>
        </section>
        <div className="loadMoreButtonWrapp">
          <Button
            disabled={newsOnPage >= totalNews}
            className="loadMoreButton"
            onClick={() => {
              setNewsOnPage(newsOnPage + showNewsOnPage);
            }}
          >
            Load More
          </Button>
        </div>
      </div>
    );
  }
  return <Loader />;
}

export default NewsResults;

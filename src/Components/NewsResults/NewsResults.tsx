import { useState } from "react";
import { Button } from "@mui/material";
import "./NewsResults.scss";
import DataTypes from "../../types/DataTypes";
import NewsCard from '../NewsCard/NewsCard';
import Loader from "../Loader/Loader";
type Props = {
    news: DataTypes;
    setDetailedNews: React.Dispatch<React.SetStateAction<object>>;
  };
function NewsResults({news, setDetailedNews }: Props) {
  const showNewsOnPage = 8;
  const [newsOnPage, setNewsOnPage] = useState<number>(showNewsOnPage);
  const newArticles = news.articles?.slice(0, newsOnPage);
  const totalNews = Number(news.articles?.length);
  if(Object.keys(news).length !== 0){
  return(
    <div>
      <section className="searchResults">
        <div className="numberOfResults">Results: {news.totalResults}</div>
        <div className="searchNews">
            {
                newArticles?.map((articles)=>{
                    return(<NewsCard articles={articles} key={Math.random()} setDetailedNews={setDetailedNews}/>)
                })
            }
        </div>
      </section>
      <div className="loadMoreButtonWrapp">
        <Button
        disabled={newsOnPage >= totalNews }
          className="loadMoreButton"
          onClick={() => {
            setNewsOnPage(newsOnPage + showNewsOnPage);
          }}
        >
          Load More
        </Button>
      </div>
    </div>
  )}
  return(
    <Loader/>
  )
}

export default NewsResults;

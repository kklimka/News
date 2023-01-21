import "./NewsResults.scss";
import DataTypes from "../../types/DataTypes";
import NewsCard from "../NewsCard/NewsCard";
import Loader from "../Loader/Loader";

type Props = {
  news: DataTypes;
  setDetailedNews: React.Dispatch<React.SetStateAction<object>>;
};
function NewsResults({ news, setDetailedNews }: Props) {
  
  
  if (Object.keys(news).length !== 0) {
    return (
      <div>
        <section className="searchResults">
          <div className="numberOfResults">
            Results: {news.res?.totalResults}
          </div>
          <div className="searchNews">
            {news.res?.results?.map((articles:any) => {
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
          
        </div>
      </div>
    );
  }
  return <Loader />;
}

export default NewsResults;

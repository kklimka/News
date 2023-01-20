import React from "react";
import "./HomePage.scss";
import SearchInput from "../../Components/SearchInput/SearchInput";
import NewsResults from "../../Components/NewsResults/NewsResults";
import DataTypes from "../../types/DataTypes";

type Props = {
  findNews: Function;
  
  news: DataTypes;
  setDetailedNews: React.Dispatch<React.SetStateAction<object>>;
};

function HomePage({ findNews, news, setDetailedNews }: Props) {
  return (
    <div className="HomePage">
      <SearchInput findNews={findNews} />
      <NewsResults news={news} setDetailedNews={setDetailedNews} />
    </div>
  );
}

export default HomePage;

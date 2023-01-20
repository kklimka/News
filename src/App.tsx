import React, { useEffect, useState } from "react";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./Pages/ArticlePage/ArticlePage";
import ApiSearch from "./Api/ApiSearch";
import DataTypes from "./types/DataTypes";
import ApiTopNews from "./Api/ApiTopNews";
import useLocalStorageState from "use-local-storage-state";
import ArticlesTypes from "./types/ArticlesTypes";
import Feature from "./Feature/Feature";
function App() {
  const [searchNews, setSearchNews] = useState<DataTypes>({});
  const [topNews, setTopNews] = useState<DataTypes>({});
  const [detailedNews, setDetailedNews] = useLocalStorageState<ArticlesTypes>(
    "detailedNews",
    {
      defaultValue: {},
    }
  );

  const findNews = (userInput) => {
    ApiSearch(userInput, setSearchNews);
    
  };
  
  
    useEffect(() => {
      ApiTopNews(setTopNews);
    }, []);
  
  
  
  const news = Object.keys(searchNews).length === 0 ? topNews : searchNews;
console.log(news);

  return (
    <Routes>
      <Route path="/" element={<HomePage findNews={findNews} news={news} setDetailedNews={setDetailedNews}/>} />
      <Route path="/article" element={<ArticlePage detailedNews={detailedNews}/>} />
    </Routes>
  );
}

export default App;

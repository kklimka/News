import React from "react";
import { Link } from "react-router-dom";
import "./ArticlePage.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArticlesTypes from "../../types/ArticlesTypes";

type Props = {
  detailedNews: ArticlesTypes;
};
function ArticlePage({ detailedNews }: Props) {
  
  
  return (
    <div className="articlePage">
      <header className="headerImage">
        <img src={detailedNews.urlToImage} alt="logo" className="backgraundImg" />
      </header>
      <article className="articalBox">
        <div className="articalWrapp">
          <h1 className="articleHeader">
            {detailedNews.title}
          </h1>
          <p className="articalText">
            {detailedNews.content}
          </p>
          <p className="articalText ">
          <a href={detailedNews.url} target='_blank' rel="noreferrer">
          Link to the original article
          </a>
          </p>
          
        </div>
      </article>
      <div className="backHomePage">
        <Link to="/" className="backButton">
          <ArrowBackIcon className="buttonIcon"/>
          Back to homepage
        </Link>
      </div>
    </div>
  );
}

export default ArticlePage;

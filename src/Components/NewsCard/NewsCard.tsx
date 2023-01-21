import "./NewsCard.scss";
import { Link } from "react-router-dom";
import { CalendarMonth, ArrowForward } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import ArticlesTypes from '../../types/ArticlesTypes';
import Icon from '../../assets/newspaper.svg'
type Props = {
    articles: ArticlesTypes;
    setDetailedNews: React.Dispatch<React.SetStateAction<object>>;
  };
function NewsCard({articles, setDetailedNews }: Props) {
  const isImgInUrl = typeof(articles.image_url) === 'string' ? articles.image_url : Icon;

  
  return (
    <Card sx={{ maxWidth: 350, marginBottom: 10 }}>
      <CardMedia
        sx={{ height: 150, width: 200, marginLeft: 10}}
        image={isImgInUrl}
        title="image new"
        component='img'
      />
      <CardContent>
        <Typography
          sx={{ marginBottom: 1, marginTop: -1, fontSize: 14 }}
          color="text.secondary"
          className="dateBox"
        >
          <CalendarMonth className="dateIcon" />
          {articles.pubDate?.slice(0, 10)}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {articles.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {articles.description?.slice(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions >
        <Link to="/article" className="moreInformationLink">
          <Button
          onClick={() => {
            setDetailedNews(articles);
          }}
            size="small"
            sx={{ color: "#363636", fontWeight: 700 }}
            className="moreInformationButton"
          >
            Read more <ArrowForward sx={{ fontSize: 16 }} />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
export default NewsCard;

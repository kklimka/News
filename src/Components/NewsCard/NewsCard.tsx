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
import icon from "../../assets/iconN.svg";

function NewsCard() {
  return (
    <Card sx={{ maxWidth: 350, marginBottom: 10 }}>
      <CardMedia
        sx={{ height: 140, width: 350 }}
        image={icon}
        title="image new"
      />
      <CardContent>
        <Typography
          sx={{ marginBottom: 1, marginTop: -1, fontSize: 14 }}
          color="text.secondary"
          className="dateBox"
        >
          <CalendarMonth className="dateIcon" />
          June 29th, 2021
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          The 2020 World's Most Valuable Brands
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Non sed molestie tortor massa vitae in mattis. Eget vel consequat
          hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae
          pharetra...
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/article" className="moreInformationLink">
          <Button
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

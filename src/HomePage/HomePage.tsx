import React from 'react'
import './HomePage.scss';
import { Search, Newspaper, } from '@mui/icons-material';
import {
  Paper,
  InputBase,
  IconButton,

} from "@mui/material";
import NewsCard from '../Components/NewsCard/NewsCard';
function HomePage() {
    return ( 
        <div className="HomePage">
      <header className='searchBox'>
        <Paper

          className='searchInput'
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(33, 29, 29, 0.68)",
          }}
        >
          <IconButton
            sx={{ p: "10px", color: "rgba(255, 255, 255, 0.7)" }}
            aria-label="menu"
          >
            <Newspaper />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "rgba(255, 255, 255, 0.7)" }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}

            type="text"

          />
          <IconButton
            type="submit"
            sx={{ p: "10px", color: "rgba(255, 255, 255, 0.7)" }}
            aria-label="search"
          >
            <Search />
          </IconButton>
        </Paper>
      </header>
      <section className='searchResults'>
        <div className='numberOfResults'>
          Results: 6
        </div>
        <div className='searchNews'>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </section>
    </div>
    );
}

export default HomePage;
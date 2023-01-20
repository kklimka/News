import { Search, Newspaper, } from '@mui/icons-material';
import {
  Paper,
  InputBase,
  IconButton,

} from "@mui/material";
import { useState } from 'react';
import './SearchInput.scss';
type Props = {
    findNews: Function;
  };
function SearchInput({findNews} : Props) {
    const [searchNews, setSearchNews] = useState<string>('');
    const handleChange = (e:any) => {
        setSearchNews(e.currentTarget.value);
    }
    
    const handleSubmit = (e:any) => {
        e.preventDefault();
        findNews(searchNews);
        setSearchNews('');
    }
    
    const handleKeyPress = (e:any) => {
        if(e.key === "Enter") {
            handleSubmit(e);
        }
    }
  return (
    <header className="searchBox">
      <Paper
      onSubmit={handleSubmit}
        className="searchInput"
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
          value={searchNews}
          type="text"
          onChange={handleChange}
            onKeyDown={handleKeyPress}
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
  );
}

export default SearchInput;

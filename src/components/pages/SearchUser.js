import { TextField } from '@mui/material';
import React from 'react'

function SearchUser() {

    const [news, setNews] = React.useState([]);
    let [searchText, setSearchText] = React.useState("");
    let [loading, setLoading] = React.useState(false);

    const searchUser = async () => {
        const NEWS_API = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c46ac2ca763445b7890477ecaebeae99"
        const res = await fetch(NEWS_API);
        const data = await res.json();
        setNews(data.articles);
    }

  return (
    <div>
        <h3>Search User</h3>
        <TextField 
          fullWidth 
          label="Search News by Title"
          value={searchText}
          onChange={handleChange}
          margin='normal'
          />
        <button onClick={searchUser}>Search</button>
        {
          news.map((item) => {
            return (
              <div>{item.title}</div>
            );
          })
        }
    </div>
  )
}

export default SearchUser
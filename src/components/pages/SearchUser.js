import { Card, CardContent, CardMedia, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid2';

function SearchUser() {

    const [news, setNews] = React.useState([]);
    let [searchText, setSearchText] = React.useState("");
    let [loading, setLoading] = React.useState(true);
    const [filteredNews, setFilteredNews] = React.useState([]);

    useEffect(() => {
      const fetchNews = async () => {
        try {
          const NEWS_API = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c46ac2ca763445b7890477ecaebeae99"
          const res = await fetch(NEWS_API);
          const data = await res.json();
          setNews(data.articles);
          setFilteredNews(data.articles);
          setLoading(false);
        } catch (error) {
          console.log("No News Found, error message: ",error);
        } finally {
          setLoading(false);
        }
      }
      fetchNews();
    }, []);
    

    

    const handleChange = (event) => {
      const term = event.target.value;
      setSearchText(term);

      if(term.trim() === ''){
        setFilteredNews(news);
      } else{
        const filtered = news.filter((item) => item.title.toLowerCase().includes(term.toLowerCase()));
        console.log(filtered);
        setFilteredNews(filtered);
      }
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
        {
          loading ? (
            <div>
              <CircularProgress/>
            </div>
          ) : (
            <div>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 4 }}>
                {
                  filteredNews.map((value, index) => {
                    return (
                      <Grid item key={index} size={{md:4, xs:6}} >
                        <Card>
                          <CardMedia sx={{height:'200px'}} image={value.urlToImage} />
                          <CardContent>
                            <Typography variant='h4'>{value.title}</Typography>
                            <Typography variant='body2'>{value.description}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })
                }
              </Grid>
            </div>
          )
        }
    </div>
  )
}

export default SearchUser
import React from 'react';
import { useState, useEffect } from 'react';

const News = () => {

    const [news, setNews] = useState([]);

    const loadNews = () =>{
        // A function to fetch the list of students that will be load anytime that list change
        fetch("http://localhost:8080/api/news")
          .then((response) => response.json())
          .then((news) => {
                setNews(news);
                console.log(news)
              });
      }
      useEffect(() => {
        loadNews();
      }, []);
  return (
    <div className='container'>
        <h1>News</h1>
        {loadNews()}
    </div>
  )
}
export default News;
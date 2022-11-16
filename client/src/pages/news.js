import React from 'react';
import { useState, useEffect } from 'react';

const News = () => {

    const [news, setNews] = useState([]);

    const loadNews = async () =>{
        // A function to fetch the list of students that will be load anytime that list change
        const response = await fetch("http://localhost:8080/api/news");
        const data = await response.json();
        setNews(data);
                
              };
      useEffect(() => {
        loadNews();
      }, []);
  return (
    <div>
        <h1>News</h1>
        {news.map((item, index) => {
          return(
          <><h2>{item.title}</h2>
          <h4>{item.author}</h4>
          <h5>{item.date_added}</h5>
          <p>{item.content}</p>
          </>

        )
        })}
    </div>
  )
}
export default News;
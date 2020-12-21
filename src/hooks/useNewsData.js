import {useState} from 'react';
import axios from 'axios';

const initialNews = [{
  url: '',
  title: '',
  description: '',
  image: '',
  published: '',
  source: ''
}]

const useNewsData = () => {
  const [news, setNews] = useState(initialNews);

  const sortNewsData = (newsData) => {
    let sortedNews = [];
    for (const news of newData) {
      let organizedNews = {
        "url": news.url,
        "title": news.title,
        "description": news.description,
        "image": news.urlToImage,
        "published": news.publishedAt,
        "source": news.source.name
      }
      sortedNews.push(organizedNews)
    }
    return sortedNews
  };

  const getNews = (time) => {
    return axios.post("api/news/articles", {time})
      .then(response => {
        const sortedNews = sortNewsData(response.data);
        return setNews(...[sortedNews])
      })
  }

  return {
    news,
    getNews
  }
}

export default useNewsData;
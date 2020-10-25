const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b2e12bf8b8c042418009597a5371cfa2');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge, coindesk',
  q: 'bitcoin',
  category: 'finance',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
})
.catch(err => console.log(err));
// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge, coindesk',
  domains: 'bbc.co.uk, techcrunch.com, coindesk.com',
  from: '2020-10-01',
  to: '2020-10-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
})
.catch(err => console.log(err));
// // To query sources
// // All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       sources: [...]
//     }
//   */
// })
// .catch(err => console.log(err));
